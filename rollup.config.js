import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default ['cjs', 'umd', 'esm']
  .map(format => ({
    input: 'index.js',
    output: {
      name: 'local-storage',
      file: `lib/index.${format}.js`,
      format,
    },
    plugins: [resolve(), terser()]
  }));