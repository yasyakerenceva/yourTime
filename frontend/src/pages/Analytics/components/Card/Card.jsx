import { Icon } from "../../../../components";
import { Tooltip } from "../Tooltip/Tooltip";
import { PROP_TYPE } from "../../../../constants";

export const Card = ({ children, iconId, name, classes = "", tooltip }) => {
	return (
		<div
			className={`${classes} rounded-2xl shadow-lg bg-white w-full p-5 mr-5 last:mr-0`}
		>
			{iconId && (
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
			)}
			<div className="mt-5 flex items-center justify-center font-bold text-24px">
				{children}
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PROP_TYPE.NODE,
	iconId: PROP_TYPE.STRING,
	name: PROP_TYPE.STRING,
	classes: PROP_TYPE.STRING,
	tooltip: PROP_TYPE.STRING,
};
