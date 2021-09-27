module.exports = {
    darkMode: 'class',
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
        nightwind: {
            colorClasses: [
                'gradient',
                'ring',
                'ring-offset',
                'divide',
                'placeholder',
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('nightwind')],
}
