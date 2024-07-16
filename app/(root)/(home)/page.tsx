import Illustration from '@/components/footer/Illustration';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import Cta from '@/components/shared/Cta';
import { illustrations, links } from '@/constant';
import bgPattern from '@/public/assets/home/desktop/bg-pattern-hero-home.svg';
import heroIcon from '@/public/assets/home/desktop/image-hero-phone.png';
import Image from 'next/image';

const page = () => {
	return (
		<>
			<div className="grid sml:grid-cols-5 sml:gap-2  bg-primary-peach  rounded-lg overflow-hidden mt-16 relative">
				<div className="pt-10 pb-5 px-5 text-center sml:col-span-3 sml:text-start sml:pl-10">
					<h1 className="h2 mb-4 !font-normal !text-white">
						Award-winning custom designs and digital branding solutions
					</h1>
					<p className="body !text-secondary-white mb-6">
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
					<Button theme="dark" text="Learn more" />
				</div>
				<div className="relative h-[320px] sm:h-[340px] tab:h-[400px] sml:col-span-2 relative">
					<Image
						src={bgPattern}
						fill
						alt="hero background pattern"
						className="object cover object-center"
					/>
					<Image
						src={heroIcon}
						// fill
						alt="hero icon"
						className="object cover object-top -translate-y-[80px] sml:translate-y-[100px] sml:scale-[1.8] lgh:translate-y-[70px] lgh:scale-[1.5]"
					/>
				</div>
			</div>

			<div className="grid gap-3 md:grid-cols-2 mt-24 mb-10">
				{links.map((item) => (
					<Card
						key={item.label}
						item={item.label}
						href={item.href}
						place="home"
					/>
				))}
			</div>

			<div className="grid md:grid-cols-3 md:gap-3 mb-12">
				{illustrations.map((item) => (
					<Illustration key={item.title} title={item.title} text={item.body} />
				))}
			</div>
			<Cta />
		</>
	);
};

export default page;
