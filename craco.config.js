const path = require('path')

const resolvePath = p => path.resolve(__dirname, `./src/${p}`)

module.exports = {
	webpack: {
		alias: {
			'~assets': resolvePath('assets'),
			'~pages': resolvePath('pages'),
			'~features': resolvePath('features'),
			'~types': resolvePath('shared/types'),
			'~core': resolvePath('shared/core'),
			'~ui': resolvePath('shared/ui')
		}
	}
}
