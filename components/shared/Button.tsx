interface Button {
	text: string;
	theme: string;
	onClick?:any
}

const Button = ({ text, theme,onClick }: Button) => {
	return (
		<button
			onClick={onClick}
			className={`px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide 
    ${theme === 'dark' && `bg-white text-primary-black hover:text-secondary-white hover:bg-secondary-peach`}
    ${theme === 'light' && `bg-primary-peach text-white hover:text-secondary-white hover:bg-secondary-peach`}
    `}
		>
			{text}
		</button>
	);
};

export default Button;
