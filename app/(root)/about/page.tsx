import Cta from '@/components/shared/Cta';

import About from '@/components/about/About';
import { Locations } from '@/constant';
import Location from '@/components/about/Location';
import { Metadata } from 'next';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { getCodes } from '@/lib/actions/action';

export const metadata: Metadata = {
	title: 'About',
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
			<div className="mt-24" />
			<About
				image="about"
				title="About us"
				p1=" Founded in 2010, we are a creative agency that produces lasting results for our clients. 
  We've partnered with many startups, corporations, and nonprofits alike to craft designs 
  that make real impact. We're always looking forward to creating brands, products, and 
  digital experiences that connect with our clients' audiences."
			/>
			<div className="mt-10" />
			<About
				image="worldClass"
				title="World-class talent"
				p1="  We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market."
				p2="We are constantly updating   our skills in a myriad of platforms.Our team is  multi-disciplinary and we are not merely interested in form — content and meaning  
  are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
  Clients have always been impressed with our high-quality outcomes that encapsulates their 
  brand's story and mission."
				bg="light"
			/>

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

			<About
				image="realDeal"
				title="The real deal"
				p1=" As strategic partners in our clients' businesses, we are ready to take on any challenge as our own.
   Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
   opportunity. We make design and technology more accessible and give you tools to measure success."
				p2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
  we inspire audiences to take action and drive real results."
				bg="light"
			/>
			<div className="mt-12" />
			<Cta />
		</>
	);
};

export default page;
