import { useEffect, useMemo, useState } from "react";
import { request, debounce } from "../../utils";
import { PAGINATION_LIMIT } from "../../constants";
import { CustomLink, Loader, MessageDefault } from "../../components";
import { Search, Tags, ProjectCard, Pagination } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectTags } from "../../store/selectors";

export const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [status, setStatus] = useState(-1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const tags = useSelector(selectTags);

	useEffect(() => {
		setIsLoading(true);
		request(
			`/projects?search=${searchPhrase}&status=${status}&page=${page}&limit=${PAGINATION_LIMIT}`,
		)
			.then(({ data: { projects, lastPage } }) => {
				setProjects(projects);
				setLastPage(lastPage);
			})
			.finally(() => {
				setIsLoading(false);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, shouldSearch, status, dispatch]);

	const startDelayedSearch = useMemo(
		() => debounce(setShouldSearch, 1000),
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
			<Tags tags={tags} setStatus={setStatus} setPage={setPage} />
			<div className="flex flex-col justify-between h-[calc(100%-125px)]">
				{isLoading ? (
					<Loader />
				) : projects.length > 0 ? (
					<div className="overflow-y-auto p-3 mt-10 bg-white scroll">
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
					<MessageDefault marginTop="mt-24">
						Проектов нет
					</MessageDefault>
				)}
				{lastPage > 1 && !isLoading && (
					<Pagination
						lastPage={lastPage}
						page={page}
						setPage={setPage}
					/>
				)}
			</div>
		</div>
	);
};
