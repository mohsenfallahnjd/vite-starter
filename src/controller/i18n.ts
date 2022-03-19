/*-----------------------------------------------------------------
- Load locales and register it
-----------------------------------------------------------------*/
import { createI18n } from 'vue-i18n';
import path from 'path';
import deepMerge from 'deepmerge';
import config from './config';

const { locales } = config;

/**
 * Make locales empty object
 *
 * @returns {object}
 */
const makeLocalesObj = (): object => {
    const obj: {[key: string]: any} = {};
    locales.map((locale) => { // eslint-disable-line
        obj[locale] = {};
    });
    return obj;
};
let messages: any = makeLocalesObj();
type files = {
    root: any | undefined,
    modules: any | undefined,
};
const importedFiles: files | any = {
    root   : null,
    modules: null,
};

// Load files
importedFiles.root = require.context('@/locales', true, /\.(js|ts|json)$/);
importedFiles.modules = require.context('@modules', true, /\/locales[\S]*\.(js|ts|json)$/);

/**
 * Get nth occurrence of string
 *
 * @param {*} string
 * @param {*} subString
 * @param {*} index
 * @returns {number}
 */
const getPosition = (string: any, subString: any, index: any): number => string.split(subString, index).join(subString).length;

// Merge messages
Object.keys(importedFiles).forEach((section) => {
    const importedMessages : any = makeLocalesObj();
    importedFiles[section].keys().forEach((fileName: string) => {
        let locale :any = null;
        let file :any = null;
        const content = importedFiles[section](fileName).default;
    
        if (section.includes('modules')) {
            locale = fileName.substring(getPosition(fileName, '/', 3) + 1, getPosition(fileName, '/', 3) + 3);
            file = path.basename(fileName, fileName.includes('.ts') ? '.ts' : '.js');
            if (locales.includes(locale)) {
                importedMessages[locale][file] = deepMerge(importedMessages[locale][file] || {}, content);
            }
        } else {
            locale = fileName.substring(2, 4);
            file = fileName.substring(5).replace('.js', '').replace('.ts', '');

            if (locales.includes(locale)) {
                importedMessages[locale][file] = deepMerge(importedMessages[locale][file] || {}, content);
            }
        }
    });
    messages = deepMerge(importedMessages, messages, { arrayMerge: (destinationArray, sourceArray) => sourceArray });
});

// Defaults
const locale = locales[0] || 'fa';
const fallbackLocale = locales[0] || 'fa';
const setDateTimeFormats = {
    short: {
        year : 'numeric',
        month: 'short',
        day  : 'numeric',
    },
    long: {
        year   : 'numeric',
        month  : 'long',
        day    : 'numeric',
        weekday: 'long',
        hour   : 'numeric',
        minute : 'numeric',
    },
};

const dateTimeFormats = {
    en: setDateTimeFormats,
    fa: setDateTimeFormats,
};

// Register messages
const i18n: any = createI18n({
    locale,
    fallbackLocale,
    messages,
    dateTimeFormats,
    globalInjection: true,
});

/**
 * it's ugly but we can use this to translate strings inside js code
 *
 * @param {string} key
 * @returns {string}
 */
export const translate = (key: string): string => {
    if (!key) {
        return '';
    }
    return i18n.global.t(key);
};

export default i18n;
