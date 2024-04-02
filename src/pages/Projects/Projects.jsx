import { useEffect, useMemo, useState } from "react";
import { request, debounce } from "../../utils";
import { PAGINATION_LIMIT } from "../../constants";
import { CustomLink, Loader } from "../../components";
import { Search, Tags, ProjectCard } from "./components";

export const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [tags, setTags] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [status, setStatus] = useState();
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isLoadingTags, setIsLoadingTags] = useState(false);
	const [isLoadingProjects, setIsLoadingProjects] = useState(false);

	useEffect(() => {
		request("/projects/status").then((statusRes) => {
			setTags(statusRes.data);
			setIsLoadingTags(true);
		});
	}, []);

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
			{isLoadingTags && <Tags tags={tags} setStatus={setStatus} />}
			{isLoadingProjects ? (
				<Loader />
			) : projects.length > 0 ? (
				<div className="overflow-y-auto h-[calc(100%-125px)] pl-3 pr-3 pb-3 bg-white scroll">
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
								tag={tags.filter(({ id }) => id === status)[0]}
								tasks={tasks}
							/>
						),
					)}
				</div>
			) : (
				<div className="flex items-center justify-center mt-24">
					<span className="text-center text-primary font-bold">
						Проектов нет
					</span>
				</div>
			)}
		</div>
	);
};
