
import typescript  from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';

const pkg = require('./package');

export default {

  input     : 'src/ts/index.ts',
  moduleId  : pkg.name,
  name      : 'example_react_ts_base_component',
  sourcemap : true,

  output    : {
    file   : 'build/index.js',
    format : 'cjs',
  },

  plugins   : [

    commonjs({
      namedExports: {
        'node_modules/react/index.js'     : ['createElement', 'Component'],
        'node_modules/react-dom/index.js' : ['render'],
      },
    }),

    nodeResolve({
      module: true,
      jsnext: true,
      browser: true,
      extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ],
      preferBuiltins: false
    }),

    typescript({
      typescript: require('typescript') // use local version
    })

  ]
}