'use strict'

const eleventyPackage = require('@11ty/eleventy/package.json')

const env = process.env

const URL = env.URL || 'http://localhost:8080'

// Web/PWA default configuration
module.exports = function () {
	return {
		generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
		today: new Date(), // Used in the sitemap.xml
		url: URL,
		author: 'Bruno de Araújo Alves',
		name: 'Resume | BARAUS',
		short_name: 'BARAUS',
		description:
			'Sou Bruno de Araújo Alves, formado em Ciência da Computação e Desenvolvedor Full Stack.',
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
