import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import { createFilter } from 'rollup-pluginutils';
import { CLIEngine } from 'eslint';

function normalizePath(id) {
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
    }
}

const Configer = {
    input: 'src/index.js',
    output: {
        file: 'dist/McTools.min.js',
        format: 'umd',
        name: 'McTools'
    },
    plugins: [
        nodeResolve(),
        rollupEslint({
            exclude: [ 'node_modules/**', '*/**/__tests__/' ]
        }),
        babel({
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        }),
        json(),
        uglify()
    ]
};

export default Configer
