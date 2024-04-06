import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { request, debounce } from "../../utils";
import { PAGINATION_LIMIT } from "../../constants";
import { CustomLink, Loader, MessageDefault } from "../../components";
import { Search, Tags, ProjectCard, Pagination } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectTags } from "../../store/selectors";
import { loadTagsAsync } from "../../store/actions";

export const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [status, setStatus] = useState();
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isLoadingProjects, setIsLoadingProjects] = useState(false);
	const [isLoadingTags, setIsLoadingTags] = useState(false);
	const dispatch = useDispatch();
	const tags = useSelector(selectTags);

	useLayoutEffect(() => {
		setIsLoadingTags(true);
		dispatch(loadTagsAsync()).then(() => setIsLoadingTags(false));
	}, [dispatch]);

	useEffect(() => {
		setIsLoadingProjects(true);
		request(
			`/projects?search=${searchPhrase}${[0, 1].includes(status) ? `&status=${status}` : ""}&page=${page}&limit=${PAGINATION_LIMIT}`,
		)
			.then(({ data: { projects, lastPage } }) => {
				setProjects(projects);
				setLastPage(lastPage);
			})
			.finally(() => setIsLoadingProjects(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch, status]);

	const startDelayedSearch = useMemo(
		() => debounce(setShouldSearch, 2000),
		[],
	);

	const handleSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className="relative h-full">
			<div className="flex items-center justify-between">
				<Search searchPhrase={searchPhrase} onSearch={handleSearch} />
				<CustomLink
					toPageLink="/project"
					widthClass="w-[250px]"
					modifier="link-background-primary"
					isAnimation={false}
					isIcon={true}
				>
					Создать
				</CustomLink>
			</div>
			{!isLoadingTags && <Tags tags={tags} setStatus={setStatus} />}
			{isLoadingProjects ? (
				<Loader />
			) : projects.length > 0 ? (
				<div className="overflow-y-auto h-[calc(100%-193px)] p-3 mt-10 bg-white scroll">
					{projects.map(
						({
							id,
							name,
							time,
							status,
							fullTime,
							createdAt,
							tasks,
						}) => (
							<ProjectCard
								key={id}
								id={id}
								name={name}
								fullTime={fullTime}
								time={time}
								createdAt={createdAt}
								tag={tags.find(({ id }) => id === status)}
								tasks={tasks}
							/>
						),
					)}
				</div>
			) : (
				<MessageDefault marginTop="mt-24">Проектов нет</MessageDefault>
			)}
			{lastPage > 1 && !isLoadingProjects && (
				<Pagination lastPage={lastPage} page={page} setPage={setPage} />
			)}
		</div>
	);
};
