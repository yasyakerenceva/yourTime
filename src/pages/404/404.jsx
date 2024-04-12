import { Breadcrumbs } from "../../components"

export const Page404 = () => {
	return (
		<div className="py-7 px-7 h-screen flex flex-col items-start">
			<Breadcrumbs path={-1}>Назад</Breadcrumbs>
			<div className="flex flex-col items-center self-center my-auto">
				<span className="text-[100px] leading-none font-bold text-third">4<u className=" text-primary no-underline">0</u>4</span>
				<span className="text-primary">Такая страница не существует</span>
			</div>

		</div>
	)
}
