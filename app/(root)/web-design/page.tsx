import Card from '@/components/shared/Card';
import Cta from '@/components/shared/Cta';
import DesignDisplay from '@/components/shared/DesignDisplay';
import Hero from '@/components/shared/Hero';
import { webDesigns, webLinks } from '@/constant';

import bgPattern from '@/public/assets/web-design/desktop/bg-pattern-intro-web.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Web-design',
};

const page = () => {
	return (
		<>
			<Hero
				icon={bgPattern}
				title="Web design"
				text="We build websites that serve as powerful marketing tools and bring memorable brand experiences.
  "
			/>

			<div className="grid gap-4 lg:grid-cols-3 mt-24 tabl:gap-8 lg:gap-5 ">
				{webDesigns.map((design) => (
					<DesignDisplay
						key={design.title}
						icon={design.icon}
						title={design.title}
						text={design.text}
					/>
				))}
			</div>

			<div className="grid gap-3 md:grid-cols-2 mt-24 mb-16">
				{webLinks.map((item) => (
					<Card key={item.label} item={item.label} href={item.href} />
				))}
			</div>
			<Cta />
		</>
	);
};

export default page;
