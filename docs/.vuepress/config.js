const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Документация',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
	['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  base: "/LoggingDoc/",
  themeConfig: {
	logo: '/T2Plus.svg',
    repo: 't2plus/docs',
	
	//docsRepo: 't2plus/docs',
	docsDir: 'docs',
	docsBranch: 'develop',
    editLinks: true,    
    editLinkText: 'Помоги нам улучшить эту страницу!',
    lastUpdated: 'Обновлено',
	nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    nav: [
	  { text: 'Домой', link: 'https://t2plus.ru/', target:'_self', rel:''  },	  
      { text: '', link: '/integration/'},
      // {
        // text: 'Config',
        // link: '/config/'
      // },
      // {
        // text: 'VuePress',
        // link: 'https://v1.vuepress.vuejs.org'
      // }
    ],	
	displayAllHeaders : false,
	sidebar: [
		{
			title: 'Т2 Журнализация',   // required
			//path: '/logging/',      // optional, link of the title, which should be an absolute path and must exist
			collapsable: true, // optional, defaults to true
			sidebarDepth: 0,    // optional, defaults to 1			
			children: [					
			]
		}		
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
	[
		'@vuepress/last-updated',
		{
			dateOptions:{
			hour12: false
			}
		}
	]
  ]
}
