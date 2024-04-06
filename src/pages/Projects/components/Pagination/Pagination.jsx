import { Icon } from "../../../../components";

export const Pagination = ({ lastPage, page, setPage }) => {
	const pageNumbers = [];

	const btnClass =
		"w-8 h-full flex items-center justify-center bg-third mr-5 last:mr-0 text-white rounded hover:bg-primary transition-colors duration-300 disabled:pointer-events-none";

	for (let i = 1; i <= lastPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className=" mt-9 w-full h-8 flex items-center justify-center">
			<button
				className={btnClass}
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
			>
				<Icon
					iconId="arrow-down"
					width="20"
					height="20"
					classes="rotate-90"
				/>
			</button>
			{pageNumbers.map((num) => (
				<button
					key={num}
					type="button"
					disabled={page === num}
					className={`${btnClass} disabled:bg-primary`}
					onClick={() => setPage(num)}
				>
					{num}
				</button>
			))}
			<button
				type="button"
				className={btnClass}
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
			>
				<Icon
					iconId="arrow-down"
					width="20"
					height="20"
					classes="-rotate-90"
				/>
			</button>
		</div>
	);
};
