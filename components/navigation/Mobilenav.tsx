'use client';

import Image from 'next/image';
import hamburger from '@/public/assets/shared/mobile/icon-hamburger.svg';
import close from '@/public/assets/shared/mobile/icon-close.svg';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

const Mobilenav = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);

	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function callback() {
			if (window.innerWidth > 519) {
				setOpen(false);
			}
		}
		window.addEventListener('resize', callback);

		return () => {
			window.removeEventListener('resize', callback);
		};
	}, []);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (target.tagName === 'A') {
				setOpen(false);
			}

			if (ref.current && !ref.current.contains(event.target as Node)) {
				console.log('out');
				setOpen(false);
			}
		};

		const currentRef = ref.current;
		if (currentRef) {
			currentRef.addEventListener('click', handleClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleClick);
			}
		};
	}, [open]);

	return (
		<>
			<button className="sm:hidden" onClick={() => setOpen((c) => !c)}>
				{!open && <Image src={hamburger} alt="hamburger-icon" quality={100} />}
				{open && <Image src={close} alt="icon-close" quality={100} />}
			</button>
			{open && (
				<div
					ref={ref}
					className="z-20 overflow-hidden absolute left-0 right-0 bottom-0 top-[36px]  mt-4  w-screen bg-secondary-black text-secondary-white"
				>
					{children}
				</div>
			)}
		</>
	);
};

export default Mobilenav;
