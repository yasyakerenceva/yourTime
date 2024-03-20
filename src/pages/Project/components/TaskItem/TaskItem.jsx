import { Icon } from "../../../../components";

export const TaskItem = () => {
	return (
		<li className="flex items-center justify-between">
			<span>UI</span>
			<div className="flex items-center">
				<button
					type="button"
					className="group w-9 h-9 flex items-center justify-center outline-none"
				>
					<Icon
						iconId="pencil"
						classes="text-third transition-colors group-hover:text-primary group-focus:text-primary group-active:text-primary"
						width="18"
						height="18"
					/>
				</button>
				<button
					type="button"
					className="group w-9 h-9 flex items-center justify-center outline-none"
				>
					<Icon
						iconId="delete"
						classes="text-third transition-colors group-hover:text-primary group-focus:text-primary group-active:text-primary"
						width="18"
						height="18"
					/>
				</button>
			</div>
		</li>
	);
};
