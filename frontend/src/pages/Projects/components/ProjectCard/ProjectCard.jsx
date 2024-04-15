import PropTypes from "prop-types";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { getFormattedTime } from "../../../../utils";
import { Icon } from "../../../../components";
import { TaskList } from "../TaskList/TaskList";
import { PROP_TYPE } from "../../../../constants";

export const ProjectCard = ({
	id,
	name,
	time,
	fullTime,
	tag,
	createdAt,
	tasks,
}) => {
	const linkRef = useRef(null);
	const [hours, minutes, seconds] = getFormattedTime(fullTime);
	const [hoursProject, minutesProject, secondsProject] =
		getFormattedTime(time);

	return (
		<div className="mt-10 pt-5px first:mt-0">
			<Link
				to={`/project/${id}`}
				ref={linkRef}
				className="block rounded-2xl shadow-lg pb-2 transition duration-300 hover:translate-y-[-5px] focus:translate-y-[-5px] active:translate-y-[-5px] active:duration-300 focus:outline-none"
			>
				<div className="flex items-center justify-between p-5 border-b-[0.5px] border-[#ececec]">
					<span className="inline-flex items-center text-zinc-400">
						<Icon
							iconId="pencil"
							width="16"
							height="16"
							classes="mr-3 text-zinc-400"
						/>
						{createdAt}
					</span>
					<span className="text-[14px] text-zinc-400">
						Общее время:
						<span className="inline-block text-black ml-4 text-16px font-bold">{`${hours}:${minutes}:${seconds}`}</span>
					</span>
				</div>
				<div className="flex items-center justify-between pt-5 pb-3 px-5">
					<span className="font-bold">{name}</span>
					<div className="flex items-center">
						<span className="flex items-center justify-center mr-14 px-3 py-1 bg-primary text-white rounded">
							{tag.name}
						</span>
						<span>{`${hoursProject}:${minutesProject}:${secondsProject}`}</span>
					</div>
				</div>
				{tasks.length > 0 && (
					<TaskList tasks={tasks} linkRef={linkRef} />
				)}
			</Link>
		</div>
	);
};

ProjectCard.propTypes = {
	id: PROP_TYPE.STRING_REQUIRED,
	name: PROP_TYPE.STRING_REQUIRED,
	time: PROP_TYPE.NUMBER_REQUIRED,
	fullTime: PROP_TYPE.NUMBER_REQUIRED,
	tag: PROP_TYPE.OBJECT_REQUIRED,
	createdAt: PROP_TYPE.STRING_REQUIRED,
	tasks: PropTypes.arrayOf(PROP_TYPE.TASK).isRequired,
};
