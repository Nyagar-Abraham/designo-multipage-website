import Image from 'next/image';
import IconError from '@/public/assets/contact/desktop/icon-error.svg';

interface Props {
	type: string;
	label: string;
	error: boolean | undefined;
	clearError: any;
}

const Input = ({ type, label, error, clearError }: Props) => {
	let name = '';
	if (label === 'Name') name = 'name';
	if (label === 'Email address') name = 'email';
	if (label === 'Phone') name = 'phone';
	if (label === 'Your message') name = 'message';

	return (
		<>
			<label className="text-sm font-semibold">{label}</label>
			{type !== 'textarea' ? (
				<input
					onChange={clearError}
					type={type}
					name={name}
					className={`bg-primary-peach border-b-2 border-slate-300 hover:border-white focus:outline-none pr-14 h-[36px] rounded-lg selection:bg-secondary-peach  `}
				/>
			) : (
				<textarea
					onChange={clearError}
					name={name}
					className={`bg-primary-peach border-b-2 border-slate-300 hover:border-white focus:outline-none pr-14 h-[70px] rounded-lg no-scrollbar   selection:bg-secondary-peach `}
				/>
			)}
			<div
				className={` hidden gap-2 items-center absolute right-1 text-xs top-[33px] ${error && '!flex'}`}
			>
				<p>can&apos;t be empty</p>
				<Image src={IconError} alt="error icon" />
			</div>
		</>
	);
};

export default Input;
