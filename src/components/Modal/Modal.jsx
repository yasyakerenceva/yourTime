import { Icon } from "../Icon/Icon";
import styles from "./modal.module.css";

export const Modal = ({ children, title, btnName }) => {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 z-20">
			<div className="absolute bg-black opacity-50 w-full h-full"></div>
			<section className={styles.modal}>
				<div className="flex items-center justify-between">
					<span className=" text-20px">{title}</span>
					<button className="group w-7 h-7 flex items-center justify-center rounded-full bg-[#ececec] cursor-pointer outline-none active:scale-95 active:duration-300">
						<Icon
							iconId="close"
							width="12"
							height="12"
							classes="text-black transition-colors group-hover:text-error group-focus:text-error"
						/>
					</button>
				</div>
				<div className="mt-5">{children}</div>
				<div className="flex items-center justify-end mt-5 pt-5px">
					<button
						type="button"
						className="btn btn-border-primary link-animation w-[155px] h-14 mr-5"
					>
						Отмена
					</button>
					<button
						type="submit"
						className="btn btn-background-primary link-animation w-[155px] h-14"
					>
						{btnName}
					</button>
				</div>
			</section>
		</div>
	);
};
