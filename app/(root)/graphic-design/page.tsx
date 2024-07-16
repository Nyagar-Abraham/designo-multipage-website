import Card from '@/components/shared/Card';
import Cta from '@/components/shared/Cta';
import DesignDisplay from '@/components/shared/DesignDisplay';
import Hero from '@/components/shared/Hero';
import { graphicDesigns, graphicLinks } from '@/constant';
import bgPattern from '@/public/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'contact',
};
const page = () => {
	return (
		<>
			<Hero
				icon={bgPattern}
				title="Graphic design"
				text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
			/>

			<div className="grid gap-4 lg:grid-cols-3 mt-24 tabl:gap-8 lg:gap-5 ">
				{graphicDesigns.map((design) => (
					<DesignDisplay
						key={design.title}
						icon={design.icon}
						title={design.title}
						text={design.text}
						
					/>
				))}
			</div>

			<div className="grid gap-3 md:grid-cols-2 mt-24 mb-10">
				{graphicLinks.map((item) => (
					<Card key={item.label} item={item.label} href={item.href} />
				))}
			</div>
			<Cta />
		</>
	);
};

export default page;
