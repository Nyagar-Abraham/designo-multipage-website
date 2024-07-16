'use client';

// src/components/Map.tsx
// import { MapContainer, Marker, TileLayer, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Close from './Close';
import L from 'leaflet';

// Dynamically import the MapContainer and TileLayer to prevent SSR issues
const MapContainer = dynamic(
	() => import('react-leaflet').then((mod) => mod.MapContainer),
	{ ssr: false }
);
const TileLayer = dynamic(
	() => import('react-leaflet').then((mod) => mod.TileLayer),
	{ ssr: false }
);
const Marker = dynamic(
	() => import('react-leaflet').then((mod) => mod.Marker),
	{ ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
	ssr: false,
});

export default function MyMap(props: any) {
	const searchParams = useSearchParams();
	// const [render, setRender] = useState<number>(0);
	const lat = searchParams.get('lat');
	const lng = searchParams.get('lng');
	const ref = useRef<HTMLDivElement>(null);
	const { position, coords, place } = props;

	useEffect(() => {
		// Prevent leaflet from trying to access the DOM on the server
		import('leaflet').then((L) => {
			if (typeof window !== 'undefined') {
				if (ref.current) {
					ref.current.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
						inline: 'nearest',
					});
				}
			}

			//@ts-ignore
			delete L.Icon.Default.prototype._getIconUrl;

			L.Icon.Default.mergeOptions({
				iconRetinaUrl:
					'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
				iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
				shadowUrl:
					'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
			});
		});
	}, [lat, lng]);

	if (position[0] !== coords[0] || position[1] !== coords[1]) return null;

	return (
		<div ref={ref} className="mt-12 overflow-hidden rounded-lg">
			<MapContainer
				center={position}
				zoom={4}
				style={{ height: '400px', width: '100%' }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position} icon={createCustomIcon()}>
					<Popup>
						<div className="text-sm uppercase tracking-wide text-primary-peach p-2 rounded-lg">
							{place}
						</div>
					</Popup>
				</Marker>
			</MapContainer>
			<Close />
		</div>
	);
}

// Custom icon creation function with a marker-like SVG
const createCustomIcon = () => {
	return L.divIcon({
		className: '',
		html: `
					<div class="flex items-center justify-center">
							<svg class="w-10 h-10 text-blue-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.68629 2 6 4.68629 6 8C6 12.5615 12 22 12 22C12 22 18 12.5615 18 8C18 4.68629 15.3137 2 12 2ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.4853 13.9566 14.0057 12 17.2548C10.0434 14.0057 8 10.4853 8 8ZM10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8Z" fill="currentColor"/>
							</svg>
					</div>`,
		iconSize: [40, 40], // Size of the custom marker
		iconAnchor: [20, 40], // Anchor point of the icon (half of width and height)
		popupAnchor: [0, -40], // Position of the popup relative to the icon
	});
};
