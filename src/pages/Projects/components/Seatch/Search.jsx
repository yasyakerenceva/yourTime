import { Icon } from "../../../../components";
import { PROP_TYPE } from "../../../../constants";

export const Search = ({ searchPhrase, onSearch }) => {
	return (
		<div className="w-[calc(100%-300px)] relative">
			<div className="w-14 h-14 flex items-center justify-center absolute top-0 left-0">
				<Icon
					iconId="search"
					classes="text-primary rotate-90"
					width="24"
					height="24"
				/>
			</div>
			<input
				className="w-full h-14 py-4 pr-6 pl-14 outline-none rounded-2xl shadow-lg"
				type="text"
				value={searchPhrase}
				onChange={onSearch}
				name="search"
				placeholder="Поиск по проектам"
			/>
		</div>
	);
};

Search.propTypes = {
	searchPhrase: PROP_TYPE.STRING_REQUIRED,
	onSearch: PROP_TYPE.FUNCTION_REQUIRED,
};
