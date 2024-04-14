import { useEffect, useLayoutEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET_PROJECT_DATA, loadProjectAsync } from "../../store/actions";
import { selectProject } from "../../store/selectors";
import { Breadcrumbs, Error, Loader } from "../../components";
import { ProjectForm } from "./components";

export const Project = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const isCreating = !!useMatch("/project");
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const project = useSelector(selectProject);

	useLayoutEffect(() => {
		dispatch(RESET_PROJECT_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadProjectAsync(params.id)).then((projectData) => {
			setError(projectData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="h-full">
			{error ? (
				<>
					<Breadcrumbs path="/projects">Все проекты</Breadcrumbs>
					<div className="h-[calc(100%-28px)] flex items-center justify-center">
						<Error error={error} />
					</div>
				</>
			) : (
				<ProjectForm project={project} isCreatingProject={isCreating} />
			)}
		</div>
	);
};
