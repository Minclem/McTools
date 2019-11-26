import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import { createFilter } from 'rollup-pluginutils';
import { CLIEngine } from 'eslint';

// eslint-disable-next-line no-undef
const isDEV = process.env.NODE_ENV === 'devlepment';

function normalizePath(id) {
    // eslint-disable-next-line no-undef
    return path.relative(process.cwd(), id).split(path.sep).join('/');
}

function rollupEslint(options) {
    var cli = new CLIEngine({
        fix: true,
        exclude: 'node_modules/**'
    });
    
    return {
        name: 'reslint',
        transform: (code, id) => {
            var file = normalizePath(id),
                relt = cli.executeOnText(code, file),
                isExclude = !createFilter(options.include, options.exclude || /node_modules/)(id);

            if (cli.isPathIgnored(file) || isExclude) return null;
            if (relt.results) console.error(cli.getFormatter('codeframe')(relt.results));
        }
    };
}

const plugins = [
    nodeResolve(),
    rollupEslint({
        exclude: ['node_modules/**', '*/**/__tests__/']
    }),
    babel({
        plugins: [
            'external-helpers'
        ],
        exclude: 'node_modules/**'
    }),
    json(),
];

if (!isDEV) {
    plugins.push(uglify());
}

const Configer = {
    input: 'src/index.js',
    output: {
        file: 'dist/mctools.min.js',
        format: 'umd',
        name: 'mctools'
    },
    plugins
};

export default Configer;
