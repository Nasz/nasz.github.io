'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var babel = require('@rollup/plugin-babel');
var terser = require('@rollup/plugin-terser');
var pluginNodeResolve = require('@rollup/plugin-node-resolve');
var yaml = require('@rollup/plugin-yaml');
var fs = require('fs');
var pkg = require('./package.json');

const SRC_DEFAULT = '_javascript';
const DIST_DEFAULT = 'assets/js/dist';

const SRC_PWA = `${SRC_DEFAULT}/pwa`;
const DIST_PWA = '_app';

const banner = `/*!
 * ${pkg.name} v${pkg.version} | © ${pkg.since} ${pkg.author} | ${pkg.license} Licensed | ${pkg.homepage}
 */`;

const isProd = process.env.BUILD === 'production';

function cleanup(...directories) {
  for (const dir of directories) {
    fs.rm(dir, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(`Failed to remove directory ${dir}: ${err}`);
      }
    });
  }
}

function build(filename, opts = {}) {
  const src = opts.src || SRC_DEFAULT;
  const dist = opts.dist || DIST_DEFAULT;

  return {
    input: `${src}/${filename}.js`,
    output: {
      file: `${dist}/${filename}.min.js`,
      format: 'iife',
      name: 'Chirpy',
      banner,
      sourcemap: !isProd
    },
    watch: {
      include: `${src}/**`
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-transform-class-properties']
      }),
      pluginNodeResolve.nodeResolve(),
      yaml(),
      isProd && terser()
    ]
  };
}

cleanup(DIST_DEFAULT, DIST_PWA);

var rollup_config = [
  build('commons'),
  build('home'),
  build('categories'),
  build('page'),
  build('post'),
  build('misc'),
  build('app', { src: SRC_PWA, dist: DIST_PWA }),
  build('sw', { src: SRC_PWA, dist: DIST_PWA })
];

exports.default = rollup_config;
