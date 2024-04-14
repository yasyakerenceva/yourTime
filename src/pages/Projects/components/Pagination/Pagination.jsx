import { Icon } from "../../../../components";
import { PROP_TYPE } from "../../../../constants";

export const Pagination = ({ lastPage, page, setPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= lastPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="mt-9 w-full h-8 flex items-center justify-center">
			<button
				className="pagination-btn"
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
					className="pagination-btn bg-third disabled:bg-primary"
					onClick={() => setPage(num)}
				>
					{num}
				</button>
			))}
			<button
				type="button"
				className="pagination-btn bg-third"
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

Pagination.propTypes = {
	lastPage: PROP_TYPE.NUMBER_REQUIRED,
	page: PROP_TYPE.NUMBER_REQUIRED,
	setPage: PROP_TYPE.FUNCTION_REQUIRED,
};
