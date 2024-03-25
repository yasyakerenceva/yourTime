import { Icon } from "../../../../components";
import { Tooltip } from "../Tooltip/Tooltip";

export const Card = ({ children, iconId, name, classes, tooltip }) => {
	return (
		<div
			className={`${classes} rounded-2xl shadow-lg bg-white w-full p-5 mr-5 last:mr-0`}
		>
			<div className="flex items-center">
				<Icon
					iconId={iconId}
					width="32"
					height="32"
					classes="text-primary"
				/>
				<span className="ml-5 text-zinc-400 text-20px">{name}</span>
				<Tooltip text={tooltip} />
			</div>
			<div className="mt-5 flex items-center justify-center font-bold text-24px">
				{children}
			</div>
		</div>
	);
};
