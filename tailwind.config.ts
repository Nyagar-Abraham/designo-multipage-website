import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				xxs: '400px',
				xs: '440px',
				sm: '500px',
				tab: '560px',
				tabl: '610px',
				mds: '670px',
				sml: '720px',
				lgh: '880px',
			},
			colors: {
				'primary-peach': '#e7816b',
				'primary-black': '#1d1c1e',
				'secondary-peach': '#ffad9b',
				'secondary-black': '#333136',
				'secondary-white': '#f1f3f5',
			},
			backgroundImage: {
				heroAbout: "url('/assets/about/desktop/image-about-hero.jpg')",
				realDeal: "url('/assets/about/desktop/image-real-deal.jpg')",
				worldClass: "url('/assets/about/desktop/image-world-class-talent.jpg')",
				aboutBg:
					"url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
				heroAboutMobile: "url('/assets/about/mobile/image-about-hero.jpg')",
				realDealMobile: "url('/assets/about/mobile/image-real-deal.jpg')",
				worldClassMobile:
					"url('/assets/about/mobile/image-world-class-talent.jpg')",
				aboutBgMobile:
					"url('/assets/about/mobile/bg-pattern-hero-about-desktop.svg')",
				contactBgMobile:
					"url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
				contactBg: "url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')",
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		function ({ addUtilities }: any) {
			addUtilities({
				'.no-scrollbar': {
					'::-webkit-scrollbar': {
						display: 'none',
					},
					'-ms-overflow-style': 'none', // IE 10+
					'scrollbar-width': 'none', // Firefox
				},
			});
		},
	],
} satisfies Config;

export default config;

// import bgDesktop from '@/public/assets/about/desktop/bg-pattern-hero-about-desktop.svg';
// import heroAboutMobile from '@/public/assets/about/mobile/image-about-hero.jpg';
// import realDealMobile from '@/public/assets/about/mobile/image-real-deal.jpg';
// import worldClassMobile from '@/public/assets/about/mobile/image-world-class-talent.jpg';
// import bgMobile from '@/public/assets/about/mobile/bg-pattern-hero-about-desktop.svg';
