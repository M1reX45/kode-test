const path = require('path')

const resolvePath = p => path.resolve(__dirname, `./src/${p}`)

module.exports = {
	webpack: {
		alias: {
			'~assets': resolvePath('assets'),
			'~types': resolvePath('shared/types'),
			'~constants': resolvePath('shared/constants'),
			'~ui': resolvePath('shared/ui')
		}
	}
}
