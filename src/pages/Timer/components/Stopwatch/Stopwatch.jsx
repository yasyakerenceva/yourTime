import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProjectAsync } from "../../../../store/actions";
import { useStopwatch } from "../../../../hooks/useStopwatch";
import { getFormattedTime, request } from "../../../../utils";
import { ControlBtn } from "../ControlBtn/ControlBtn";
import { PROP_TYPE } from "../../../../constants";

export const Stopwatch = ({ projectId, taskId }) => {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const dispatch = useDispatch();

	useStopwatch(isRunning, startTime, setElapsedTime);

	useEffect(() => {
		setElapsedTime(0);
		setIsRunning(false);
	}, [projectId, taskId]);

	const [hours, minutes, seconds] = getFormattedTime(elapsedTime);

	const handleClickStart = () => {
		setIsRunning(true);
		setStartTime(Date.now() - elapsedTime);
	};

	const handleClickStop = () => {
		setIsRunning(false);
	};

	const handleClickReset = () => {
		setElapsedTime(0);
		setIsRunning(false);

		if (projectId && taskId) {
			request(`/projects/${projectId}/tasks/${taskId}`, "PATCH", {
				time: elapsedTime,
			});
		} else if (projectId) {
			dispatch(
				saveProjectAsync(projectId, {
					time: elapsedTime,
				}),
			);
		}
	};

	return (
		<div className="mt-5 w-full flex flex-col items-center justify-center">
			<div className="text-[80px]">
				<span className="inline-flex items-center justify-center w-28">
					{hours}
				</span>
				<span>:</span>
				<span className="inline-flex items-center justify-center w-28">
					{minutes}
				</span>
				<span className="text-black opacity-20">:</span>
				<span className="inline-flex items-center justify-center w-28 text-black opacity-20">
					{seconds}
				</span>
			</div>
			<div className="flex items-center justify-center mt-5">
				{elapsedTime === 0 ? (
					<ControlBtn
						iconId="play"
						onClick={handleClickStart}
						isDisabled={!projectId}
					/>
				) : elapsedTime !== 0 && isRunning ? (
					<ControlBtn
						iconId="pause"
						onClick={handleClickStop}
						isDisabled={!projectId}
					/>
				) : (
					<>
						<ControlBtn
							iconId="stop"
							onClick={handleClickReset}
							isDisabled={!projectId}
						/>
						<ControlBtn
							iconId="play"
							onClick={handleClickStart}
							isDisabled={!projectId}
						/>
					</>
				)}
			</div>
		</div>
	);
};

Stopwatch.propTypes = {
	projectId: PROP_TYPE.STRING_REQUIRED,
	taskId: PROP_TYPE.STRING_REQUIRED,
};
