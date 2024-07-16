'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const DesignDisplay = ({
	icon,
	title,
	text,
}: {
	icon: any;
	title: string;
	text: string;
}) => {
	const ref = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			ref.current,
			{ opacity: 0.2, x: 50, y: 50 },
			{
				x: 0,
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power2.inOut',
				scrollTrigger: {
					trigger: ref.current,
					start: 'top 80%',
					end: 'top 20%',
					toggleActions: 'play none none play',
				},
			}
		);
	}, []);

	return (
		<div
			ref={ref}
			className="grid tabl:grid-cols-2 rounded-lg overflow-hidden lg:grid-cols-1"
		>
			<div className="relative">
				<Image
					src={icon}
					quality={100}
					alt={`${title} photo`}
					className=""
					placeholder="blur"
				/>
			</div>
			<div className="flex-center bg-secondary-peach/80 text-center h-[180px] tabl:h-full lg:h-[150px]">
				<div>
					<h2 className="h3 !text-[20px] !font-normal !text-primary-peach mb-3">
						{title}
					</h2>
					<p className="body tabl:px-2 px-12 lg:px-12 !test-sm">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default DesignDisplay;
