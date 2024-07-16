import Map from '@/components/location/Map';
import Cta from '@/components/shared/Cta';
import { mapLocations } from '@/constant';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Locations',
};
const page = () => {
	return (
		<>
			<div className="grid gap-6 mt-12 mb-10">
				{mapLocations.map((location) => (
					<Map
						key={location.location}
						location={location.location}
						iconTab={location.iconTab}
						icon={location.icon}
						office={location.office}
						contact={location.contact}
						pos={location.position}
					/>
				))}
			</div>
			<Cta />
		</>
	);
};

export default page;
