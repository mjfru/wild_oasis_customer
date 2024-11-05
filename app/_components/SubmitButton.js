"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
	//! This new hook must be used inside a component that is rendered INSIDE a form, not in just the form itself and must be a client component.
	const { pending } = useFormStatus();

	return (
		<button
			className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
			disabled={pending}
		>
			{pending ? pendingLabel : children}
		</button>
	);
}
