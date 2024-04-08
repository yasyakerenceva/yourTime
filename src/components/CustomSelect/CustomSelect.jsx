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
}) => {
	const ref = useRef(null);
	const options = arrayOptions.map((option) => {
		return {
			value: option.id,
			label: option.name,
		};
	});

	const onChange = (newValue) => {
		setCurrentValue(newValue.value);
		setTimeout(() => {
			ref.current.blur();
		}, 0)

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
				value={options.find((el) => el.value === currentValue)}
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
