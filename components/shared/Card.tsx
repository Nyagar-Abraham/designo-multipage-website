'use client';

import Image from 'next/image';
import web from '@/public/assets/home/desktop/image-web-design-large.jpg';
import app from '@/public/assets/home/desktop/image-app-design.jpg';
import graphic from '@/public/assets/home/desktop/image-graphic-design.jpg';
import webMobile from '@/public/assets/home/mobile/image-web-design.jpg';
import appMobile from '@/public/assets/home/mobile/image-app-design.jpg';
import graphicMobile from '@/public/assets/home/mobile/image-graphic-design.jpg';
import Button from './Button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Card = ({
	item,
	href,
	place,
}: {
	item: string;
	href: string;
	place?: string;
}) => {
	const [image, setImage] = useState<string>('');

	const updateImage = () => {
		const width = window.innerWidth;
		let Photo: string = '';

		if (width < 550) {
			if (item === 'Web Design') Photo = webMobile.src;
			if (item === 'App Design') Photo = appMobile.src;
			if (item === 'Graphic Design') Photo = graphicMobile.src;
		} else {
			if (item === 'Web Design') Photo = web.src;
			if (item === 'App Design') Photo = app.src;
			if (item === 'Graphic Design') Photo = graphic.src;
		}

		setImage(Photo);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			updateImage();
			window.addEventListener('resize', updateImage);

			return () => {
				window.removeEventListener('resize', updateImage);
			};
		}
	}, [item]);

	return (
		<Link
			href={href}
			className={`relative flex items-center justify-center h-fit hover:scale-[1.005]  overflow-hidden rounded-lg first:h-full hover:bg-gradient-to-br hover:from-primary-peach hover:to-primary-peach ${place === 'home' && 'first:row-span-2'}`}
		>
			{image && (
				<Image
					// @ts-ignore
					src={image}
					fill
					alt={`${item} logo`}
					className="object-cover object-center "
				/>
			)}
			<div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-transparent hover:from-primary-peach/50 hover:to-primary-peach/50 transition-all duration-300"></div>
			<div className="z-10 space-1-3 my-[80px] text-center">
				<h2 className="text-slate-100 text-22px] tracking-wide  ">{item}</h2>
				<p className="uppercase text-slate-200 tracking-wider text-xs">
					View Projects
				</p>
			</div>
		</Link>
	);
};

export default Card;
