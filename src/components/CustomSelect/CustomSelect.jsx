import Select from "react-select";
import PropTypes from "prop-types";
import { PROP_TYPE } from "../../constants/prop-types";

export const CustomSelect = ({
	classes = "",
	currentValue,
	setCurrentValue,
	id,
	label = "",
	arrayOptions,
	isLoading = false,
	isDisabled = false,
	isClearable = true,
	placeholder = "",
	noOptionsMessage = "",
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

CustomSelect.propTypes = {
	classes: PROP_TYPE.STRING,
	currentValue: PROP_TYPE.STRING_REQUIRED,
	setCurrentValue: PROP_TYPE.FUNCTION_REQUIRED,
	id: PROP_TYPE.STRING_REQUIRED,
	label: PROP_TYPE.STRING,
	arrayOptions: PropTypes.arrayOf(PROP_TYPE.OPTION_SELECT).isRequired,
	isLoading: PROP_TYPE.BOOLEAN,
	isDisabled: PROP_TYPE.BOOLEAN,
	isClearable: PROP_TYPE.BOOLEAN,
	placeholder: PROP_TYPE.STRING,
	noOptionsMessage: PROP_TYPE.STRING,
};
