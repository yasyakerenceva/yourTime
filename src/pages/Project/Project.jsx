import { useParams } from "react-router-dom";
import { CustomSelect, Field, Modal } from "../../components";
import { TaskForm, TaskItem } from "./components";
import { useState } from "react";

const TAGS_MOCK = [
	{ id: 1, name: "В работе" },
	{ id: 11, name: "Завершенные" },
];

const optionsTags = TAGS_MOCK.map((tag) => {
	return {
		value: tag.id,
		label: tag.name,
	};
});

export const Project = () => {
	const params = useParams();
	const [isEditing, setIsEditing] = useState(!!params.id);

	if (!isEditing) {
		return (
			<Modal title="Создать проект" btnName="Создать">
				<input
					type="text"
					className="w-full h-14 px-6 py-4 border border-solid border-[#b9b9b9] rounded-lg outline-zinc-500/25"
					placeholder="Название проекта"
				/>
			</Modal>
		);
	}

	return (
		<div className="h-full flex items-center justify-center">
			{isEditing && (
				<div className="w-full h-auto px-8 py-10 bg-white rounded-2xl shadow-lg">
					<form className="flex items-center justify-between">
						<div className="w-[calc(50%-10px)]">
							<Field
								id="project"
								name="project"
								type="text"
								labelText="Название проекта"
							/>
						</div>
						<div className="w-[calc(50%-10px)]">
							<CustomSelect
								id="tags"
								label="Статус"
								options={optionsTags}
								placeholder=""
							/>
						</div>
					</form>
					<div className="mt-10 rounded-xl p-4 border border-solid border-[#ececec]">
						<TaskForm />
						<ul className="mt-7 pl-2">
							<TaskItem />
						</ul>
					</div>
					<div className="mt-8 pt-5px flex justify-end items-center">
						<button
							type="submit"
							className="btn btn-background-primary link-animation w-[155px] h-14 bg-error mr-5"
						>
							Удалить
						</button>
						<button
							type="submit"
							className="btn btn-background-primary link-animation w-[155px] h-14"
						>
							Добавить
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
