import Select from "react-select";

export const CustomSelect = ({
	classes = "",
	currentValue,
	setCurrentValue,
	id,
	label,
	arrayOptions,
	isLoading = false,
	isDisabled = false,
	isClearable = true,
	placeholder,
	noOptionsMessage,
}) => {
	const options = arrayOptions.map((option) => {
		return {
			value: option.id,
			label: option.name,
		};
	});

	const getValue = () => {
		return String(currentValue)
			? options.find((el) => el.value === currentValue)
			: null;
	};

	const onChange = (newValue) => {
		newValue ? setCurrentValue(newValue.value) : setCurrentValue("");
	};

	return (
		<div className={`w-full ${classes}`}>
			<label htmlFor={id} className="inline-block mb-2">
				{label}
			</label>
			<Select
				id={id}
				classNamePrefix="custom-select"
				value={getValue()}
				onChange={onChange}
				options={options}
				placeholder={placeholder}
				isClearable={isClearable}
				isLoading={isLoading}
				isDisabled={isDisabled}
				noOptionsMessage={() => noOptionsMessage}
				defaultValue={options.find((el) => el.value === currentValue)}
			/>
		</div>
	);
};
