'use client';

import Image from 'next/image';
import Button from '../shared/Button';
import leaf from '@/public/assets/shared/desktop/bg-pattern-small-circle.svg';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const Location = ({
	location,
	icon,
	position,
}: {
	location: string;
	icon: any;
	position: number[];
}) => {
	const searchParams = useSearchParams();
	const router = useRouter();
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
					toggleActions: 'play none none none',
				},
			}
		);
	}, []);

	const handlePosition = () => {
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: ['lat', 'lng'],
			value: [position[0].toString(), position[1].toString()],
		});

		router.push(newUrl, { scroll: false });

	
	};

	return (
		<div ref={ref} className="px-14 tab:px-[120px]  sm-px-[100px]   mds:px-0">
			<div className="flex-center relative">
				<Image src={icon} alt={`${location} photo`} className="" />
				<Image src={leaf} fill alt={`${location} photo`} className="" />
			</div>
			<div className="flex-center">
				<div className="text-center py-4">
					<p className="text-[20px] uppercase tracking-wide mb-3   line-clamp-1">
						{location}
					</p>
					<Button onClick={handlePosition} theme="light" text="See location" />
				</div>
			</div>
		</div>
	);
};

export default Location;
