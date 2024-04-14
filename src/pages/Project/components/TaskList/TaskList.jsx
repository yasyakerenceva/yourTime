import PropTypes from "prop-types";
import { TaskItem } from "../TaskItem/TaskItem";
import { PROP_TYPE } from "../../../../constants";

export const TaskList = ({ tasks, projectId }) => {
	return (
		<ul className=" mt-4 pl-2 pr-2 overflow-y-auto scroll">
			{tasks.map(({ id, name }) => (
				<TaskItem key={id} id={id} name={name} projectId={projectId} />
			))}
		</ul>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PROP_TYPE.TASK).isRequired,
	projectId: PROP_TYPE.STRING_REQUIRED,
};
