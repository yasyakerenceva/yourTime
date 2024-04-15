import { PROP_TYPE } from "../../constants/prop-types";

export const Error = ({ error }) => {
	return <span className=" text-primary font-bold">{error}</span>;
};

Error.propTypes = {
	error: PROP_TYPE.STRING_REQUIRED,
};
