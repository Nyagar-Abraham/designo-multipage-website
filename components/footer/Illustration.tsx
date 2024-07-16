'use client';

import Image from 'next/image';
import resource from '@/public/assets/home/desktop/illustration-resourceful.svg';
import passion from '@/public/assets/home/desktop/illustration-passionate.svg';
import friendly from '@/public/assets/home/desktop/illustration-friendly.svg';
import circle from '@/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface Props {
	title: string;
	text: string;
}

const Illustration = ({ title, text }: Props) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			gsap.fromTo(
				ref.current,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 1.5,
					ease: 'power1.inOut',
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 80%', // Start the animation when the element's top is 80% from the top of the viewport
						end: 'bottom 20%', // End the animation when the element's bottom is 20% from the top of the viewport
						toggleActions: 'play none none none', // Play the animation when it enters the viewport
					},
				}
			);
		}
	}, []);
	let img: string = '';

	if (title === 'Resourceful') img = resource;
	if (title === 'Passionate') img = passion;
	if (title === 'Friendly') img = friendly;

	return (
		<div
			ref={ref}
			className="p-3 flex gap-3 flex-col mds:gap-4 mds:flex-row md:flex-col md:gap-0"
		>
			<div className="flex-center  relative m-10 ">
				<Image src={img} alt={`${title} icon`} className="   z-10" />
				<Image fill src={circle} alt={`${title} icon`} className="   z-10" />
			</div>
			<div className="flex-1 flex-center">
				<div className="mds:text-start  text-center md:text-center ">
					<h2 className="h3 mb-2">{title}</h2>
					<p className="body px-2 md:px-0">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Illustration;
