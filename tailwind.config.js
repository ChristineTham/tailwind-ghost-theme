const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        enabled: false,
        content: ['./**/*.hbs'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
    ],
}