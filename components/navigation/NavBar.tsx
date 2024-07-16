import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/shared/desktop/logo-dark.png';
import heroPhone from '@/public/assets/home/desktop/image-hero-phone.png';
import { navLinks } from '@/constant';
import Link from 'next/link';
import Mobilenav from './Mobilenav';
import Button from '../shared/Button';

const NavBar = () => {
	return (
		<nav className=" py-2 px-2 c-padding flex-between ">
			<Link href="/">
				<Image
					src={logo}
					width={120}
					height={20}
					alt="designo-logo"
					quality={100}
				/>
			</Link>

			<div className="flex gap-4 max-sm:hidden md:gap-6 lg:ml-6 lg:gap-8">
				{navLinks.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="text-sm font-semibold hover:underline-offset-4 hover:underline hover:text-primary-peach"
					>
						{link.label}
					</Link>
				))}
			</div>

			<Mobilenav>
				<div className=" py-16 flex justify-center flex-col gap-4 ">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-sm font-semibold hover:underline-offset-4 hover:underline hover:text-primary-peach uppercase tracking-wide w-10/12 mx-auto hover:border-none border-b border-gray-600 text-center hover:pb-[1px]"
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="relative  bg-primary-peach bg-gradient-to-b opacity-[0.6]">
					<div className=" text-center w-9/12 mx-auto">
						<p className="mt-8 mb-2 text-slate-300">
							experience on creating full responsive websites,learn more in our
							website
						</p>
						<Button text="learn more" theme="dark" />
					</div>
					<Image
						src={heroPhone}
						className="object-cover object-top -translate-y-20"
						alt="mobile-nav background image "
						quality={100}
					/>
				</div>
			</Mobilenav>
		</nav>
	);
};

export default NavBar;
