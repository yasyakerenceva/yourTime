import PropTypes from "prop-types";

const TASK = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired,
});

export const PROP_TYPE = {
	NODE: PropTypes.node.isRequired,
	OBJECT_REQUIRED: PropTypes.object.isRequired,
	STRING_REQUIRED: PropTypes.string.isRequired,
	STRING: PropTypes.string,
	BOOLEAN_REQUIRED: PropTypes.bool.isRequired,
	BOOLEAN: PropTypes.bool,
	NUMBER_REQUIRED: PropTypes.number.isRequired,
	NUMBER: PropTypes.number,
	FUNCTION_REQUIRED: PropTypes.func.isRequired,
	TASK,
	TAG: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}),
	PROJECT: PropTypes.shape({
		createdAt: PropTypes.string,
		fullTime: PropTypes.number,
		id: PropTypes.string,
		status: PropTypes.number,
		tasks: PropTypes.arrayOf(TASK),
		time: PropTypes.number,
		updatedAt: PropTypes.string,
	}),
	OPTION_SELECT: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
};
