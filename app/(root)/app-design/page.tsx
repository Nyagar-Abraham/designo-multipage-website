import Card from '@/components/shared/Card';
import Cta from '@/components/shared/Cta';
import DesignDisplay from '@/components/shared/DesignDisplay';
import Hero from '@/components/shared/Hero';
import { appDesigns, appLinks } from '@/constant';
import bgPattern from '@/public/assets/app-design/desktop/bg-pattern-intro-app.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'App-design ',
};
const page = () => {
	return (
		<>
			<Hero
				icon={bgPattern}
				title="App design"
				text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
			/>

			<div className="grid gap-4 lg:grid-cols-3 mt-24 tabl:gap-8 lg:gap-5 ">
				{appDesigns.map((design) => (
					<DesignDisplay
						key={design.title}
						icon={design.icon}
						title={design.title}
						text={design.text}
					/>
				))}
			</div>

			<div className="grid gap-3 md:grid-cols-2 mt-24 mb-10">
				{appLinks.map((item) => (
					<Card key={item.label} item={item.label} href={item.href} />
				))}
			</div>
			<Cta />
		</>
	);
};

export default page;
