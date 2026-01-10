import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// Astro 配置文件
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// 网站标题
			title: 'Weather Cosmos',

			// 设置默认语言为中文
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			// 社交媒体链接配置
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Wea1her' }],

			// 侧边栏导航配置
			sidebar: [


				{
					label: 'Web3开发笔记',
					autogenerate: { directory: 'web3' },
				},

				{
					label: 'vibecoding相关',
					autogenerate: { directory: 'vibe-coding' },
				},
			],
		}),
		mdx(),
	],
});
