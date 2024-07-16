import Link from 'next/link';
import logo from '@/public/assets/shared/desktop/logo-light.png';
import twitter from '@/public/assets/shared/desktop/icon-twitter.svg';
import facebook from '@/public/assets/shared/desktop/icon-facebook.svg';
import youtube from '@/public/assets/shared/desktop/icon-youtube.svg';
import instagram from '@/public/assets/shared/desktop/icon-instagram.svg';
import pinInterest from '@/public/assets/shared/desktop/icon-pinterest.svg';
import Image from 'next/image';
import { contact, navLinks, officeLocation } from '@/constant';
import Logo from './Logo';

const Footer = () => {
	return (
		<footer className="bg-primary-black text-secondary-white mt-auto tab:pt-16 pt-24 pb-10 relative">
			<div className="c-padding flex-center tab:items-start flex-col gap-1 tab:gap-6 ">
				<div className=" gap-3 flex-between tab:w-full  py-4 flex-col tab:justify-between tab:flex-row tab:border-b tab:border-slate-400  ">
					<Link className="border-b border-slate-400 tab:border-none" href="/">
						<Image
							src={logo}
							width={120}
							height={20}
							alt="designo-logo"
							quality={100}
						/>
					</Link>

					<div className="flex gap-1 items-center  md:gap-6 lg:ml-6 lg:gap-8 flex-col tab:flex-row tab:gap-3 ">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-xs uppercase hover:underline-offset-4 hover:underline hover:text-primary-peach tracking-wide"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>

				<div className="grid gap-3 tab:grid-cols-3 tab:w-full">
					<div className="flex flex-col gap-1">
						{officeLocation.map((item) => (
							<p
								key={item}
								className="text-gray-300 text-xs text-center tab:text-start"
							>
								{item}
							</p>
						))}
					</div>
					<div className="flex flex-col gap-1">
						{contact.map((item) => (
							<p
								key={item}
								className="text-gray-300 text-xs text-center tab:text-start"
							>
								{item}
							</p>
						))}
					</div>
					<div className="flex-center tab:items-end gap-3 max-tab:mt-3">
						<Logo name="facebook" icon={facebook} />
						<Logo name="youtube" icon={youtube} />
						<Logo name="twitter" icon={twitter} />
						<Logo name="pinInterest" icon={pinInterest} />
						<Logo name="instagram" icon={instagram} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
