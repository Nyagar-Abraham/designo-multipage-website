'use client';

import React from 'react';
import Button from '../shared/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import { removeUrlQuery } from '@/lib/utils';

const Close = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClose = () => {
		const newUrl = removeUrlQuery({
			params: searchParams.toString(),
			keysToRemove: ['lat', 'lng'],
		});

		router.push(newUrl, { scroll: false });
	};
	return (
		<div className="flex-center w-full  pt-3">
			<Button text="Close Map" theme="light" onClick={handleClose} />
		</div>
	);
};

export default Close;
