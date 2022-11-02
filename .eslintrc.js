module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['next', 'next/core-web-vitals', 'prettier'],
	plugins: ['testing-library', 'jest-dom', 'unused-imports'],
}
