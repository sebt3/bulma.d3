import {terser} from "rollup-plugin-terser";
import inject from '@rollup/plugin-inject';
import node from "rollup-plugin-node-resolve";
import * as meta from "./package.json";

const output = {
    name: "bulma",
    format: "umd",
    indent: false,
    extend: true,
    banner: `// ${meta.name} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author}`,
};
const plugins = [];
const pluginsMin = [
	...plugins,
	terser({output: { preamble: output.banner }})
];

export default [
{
  input: "src/index.js",
  output: { 
    ...output,
    file: `dist/${meta.name}.js`
  },
  plugins: plugins
},
{
  input: "src/index.js",
  output: { 
    ...output,
    file: `dist/${meta.name}.min.js`
  },
  plugins: pluginsMin
},
{
  input: "src/index.nodep.js",
  output: { 
    ...output,
    file: `dist/${meta.name}.nodep.js`
  },
  plugins: [
    inject({select: ['d3-selection', 'select']}),
    ...plugins,
    node()
  ]
},
{
  input: "src/index.nodep.js",
  output: { 
    ...output,
    file: `dist/${meta.name}.nodep.min.js`
  },
  plugins: [
    inject({select: ['d3-selection', 'select']}),
    ...pluginsMin,
    node()
  ]
}
];

