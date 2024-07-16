import { Jost } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s / Designo Multi-page-Website',
		default: 'Welcome / Designo Multi-page-Website',
	},
	description: 'This is a multi-page website ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jost.className}>{children}</body>
		</html>
	);
}
