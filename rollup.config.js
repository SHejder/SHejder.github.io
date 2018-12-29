import browsersync from 'rollup-plugin-browsersync'

export default [{
    input: 'src/app.js',
    output: {
        file: 'build/js/app.min.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        browsersync({server: '.'})
    ],

}];