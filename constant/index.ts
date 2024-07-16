import blogr from '@/public/assets/web-design/desktop/image-blogr.jpg';
import builder from '@/public/assets/web-design/desktop/image-builder.jpg';
import camp from '@/public/assets/web-design/desktop/image-camp.jpg';
import express from '@/public/assets/web-design/desktop/image-express.jpg';
import Photon from '@/public/assets/web-design/desktop/image-photon.jpg';
import transfer from '@/public/assets/web-design/desktop/image-transfer.jpg';

import boxed from '@/public/assets/graphic-design/desktop/image-boxed-water.jpg';
import change from '@/public/assets/graphic-design/desktop/image-change.jpg';
import science from '@/public/assets/graphic-design/desktop/image-science.jpg';

import airFilter from '@/public/assets/app-design/desktop/image-airfilter.jpg';
import eyecam from '@/public/assets/app-design/desktop/image-eyecam.jpg';
import faceit from '@/public/assets/app-design/desktop/image-faceit.jpg';

import canada from '@/public/assets/shared/desktop/illustration-canada.svg';
import australia from '@/public/assets/shared/desktop/illustration-australia.svg';
import unitedKingdom from '@/public/assets/shared/desktop/illustration-united-kingdom.svg';

import canadaMap from '@/public/assets/locations/desktop/image-map-canada.png';
import australiaMap from '@/public/assets/locations/desktop/image-map-australia.png';
import ukMap from '@/public/assets/locations/desktop/image-map-united-kingdom.png';
import canadaMapTab from '@/public/assets/locations/tablet/image-map-canada.png';
import australiaMapTab from '@/public/assets/locations/tablet/image-map-australia.png';
import ukMapTab from '@/public/assets/locations/tablet/image-map-uk.png';

export const mapLocations = [
	{
		location: 'Canada',
		iconTab: canadaMapTab,
		icon: canada,
		office: [
			'Designo Central Office',
			'3886 Wellington Street',
			'Toronto, Ontario M9C 3J5',
		],
		contact: ['Contact', 'P : +1 253-863-8967', 'M : contact@designo.co'],
		position: 'odd',
	},
	{
		location: 'Australia',
		iconTab: australiaMapTab,
		icon: australiaMap,
		office: ['Designo AU Office', '19 Balonne Street', 'New South Wales 2443'],
		contact: ['Contact', 'P : (02) 6720 9092', 'M : contact@designo.au'],
		position: 'even',
	},
	{
		location: 'United Kingdom',
		iconTab: ukMapTab,
		icon: ukMap,
		office: ['Designo UK Office', '13 Colorado Way', 'Rhyd-y-fro SA8 9GA'],
		contact: ['Contact', 'P : 078 3115 1400', 'M : contact@designo.uk'],
		position: 'odd',
	},
];

export const Locations = [
	{ icon: canada, location: 'canada' },
	{ icon: australia, location: 'australia' },
	{ icon: unitedKingdom, location: 'united kingdom' },
];

export const appDesigns = [
	{
		title: 'Airfilter',
		text: 'Solving the problem of poor indoor air quality by filtering the air',
		icon: airFilter,
	},
	{
		title: 'Eyecam',
		text: 'Product that lets you edit your favorite photos and videos at any time',
		icon: eyecam,
	},
	{
		title: 'Faceit',
		text: 'Get to meet your favorite internet superstar with the faceit app',
		icon: faceit,
	},
];

export const graphicDesigns = [
	{
		title: 'Tim Brown',
		text: 'A book cover designed for Tim Brown&apos;s new release, &apos;Change&apos',
		icon: change,
	},
	{
		title: 'Boxed water',
		text: 'A simple packaging concept made for Boxed Water',
		icon: boxed,
	},
	{
		title: 'Science!',
		text: 'A poster made in collaboration with the Federal Art Project',
		icon: science,
	},
];

export const webDesigns = [
	{
		title: 'Express',
		text: 'A multi-carrier shipping website for ecommerce businesses',
		icon: express,
	},
	{
		title: 'Transfer',
		text: 'Site for low-cost money transfers and sending money within seconds',
		icon: transfer,
	},
	{
		title: ' Photon',
		text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
		icon: Photon,
	},
	{
		title: ' Builder',
		text: 'Connects users with local contractors based on their location',
		icon: builder,
	},
	{
		title: ' Blogr',
		text: 'Blogr is a platform for creating an online blog or publication',
		icon: blogr,
	},
	{
		title: ' Camp',
		text: 'Get expert training in coding, data, design, and digital marketing',
		icon: camp,
	},
];

export const navLinks = [
	{ label: 'Our company', href: '/about' },
	{ label: 'Location', href: '/locations' },
	{ label: 'Contact', href: '/contact' },
];

export const learnMore = [
	{ label: 'Web Design', href: '/web-design' },
	{ label: 'App Design', href: '/app-design' },
	{ label: 'Graphic Design', href: '/graphic-design' },
];

export const illustrations = [
	{
		title: 'Passionate',
		body: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
	},
	{
		title: 'Resourceful',
		body: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients needs.',
	},
	{
		title: 'Friendly',
		body: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
	},
];

export const officeLocation = [
	'Designo Central Office',
	'3886 Wellington Street',
	'Toronto, Ontario M9C 3J5',
];

export const contact = [
	'Contact Us (Central Office)',
	' P : +1 253-863-8967',
	'M : contact@designo.co',
];

export const links = [
	{ label: 'Web Design', href: '/web-design' },
	{ label: 'App Design', href: '/app-design' },
	{ label: 'Graphic Design', href: '/graphic-design' },
];
export const appLinks = [
	{ label: 'Web Design', href: '/web-design' },

	{ label: 'Graphic Design', href: '/graphic-design' },
];

export const graphicLinks = [
	{ label: 'Web Design', href: '/web-design' },
	{ label: 'App Design', href: '/app-design' },
];

export const webLinks = [
	{ label: 'App Design', href: '/app-design' },
	{ label: 'Graphic Design', href: '/graphic-design' },
];
