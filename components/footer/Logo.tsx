import Image from 'next/image';

const Logo = ({ icon, name }: any) => {
	return (
		<Image
			src={icon}
			width={18}
			height={18}
			alt={`${name} logo`}
			quality={100}
		/>
	);
};

export default Logo;
