import Image from 'next/image';
import React from 'react';

const Hero = ({
	title,
	icon,
	text,
}: {
	title: string;
	icon: any;
	text: string;
}) => {
	return (
		<div className="  bg-primary-peach  rounded-lg overflow-hidden mt-16 text-center flex-center h-[300px] relative sml:h-[350px]">
			<Image
				src={icon}
				fill
				alt="hero background pattern"
				className="object cover object-center"
			/>
			<div>
				<h2 className="h2 !font-normal !text-white mb-6">{title}</h2>
				<p className="body !text-secondary-white  px-11 md:px-[100px] sml:px-[70px]  ">
					{text}
				</p>
			</div>
		</div>
	);
};

export default Hero;
