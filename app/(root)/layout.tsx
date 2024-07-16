import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navigation/NavBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="relative min-h-screen flex flex-col">
			<NavBar />
			<section className="px-2 c-padding flex-col flex flex-1 text-black ">
				{children}
			</section>
			<Footer />
		</main>
	);
};

export default layout;
