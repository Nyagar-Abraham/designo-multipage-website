import Image from 'next/image';

interface Props {
	title: string;
	p1: string;
	p2?: string;
	bg?: string;
	image: string;
}

const About = ({ title, p1, p2, bg, image }: Props) => {
	let background: string = '';
	if (image === 'about') background = 'bg-heroAboutMobile xxs:bg-heroAbout';
	if (image === 'worldClass')
		background = 'xxs:bg-worldClass bg-worldClassMobile';
	if (image === 'realDeal') background = 'xxs:bg-realDeal bg-realDealMobile';

	return (
		<div className="rounded-lg grid overflow-hidden mt-4 tabl:grid-cols-6 md:grid-cols-5 lg:h-[380px] md:h-[340px]">
			<div className="h-[300px] tabl:h-full tabl:col-span-2 tabl:col-start-5 md:col-start-4">
				<div
					className={`object-cover bg-no-repeat  h-full w-full  ${background}`}
				></div>
			</div>

			<div
				className={`tabl:row-start-1 tabl:col-span-4 md:col-span-3  tabl:col-start-1 flex-center ${bg === 'light' ? 'bg-secondary-peach/50' : 'bg-primary-peach md:bg-aboutBg bg-aboutBg bg-no-repeat object-cover'} `}
			>
				<div className="py-10 tabl:py-[2px] text-center">
					<h2
						className={`text-[20px] mb-3 ${bg !== 'light' ? 'text-white' : 'text-primary-peach'}  `}
					>
						{title}
					</h2>
					<p
						className={`px-6 mb-2 ${bg === 'light' ? 'text-slate-600' : 'text-secondary-white'}`}
					>
						{p1}
					</p>
					{p2 && (
						<p
							className={`px-6 mb-2 ${bg === 'light' ? 'text-slate-600' : 'text-secondary-white'}`}
						>
							{p1}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default About;
