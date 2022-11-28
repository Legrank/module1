import styles from 'rollup-plugin-styles'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs',
  },
  plugins: [
    styles(),
    image(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/env'],
    }),
    livereload(),
    serve({ open: true }),
  ],
}
