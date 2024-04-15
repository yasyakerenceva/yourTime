import { PROP_TYPE } from "../../constants/prop-types";

export const ErrorForm = ({ children }) => {
	return <span className="mt-1 text-error">{children}</span>;
};

ErrorForm.propTypes = {
	children: PROP_TYPE.NODE,
};
