import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Release Management',
			logo: {
				src: '/src/assets/release-management-planets-transparent.png',
				replacesTitle: true,
			},
			favicon: '/src/assets/release-management-planets-transparent.png',
			social: {
				github: 'https://github.com/atlesque/release-management-book',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
				// Custom fonts
				'@fontsource-variable/inter',
				'@fontsource/spectral',
			],
		}),
	],
});
