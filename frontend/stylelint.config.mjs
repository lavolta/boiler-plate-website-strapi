/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-order'],
  // Important : dire à stylelint comment parser .vue et .scss
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['src/assets/scss/**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],

  rules: {
    'no-irregular-whitespace': true,
    'no-empty-source': null,
    'selector-max-id': 1,
    'selector-max-class': 3,
    'selector-max-type': 3,
    'no-descending-specificity': null,

    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use', 'forward', 'theme', 'mixin', 'utility', 'include', 'for'] }],
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          '/^animation-/': 'auto',
          'top': '/^anchor/',
          'right': '/^anchor/',
          'bottom': '/^anchor/',
          'left': '/^anchor/',
        },
      },
    ],

    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'mask',
          'mask-size',
          'mask-position',
          'line-clamp',
          'backdrop-filter',
          'user-select',
          'initial-letter',
          'box-decoration-break',
          'text-fill-color',
          'text-stroke',
          'tap-highlight-color',
          'box-orient',
        ],
      },
    ],

    'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: ['grid-template'] }],

    'declaration-property-unit-disallowed-list': {
      '/^font|^font-size/': ['px'],
    },
    'import-notation': 'string',
    'max-nesting-depth': 4,
    'media-feature-range-notation': 'context',
    'media-feature-name-unit-allowed-list': { width: 'rem' },

    'font-family-no-duplicate-names': null,
    'font-weight-notation': 'numeric',
    'color-hex-length': 'long',
    'color-function-notation': 'modern',
    'lightness-notation': 'percentage',
    'alpha-value-notation': 'percentage',
    'hue-degree-notation': 'number',
  },
}
