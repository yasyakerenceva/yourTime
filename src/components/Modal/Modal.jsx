import { useSelector } from "react-redux";
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalTitle,
} from "../../store/selectors";
import { Icon } from "../Icon/Icon";

export const Modal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const title = useSelector(selectModalTitle);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 z-20">
			<div className="absolute bg-black opacity-50 w-full h-full"></div>
			<section className="relative max-w-fit p-5 text-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white rounded-2xl shadow-lg">
				<button
					className="group w-7 h-7 ml-auto flex items-center justify-center rounded-full bg-[#ececec] cursor-pointer outline-none active:scale-95 active:duration-300"
					onClick={onCancel}
				>
					<Icon
						iconId="close"
						width="12"
						height="12"
						classes="text-black transition-colors group-hover:text-error group-focus:text-error"
					/>
				</button>
				<span className=" text-20px">{title}</span>
				<div className="flex items-center justify-center mt-5 pt-5px">
					<button
						type="button"
						className="btn btn-border-primary link-animation w-[155px] h-14 mr-5"
						onClick={onCancel}
					>
						Отмена
					</button>
					<button
						type="submit"
						className="btn btn-background-primary link-animation w-[155px] bg-error h-14"
						onClick={onConfirm}
					>
						Да
					</button>
				</div>
			</section>
		</div>
	);
};
