import { forwardRef } from "react";
import { ErrorForm } from "../ErrorForm/ErrorForm";

export const Field = forwardRef(
	({ classes = "", id, name, type, labelText, error, ...props }, ref) => {
		return (
			<div className={`flex flex-col ${classes}`}>
				<label
					htmlFor={id}
					className={`text-16px ${error ? "text-error" : "text-black"}`}
				>
					{labelText}
				</label>
				<input
					className={`mt-2 px-6 py-4 h-14 border border-solid border-[#b9b9b9] rounded-lg ${error ? "outline-error" : "outline-zinc-500/25"}`}
					id={id}
					name={name}
					type={type}
					{...props}
					ref={ref}
				/>
				{error && <ErrorForm>{error}</ErrorForm>}
			</div>
		);
	},
);
