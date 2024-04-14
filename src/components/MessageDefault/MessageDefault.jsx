import { PROP_TYPE } from "../../constants/prop-types";

export const MessageDefault = ({ children, marginTop }) => {
	return (
		<div className={`flex items-center justify-center ${marginTop}`}>
			<span className="text-center text-primary font-bold">
				{children}
			</span>
		</div>
	);
};

MessageDefault.propTypes = {
	children: PROP_TYPE.NODE,
	marginTop: PROP_TYPE.STRING,
};
