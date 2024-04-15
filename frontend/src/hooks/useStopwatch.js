import { useEffect, useRef } from "react";

export const useStopwatch = (isRunning, startTime, setElapsedTime) => {
	const intervalIdRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			intervalIdRef.current = setInterval(() => {
				setElapsedTime(Date.now() - startTime);
			}, 100);
		}

		return () => {
			clearInterval(intervalIdRef.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRunning, startTime]);
};
