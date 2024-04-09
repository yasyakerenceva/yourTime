import { useRef } from "react";
import Select from "react-select";

export const CustomSelect = ({
	classes = "",
	currentValue,
	setCurrentValue,
	id,
	label,
	arrayOptions,
	placeholder,
	onBlur,
	noOptionsMessage,
	isDisabled = false,
}) => {
	const ref = useRef(null);
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
		setCurrentValue(newValue.value);
	};

	return (
		<div className={`w-full ${classes}`}>
			<label htmlFor={id} className="inline-block mb-2">
				{label}
			</label>
			<Select
				id={id}
				ref={ref}
				classNamePrefix="custom-select"
				value={getValue()}
				onChange={onChange}
				onBlur={onBlur}
				options={options}
				placeholder={placeholder}
				noOptionsMessage={() => noOptionsMessage}
				defaultValue={options.find((el) => el.value === currentValue)}
			/>
		</div>
	);
};
