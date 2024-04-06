import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	CLOSE_MODAL,
	openModal,
	removeProjectAsync,
	saveProjectAsync,
	setTagsData,
} from "../../../../store/actions";
import {
	Back,
	CustomSelect,
	Field,
	MessageDefault,
} from "../../../../components";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { selectTags } from "../../../../store/selectors";

export const ProjectForm = ({
	project: { id, name, status, tasks },
	isCreatingProject,
}) => {
	const [nameValue, setNameValue] = useState(name);
	const [statusValue, setStatusValue] = useState(status);
	const [errorForm, setErrorForm] = useState(null);
	const [isSavingProject, setIsSavingProject] = useState(false);
	const tags = useSelector(selectTags);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		setNameValue(name);
		setStatusValue(status);
	}, [name, status]);

	useEffect(() => {
		const tagsDataJSON = sessionStorage.getItem("tagsData");

		if (!tagsDataJSON) {
			return;
		}

		const tagsData = JSON.parse(tagsDataJSON);

		dispatch(setTagsData(tagsData));
	}, [dispatch]);

	const handleNameChange = ({ target }) => {
		setNameValue(target.value);

		let errorMessage = null;

		if (!target.value) {
			errorMessage = "Поле не должно быть пустым";
		}
		setErrorForm(errorMessage);
	};

	const handleSave = () => {
		if (!nameValue) {
			setErrorForm("Поле не должно быть пустым");
			return;
		}
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

	return (
		<>
			<Back>Назад</Back>
			<div className="w-full h-auto mt-5 px-8 py-10 bg-white rounded-2xl shadow-lg">
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
							error={errorForm}
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
					<div className=" mt-5 rounded-xl p-4 border border-solid border-[#ececec]">
						<TaskForm projectId={id} />
						{tasks.length > 0 ? (
							<TaskList tasks={tasks} projectId={id} />
						) : (
							<MessageDefault marginTop="mt-5">
								Задач нет
							</MessageDefault>
						)}
					</div>
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
						disabled={!!errorForm || isSavingProject}
					>
						{isCreatingProject ? "Добавить" : "Сохранить"}
					</button>
				</div>
			</div>
		</>
	);
};
