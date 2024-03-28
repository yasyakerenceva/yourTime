import { useState } from "react";
import { Search, Tags, ProjectCard } from "./components";
import { CustomLink } from "../../components";

const PROJECTS_MOCK = [
	{
		id: "001",
		name: "Design",
		fullTime: 39900,
		time: 20000,
		dateCreation: "2024-01-02",
		tagId: 0,
		userId: "1",
		tasks: [
			{
				id: "0001",
				name: "ui-design",
				time: 5000,
			},
			{
				id: "0002",
				name: "ui-design",
				time: 5000,
			},
		],
	},
	{
		id: "002",
		name: "Design",
		fullTime: 39900,
		time: 20000,
		dateCreation: "2024-01-02",
		tagId: 1,
		userId: "1",
		tasks: [
			{
				id: "0002",
				name: "ui-design",
				time: 5000,
			},
		],
	},
	{
		id: "003",
		name: "Design",
		fullTime: 39900,
		time: 20000,
		dateCreation: "2024-01-02",
		tagId: 0,
		userId: "1",
		tasks: [],
	},
];

const TAGS_MOCK = [
	{ id: 0, name: "В работе" },
	{ id: 1, name: "Завершенные" },
];

export const Projects = () => {
	const [projects, setProjects] = useState(PROJECTS_MOCK);
	const [tags, setTags] = useState(TAGS_MOCK);
	const [searchPhrase, setSearchPhrase] = useState("");

	const handleSearch = ({ target }) => {
		setSearchPhrase(target.value);
	};
	return (
		<>
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
			<Tags tags={tags} />
			<div className="overflow-y-auto h-[calc(100%-125px)] pl-3 pr-3 pb-3 bg-white scroll">
				{projects.map(
					({
						id,
						name,
						fullTime,
						time,
						tagId,
						dateCreation,
						tasks,
					}) => (
						<ProjectCard
							key={id}
							id={id}
							name={name}
							fullTime={fullTime}
							time={time}
							dateCreation={dateCreation}
							tag={tags.filter(({ id }) => id === tagId)[0]}
							tasks={tasks}
						/>
					),
				)}
			</div>
		</>
	);
};
