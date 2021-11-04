import React from "react";
import Swiper from "react-native-deck-swiper";
import { JobSeekerCard } from "./JobSeekerCard";

interface DeckSwiperProps {}

export const DeckSwiper: React.FC<DeckSwiperProps> = () => {
	return (
		<Swiper
			cards={[
				{
					firstName: "Mark-Olivier",
					lastName: "Poulin",
					title: "Soft. Eng.",
					picture:
						"https://media-exp1.licdn.com/dms/image/C5603AQHzR0QdUhA-xA/profile-displayphoto-shrink_800_800/0/1628540091317?e=1641427200&v=beta&t=wPe75Xo9mSHjw_2XFLnp4osAJxiO6uvvntBhCAGY36w",
				},
				{
					firstName: "Sukhraj",
					lastName: "Bhogal",
					title: "Soft. Eng.",
					picture:
						"https://media-exp1.licdn.com/dms/image/C4E35AQEp-KzlLBMxbw/profile-framedphoto-shrink_800_800/0/1616548825977?e=1636092000&v=beta&t=5MbIloZKClPx-QZLJJGLn8wQzAH-LlH8JoqQc7TNyOo",
				},
				{
					firstName: "Shaun",
					lastName: "Ruddy",
					title: "Mech. Eng.",
					picture: "https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc",
				},
			]}
			renderCard={(card) => {
				return (
					<JobSeekerCard
						firstName={card.firstName}
						lastName={card.lastName}
						title={card.title}
						picture={card.picture}
					/>
				);
			}}
			onSwiped={(cardIndex) => {
				console.log(cardIndex);
			}}
			onSwipedAll={() => {
				console.log("onSwipedAll");
			}}
			cardIndex={0}
			backgroundColor={"#F5FCFF"}
			cardVerticalMargin={2}
			cardHorizontalMargin={2}
			infinite
			stackSeparation={2}
			stackSize={3}></Swiper>
	);
};
