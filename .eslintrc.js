module.exports = {
    root: true,

    env: {
        browser: true,
        node   : true,
        es2021 : true,
    },

    rules: {
        'max-len': [
            'error',
            {
                code: 256,
            },
        ],
        indent      : ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? [
            'error',
            {
                allow: [
                    'warn', 'error',
                ],
            },
        ] : 'off',
        'no-debugger'                : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'              : ['error', 'never'],
        'linebreak-style'            : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'class-methods-use-this': 'off',
        'no-trailing-spaces'    : [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],
        'arrow-parens'           : ['error', 'always'],
        'no-underscore-dangle'   : 'off',
        'space-in-parens'        : 'off',
        'no-prototype-builtins'  : 'off',
        'import/no-unresolved'   : 'off',
        'import/extensions'      : 'off',
        'no-multiple-empty-lines': 'off',
        'no-unneeded-ternary'    : 'error',
        'brace-style'            : [
            'error',
            '1tbs',
        ],
        curly                              : ['error', 'all'],
        'no-else-return'                   : 'error',
        'no-lonely-if'                     : 'error',
        'import/no-named-as-default'       : 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export'     : 'off',


        'no-undef'                     : 'off',
        'vue/no-multiple-template-root': 'off',

        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute                : 1,
                baseIndent               : 1,
                closeBracket             : 0,
                alignAttributesVertically: true,
            },
        ],
        'vue/require-default-prop'          : 'off',
        'vue/experimental-script-setup-vars': 'off',

        'vue/component-tags-order': [
            'error',
            {
                order: [
                    'script', 'template', 'style',
                ],
            },
        ],
        'vue/no-v-html'                        : 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
            },
        ],
        'vue/html-comment-content-spacing'        : ['error', 'always'],
        'vue/new-line-between-multi-line-property': 'off',
        'vue/no-boolean-default'                  : ['error', 'default-false'],
        'vue/no-empty-component-block'            : 'error',
        'vue/no-multiple-objects-in-class'        : 'error',
        'vue/no-static-inline-styles'             : 'error',
        'vue/no-template-target-blank'            : 'error',
        'vue/require-direct-export'               : 'off',
        'vue/require-name-property'               : 'error',
        'vue/v-for-delimiter-style'               : ['error', 'in'],
        'vue/v-on-function-call'                  : ['error', 'never'],
        'vue/no-deprecated-slot-attribute'        : 'off',
        'vue/multi-word-component-names'          : 'off',
        'vue/no-deprecated-slot-scope-attribute'  : 'warn',
        'vue/max-attributes-per-line'             : [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],

        '@intlify/vue-i18n/no-html-messages': 'off',
        '@intlify/vue-i18n/no-missing-keys' : 'off',
        '@intlify/vue-i18n/no-v-html'       : 'off',

        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration    : true,
                    MethodDefinition       : true,
                    ClassDeclaration       : true,
                    ArrowFunctionExpression: true,
                    FunctionExpression     : true,
                },
            },
        ],

        'jsdoc/require-returns-description': 0,
        'jsdoc/require-param-description'  : 0,
        'jsdoc/check-indentation'          : 1,
        'jsdoc/check-line-alignment'       : 1,
        'jsdoc/check-syntax'               : 1,
        'jsdoc/match-description'          : 0,
        'jsdoc/no-multi-asterisks'         : [
            'warn',
            {
                preventAtMiddleLines: false,
            },
        ],
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['values'],
            },
        ],
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['**/locales/**'],
            rules: {
                'max-len'                       : 'off',
                'v@intlify/vue-i18n/no-raw-text': 'off',
            },
        },
    ],

    parserOptions: {
        parser     : '@typescript-eslint/parser',
        ecmaVersion: 2021,
    },

    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:jsdoc/recommended',
        '@vue/typescript',
    ],
};
