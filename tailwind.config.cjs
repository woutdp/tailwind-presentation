/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            'off-white': '#fcfcfc',
            gray: {
                dark: '#222',
                DEFAULT: '#333',
                light: '#999'
            }
        }
    },
    plugins: []
}
