import bgPattern from '@/public/assets/shared/desktop/bg-pattern-call-to-action.svg';
import Image from 'next/image';
import Button from './Button';
// import bgPatternMobile from '@/public/assets/shared/mobile/';

const Cta = () => {
	return (
		<section className="c-padding bg-primary-peach relative mt-auto p-4  grid md:grid-cols-2 md:gap-10 rounded-xl translate-y-[60px] tab:translate-y-[40px] z-10">
			<Image
				src={bgPattern}
				alt="background image"
				fill
				className="object-cover object-center"
			/>
			<div className="text-center">
				<h2 className="text-[24px] text-white leading-[22px] mb-6">
					Let&apos; s talk about your project
				</h2>
				<p className="body !text-secondary-white md:mb-4">
					Ready to take it to the next level? Contact us today and find out how
					our expertise can help your business grow. Get in touch
				</p>
			</div>
			<div className="flex-center max-md:mt-8">
				<Button theme="dark" text="get in touch" />
			</div>
		</section>
	);
};

export default Cta;
