import { Icon } from "../../../../components";
import styles from "./pagination.module.css";

export const Pagination = ({ lastPage, page, setPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= lastPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={styles.container}>
			<button
				className={styles.btn}
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
					className={`${styles.btn} bg-third disabled:bg-primary`}
					onClick={() => setPage(num)}
				>
					{num}
				</button>
			))}
			<button
				type="button"
				className={`${styles.btn} bg-third `}
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
