module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            transitionProperty: {
                top: 'top',
                margin: 'margin',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
