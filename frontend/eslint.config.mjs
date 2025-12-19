import antfu from '@antfu/eslint-config'
import stylistic from '@stylistic/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'

export default antfu(
  {
    stylistic: true,
  },
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'app/vue-indent',
    files: ['**/*.{vue, scss}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    },
  },
)
