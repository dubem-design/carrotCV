module.exports = {
    darkMode: 'class',
    // purge: {
    //     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    //     safelist: ['bg'],
    // },
    theme: {
        container: {
            center: true,
        },
        extend: {
            transitionProperty: {
                top: 'top',
                left: 'left',
                margin: 'margin',
            },
        },
        // nightwind: {
        //     colorClasses: [
        //         'gradient',
        //         'ring',
        //         'ring-offset',
        //         'divide',
        //         'placeholder',
        //     ],
        // },
    },
    variants: {
        extend: {},
    },
    // plugins: [require('nightwind')],
}
