import { useState } from "react";
import Select from "react-select";

export const CustomSelect = ({
	classes = "",
	id,
	label,
	options,
	placeholder,
	noOptionsMessage,
}) => {
	const [currentValue, setCurrentValue] = useState(null);

	const getValue = () => {
		return currentValue
			? options.find((el) => el.value === currentValue)
			: null;
	};

	const onChange = (newValue) => {
		setCurrentValue(newValue.value);
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
				noOptionsMessage={() => noOptionsMessage}
			/>
		</div>
	);
};
