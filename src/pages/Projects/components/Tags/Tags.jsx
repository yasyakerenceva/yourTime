import { useState } from "react";

export const Tags = ({ tags }) => {
	const [activeId, setActiveId] = useState();

	const handleClick = ({ target }) => {
		setActiveId(target.dataset.id);
	};

	return (
		<div className="mt-7 flex items-center pt-5px">
			<button
				className={`btn btn-animation tag ${!activeId ? "tag-active" : ""}`}
				type="button"
				onClick={handleClick}
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
};
