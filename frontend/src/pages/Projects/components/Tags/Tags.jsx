import PropTypes from "prop-types";
import { memo } from "react";
import { useState } from "react";
import { PROP_TYPE } from "../../../../constants";

export const Tags = memo(({ tags, setStatus, setPage }) => {
	const [activeId, setActiveId] = useState(-1);

	const handleClick = ({ target }) => {
		setPage(1);
		setActiveId(target.dataset.id);
		setStatus(Number(target.dataset.id));
	};

	return (
		<div className="mt-7 flex items-center pt-5px">
			<button
				className={`btn btn-animation tag ${Number(activeId) === -1 ? "tag-active" : ""}`}
				type="button"
				onClick={handleClick}
				data-id={-1}
			>
				Все
			</button>
			{tags.map(({ id: tagId, name: tagName }) => (
				<button
					key={tagId}
					type="button"
					className={`btn btn-animation tag ${Number(activeId) === tagId ? "tag-active" : ""}`}
					onClick={handleClick}
					data-id={tagId}
				>
					{tagName}
				</button>
			))}
		</div>
	);
});

Tags.propTypes = {
	tags: PropTypes.arrayOf(PROP_TYPE.TAG).isRequired,
	setStatus: PROP_TYPE.FUNCTION_REQUIRED,
	setPage: PROP_TYPE.FUNCTION_REQUIRED,
};
