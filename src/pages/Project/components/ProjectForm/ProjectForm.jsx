import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	CLOSE_MODAL,
	openModal,
	removeProjectAsync,
	saveProjectAsync,
	setTagsData,
} from "../../../../store/actions";
import { selectTags } from "../../../../store/selectors";
import {
	Breadcrumbs,
	CustomSelect,
	Field,
	MessageDefault,
} from "../../../../components";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";

export const ProjectForm = ({
	project: { id, name, status, tasks },
	isCreatingProject,
}) => {
	const [nameValue, setNameValue] = useState(name);
	const [statusValue, setStatusValue] = useState(status);
	const [isSavingProject, setIsSavingProject] = useState(false);
	const tags = useSelector(selectTags);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const tagsDataJSON = sessionStorage.getItem("tagsData");

		if (!tagsDataJSON) {
			return;
		}

		const tagsData = JSON.parse(tagsDataJSON);

		dispatch(setTagsData(tagsData));
	}, [dispatch]);

	const handleNameChange = ({ target }) => setNameValue(target.value);

	const handleSave = () => {
		setIsSavingProject(true);
		dispatch(
			saveProjectAsync(id, {
				name: nameValue,
				status: statusValue,
			}),
		)
			.then(({ id }) => navigate(`/project/${id}`))
			.finally(() => setIsSavingProject(false));
	};

	const handleDelete = (id) => {
		dispatch(
			openModal({
				title: "Удалить проект?",
				onConfirm: () => {
					dispatch(removeProjectAsync(id)).then(() =>
						navigate("/projects"),
					);
					dispatch(CLOSE_MODAL);
				},

				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const checkValidation =
		!nameValue ||
		isSavingProject ||
		(nameValue === name && statusValue === status);

	return (
		<>
			<Breadcrumbs path="/projects">Все проекты</Breadcrumbs>
			<div className="w-full mt-5 p-5 h-[calc(100%-48px)] flex flex-col bg-white">
				<form
					className="flex items-start justify-between"
					onSubmit={(e) => e.preventDefault()}
				>
					<div className="w-[calc(50%-10px)]">
						<Field
							id="project"
							name="project"
							type="text"
							labelText="Название проекта"
							value={nameValue}
							onChange={handleNameChange}
						/>
					</div>
					<div className="w-[calc(50%-10px)]">
						<CustomSelect
							id="tags"
							label="Статус"
							arrayOptions={tags}
							placeholder=""
							currentValue={statusValue}
							setCurrentValue={setStatusValue}
						/>
					</div>
				</form>
				{!isCreatingProject && (
					<>
						<TaskForm projectId={id} />
						{tasks.length > 0 ? (
							<TaskList tasks={tasks} projectId={id} />
						) : (
							<MessageDefault marginTop="mt-5">
								Задач нет
							</MessageDefault>
						)}
					</>
				)}
				<div className="mt-8 pt-5px flex justify-end items-center">
					{!isCreatingProject && (
						<button
							type="submit"
							className="btn btn-background-primary link-animation w-[155px] h-14 bg-error mr-5"
							onClick={() => handleDelete(id)}
						>
							Удалить
						</button>
					)}
					<button
						type="submit"
						className="btn btn-background-primary link-animation w-[155px] h-14 btn-disabled"
						onClick={handleSave}
						disabled={checkValidation}
					>
						{isCreatingProject ? "Добавить" : "Сохранить"}
					</button>
				</div>
			</div>
		</>
	);
};
