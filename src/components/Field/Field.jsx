export const Field = ({ id, name, type, labelText }) => {
	return (
		<div className="flex flex-col mt-8">
			<label htmlFor={id} className="text-[18px]">
				{labelText}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				className="h-14 mt-2 text-[16px] px-6 py-4 border-2 border-solid border-zinc-500/25 rounded-xl"
			/>
		</div>
	);
};
