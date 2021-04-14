'use strict'

const eleventyPackage = require('@11ty/eleventy/package.json')

const env = process.env

const URL = env.URL || 'http://localhost:5000'


// Web/PWA default configuration
module.exports = function () {
	return {
		generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
		today: new Date(), // Used in the sitemap.xml
		url: URL,
		author: 'Bruno de Araújo Alves',
		name: 'Resume | DevBaraus',
		short_name: 'DevBaraus',
		description: 'Sou Bruno de Araújo Alves, estudante de Ciência da Computação e desenvolvedor web.',
		keywords: 'resume, computer, online, web',
		lang: 'pt',
		dir: 'auto',
		categories: ['website', 'resume'],
		start_url: '/?source=pwa',
		display: 'standalone',
		theme_color: '#EE5622',
		offline_enabled: true,
		background_color: '#f0f0f7',
		shortcuts: [],
	}
}
