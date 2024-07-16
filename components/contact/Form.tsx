'use client';

import React, { useState } from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';

interface Error {
	name?: boolean | undefined;
	email?: boolean | undefined;
	phone?: boolean | undefined;
	message?: boolean | undefined;
}

const Form = () => {
	const [errors, setErrors] = useState<Error>();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors({});
		const form = e.target as HTMLFormElement;
		const formdata = new FormData(form);
		const data = Object.fromEntries(formdata);

		const error: Error = {};
		if (!data.name) error.name = true;
		if (!data.email) error.email = true;
		if (!data.phone) error.phone = true;
		if (!data.message) error.message = true;

		if (Object.keys(error).length) {
			setErrors(error);
			return;
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-2 mds:col-span-3 mds:col-start-3"
		>
			<div className="relative flex flex-col gap-1">
				<Input
					type="text"
					label="Name"
					error={errors?.name}
					clearError={() => setErrors({})}
				/>
			</div>
			<div className="relative flex flex-col gap-1">
				<Input
					type="email"
					label="Email address"
					error={errors?.email}
					clearError={() => setErrors({})}
				/>
			</div>
			<div className="relative flex flex-col gap-1">
				<Input
					type="tel"
					label="Phone"
					error={errors?.phone}
					clearError={() => setErrors({})}
				/>
			</div>
			<div className="relative flex flex-col gap-1">
				<Input
					type="textarea"
					label="Your message"
					error={errors?.message}
					clearError={() => setErrors({})}
				/>
			</div>
			<div className="flex-center  py-6">
				<Button text="Submit" theme="dark" />
			</div>
		</form>
	);
};

export default Form;
