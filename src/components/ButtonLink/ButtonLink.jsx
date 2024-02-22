import { Link } from "react-router-dom";
import "./buttonLink.css";

/*
	props
	- pageLink:string ссылка на страницу,
	- backgrond: {
		- primary фон кнопки главный цвет
	},
	- isAnimation:boolean анимация на кнопке,
	- isIcon:boolean стрелка у кнопки,
*/

export const ButtonLink = ({
	children,
	pageLink,
	width = 150,
	background = null,
	isAnimation = null,
	isIcon = false,
}) => {
	const widthVariants = {
		150: "w-[150px]",
		180: "w-[180px]",
		300: "w-[300px]",
	};

	return (
		<Link
			to={pageLink}
			className={`
				group btn
				${background === "primary" ? "" : "btn-no-bg"}
				${isAnimation ? "btn-animation" : ""}
				${widthVariants[width]}
				h-[60px]`}
		>
			{children}
			{isIcon && (
				<div className="btn-icon">
					<svg
						className="text-primary"
						height="24"
						width="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
							fill="currentColor"
						></path>
					</svg>
				</div>
			)}
		</Link>
	);
};
