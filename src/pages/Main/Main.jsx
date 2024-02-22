import mainImage from "./../../assets/images/main-image.png";
import { ButtonLink, Title } from "../../components";
import { Header } from "./components";

export const Main = () => {
	return (
		<>
			<Header />
			<div className="flex h-[calc(100%-100px)] ">
				<div className="w-2/5 self-center pl-20 pr-10">
					<Title size="48">Отслеживайте свое рабочее время</Title>
					<p className="text-2xl mt-5">
						Удобный тайм-трекер позволяет сохранять результаты
						работы, отслеживать прогресс и анализировать свою
						эффективность.
					</p>
					<div className="mt-10">
						<ButtonLink
							pageLink="/register"
							width="300"
							background="primary"
							isIcon={true}
						>
							Начать
						</ButtonLink>
					</div>
				</div>
				<div className="w-3/5 self-center">
					<img src={mainImage} alt="main" />
				</div>
			</div>
		</>
	);
};
