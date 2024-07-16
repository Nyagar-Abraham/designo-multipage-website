'use server';

export async function getCodes() {
	try {
		const [can, aus, uk] = await Promise.all([
			fetch('https://restcountries.com/v3.1/name/canada').then((res) =>
				res.json()
			),
			fetch('https://restcountries.com/v3.1/name/australia').then((res) =>
				res.json()
			),
			fetch('https://restcountries.com/v3.1/name/united kingdom').then((res) =>
				res.json()
			),
		]);

		const positions = {
			canada: can[0]?.latlng || [],
			australia: aus[0]?.latlng || [],
			'united kingdom': uk[0]?.latlng || [],
		};

		return positions;
	} catch (error) {
		console.error('Error fetching country data:', error);
		return {
			canada: [],
			australia: [],
			'united kingdom': [],
		};
	}
}
