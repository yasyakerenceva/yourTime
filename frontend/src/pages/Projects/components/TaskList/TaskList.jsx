import PropTypes from "prop-types";
import { useState } from "react";
import { Icon } from "../../../../components";
import { getFormattedTime } from "../../../../utils";
import { PROP_TYPE } from "../../../../constants";

export const TaskList = ({ tasks, linkRef }) => {
	const [show, setShow] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setShow(!show);
		linkRef.current.blur();
	};

	return (
		<div className="px-7 mt-2 border-t-[0.5px] border-[#ececec]">
			<div className="flex pt-5 pb-3 items-center" onClick={handleClick}>
				<span className="flex items-center justify-center w-6 h-6 mr-3 bg-primary text-white rounded">
					{tasks.length}
				</span>
				<span>Задачи</span>
				<Icon
					iconId="arrow-down"
					width="20"
					height="20"
					classes={`ml-1 ${show && "rotate-180"}`}
				/>
			</div>
			{show && (
				<ul className="ml-9 mt-2 pr-2 max-h-[16.25rem] overflow-y-auto scroll ">
					{tasks.map(({ id, name, time }) => (
						<li
							key={id}
							className="flex relative items-center justify-between py-5 px-5 border-t-[0.5px] border-[#ececec] before:content-[''] before:absolute before:w-2 before:h-2 before:left-0 before:rounded-full before:bg-primary"
						>
							<span>{name}</span>
							<span className=" inline-block w-28 text-center">{`${getFormattedTime(time)[0]}:${getFormattedTime(time)[1]}:${getFormattedTime(time)[2]}`}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PROP_TYPE.TASK).isRequired,
	linkRef: PROP_TYPE.OBJECT_REQUIRED,
};
