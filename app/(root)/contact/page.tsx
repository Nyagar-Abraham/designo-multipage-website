import Location from '@/components/about/Location';
import Form from '@/components/contact/Form';

import { Locations } from '@/constant';
import { getCodes } from '@/lib/actions/action';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export const metadata: Metadata = {
	title: 'contact',
};

const page = async ({ params, searchParams }: any) => {
	const Map = useMemo(
		() =>
			dynamic(() => import('@/components/location/LeafletMap'), {
				ssr: false,
			}),
		[]
	);

	const positions = await getCodes();

	const displayLocations = Locations.map((location) => {
		// @ts-ignore
		let position = positions[location.location.toLowerCase()];
		return { ...location, position };
	});

	const mapPosition = [
		{ position: [positions.australia], place: 'Australia' },
		{ position: [positions.canada], place: 'Canada' },
		{ position: [positions['united kingdom']], place: 'United Kingdom' },
	];

	return (
		<>
			<div className="mt-12 grid mds:grid-cols-5 gap-8  rounded-lg bg-primary-peach text-white bg-contactBgMobile mds:bg-contactBg object-cover object-center p-6">
				<div className="flex-center mds:col-span-2 mds:col-start-1 mds:!items-start">
					<div className="space-y-2 text-center mt-4 mds:text-start mds:mt-10 ">
						<h2 className="text-[20px]">Contact us</h2>
						<p className="text-sm text-secondary-white px-0">
							{' '}
							Ready to take it to the next level? Let&apos;s talk about your
							project or idea and find out how we can help your business grow.
							If you are looking for unique digital experiences that&apos;s
							relatable to your users, drop us a line.
						</p>
					</div>
				</div>

				<Form />
			</div>

			{searchParams?.lat &&
				searchParams?.lng &&
				mapPosition.map((position) => (
					<Map
						key={position}
						coords={[+searchParams?.lat, +searchParams?.lng]}
						position={position.position[0]}
						place={position.place}
					/>
				))}

			<div className="grid my-24 gap-6 mds:grid-cols-3 mds:gap-3 lg:gap-[70px] ">
				{displayLocations.map((location) => (
					<Location
						//@ts-ignore
						location={location.location}
						//@ts-ignore
						Key={location.location}
						//@ts-ignore
						icon={location.icon}
						//@ts-ignore
						position={location.position}
					/>
				))}
			</div>
		</>
	);
};

export default page;
