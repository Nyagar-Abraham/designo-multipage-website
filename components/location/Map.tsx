'use client';

import Image from 'next/image';
import bg from '@/public/assets/shared/desktop/bg-pattern-two-circles.svg';
import { useEffect, useRef, useState } from 'react';

interface Props {
	location: string;
	iconTab?: any;
	icon?: any;
	office: string[];
	contact: string[];
	pos: string;
}

const Map = ({ location, iconTab, icon, office, contact, pos }: Props) => {
	const [image, setImage] = useState<string>('');

	const updateImage = () => {
		const width = window.innerWidth;
		if (width > 670 || width < 540) {
			setImage(icon.src);
		} else {
			setImage(iconTab.src);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			updateImage();
			window.addEventListener('resize', updateImage);
			return () => {
				window.removeEventListener('resize', updateImage);
			};
		}
	}, [icon, iconTab]);

	return (
		<div className="grid gap-6 mds:grid-cols-3 ">
			<div
				className={`h-[150px] relative rounded-lg overflow-hidden mds:col-span-1 ${pos === 'even' ? 'mds:col-start-3' : 'mds:col-start-1'}`}
			>
				{image && (
					<Image src={image} alt={`${location} logo`} fill className="" />
				)}
			</div>

			<div
				className={`p-6 bg-secondary-peach/60 rounded-lg relative mds:col-span-2 ${pos === 'even' ? 'mds:col-start-1 mds:row-start-1' : 'mds:col-start-2'}`}
			>
				<Image
					src={bg}
					alt={`background logo`}
					fill
					className=" object-cover object-center"
				/>
				<h2 className="mt-4 text-primary-peach text-[18px] uppercase tracking-wide">
					{location}
				</h2>
				<div className=" mt-2 grid grid-cols-2 gap-4 text-start">
					<div>
						{office.map((item: string) => (
							<p className="first:font-semibold text-xs text-slate-600">
								{item}
							</p>
						))}
					</div>
					<div>
						{contact.map((item: string) => (
							<p className="first:font-semibold text-xs text-slate-600">
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Map;
