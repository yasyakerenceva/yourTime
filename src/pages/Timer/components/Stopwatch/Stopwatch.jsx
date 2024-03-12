import { useState } from "react";
import { useStopwatch } from "../../../../hooks/useStopwatch";
import { getFormattedTime } from "../../../../utils";
import { ControlBtn } from "../ControlBtn/ControlBtn";

export const Stopwatch = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const [startTime, setStartTime] = useState(0);

	useStopwatch(isRunning, startTime, setElapsedTime);

	const [hours, minutes, seconds] = getFormattedTime(elapsedTime);

	const onClickStart = () => {
		setIsRunning(true);
		setStartTime(Date.now() - elapsedTime);
	};

	const onClickStop = () => {
		setIsRunning(false);
	};

	const onClickReset = () => {
		setElapsedTime(0);
		setIsRunning(false);
	};

	return (
		<div className="mt-5 w-full flex flex-col items-center justify-center">
			<div className="text-[80px]">
				<span className="inline-block w-28">{hours}</span>
				<span>:</span>
				<span className="inline-block w-28">{minutes}</span>
				<span className="text-black opacity-20">:</span>
				<span className="inline-block w-28 text-black opacity-20">
					{seconds}
				</span>
			</div>
			<div className="flex items-center justify-center mt-5">
				{elapsedTime === 0 ? (
					<ControlBtn iconId="icon-play" onClick={onClickStart} />
				) : elapsedTime !== 0 && isRunning ? (
					<ControlBtn iconId="icon-pause" onClick={onClickStop} />
				) : (
					<>
						<ControlBtn iconId="icon-stop" onClick={onClickReset} />
						<ControlBtn iconId="icon-play" onClick={onClickStart} />
					</>
				)}
			</div>
		</div>
	);
};
