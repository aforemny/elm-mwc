const fs = require('fs');
const util = require('util');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeRes = require('rollup-plugin-node-resolve');
const {uglify} = require('rollup-plugin-uglify');

const jsFile = './page.js';

const rollupOptions = {
  input: jsFile,
  plugins: [
    nodeRes({
      module: true,
      jsnext: true,
      main: true,
      browser: true,
      modulesOnly: true,
    }),
    babel({
      presets: ['es2015-rollup'],
    }),
    //uglify(),
  ],
};

const outputOptions = {
  format: 'iife',
  name: 'bundle',
};

const writeFile = util.promisify(fs.writeFile);

async function build() {
  const bundle = await rollup.rollup(rollupOptions);
  const {code} = await bundle.generate(outputOptions);
  await writeFile('bundle.js', code, 'utf-8');
}

build()
