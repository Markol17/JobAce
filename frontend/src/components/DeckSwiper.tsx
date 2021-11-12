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
					bio: "I am currently a fourth-year software engineering student at the University of Ottawa. Passionate about coding, my primary goal is to constantly deepen my knowledge about it. During my free time, I work on multiple side projects, but mainly on a web app made with the PERN stack called CoLab (private repository). To see my side projects, I highly encourage you to take a look at my Github profile.",
					skills: [
						{ color: "lightBlue.500", name: "React Native" },
						{ color: "pink.600", name: "GraphQL" },
						{ color: "blue.600", name: "Docker" },
					],
					experience: [],
					picture:
						"https://media-exp1.licdn.com/dms/image/C5603AQHzR0QdUhA-xA/profile-displayphoto-shrink_800_800/0/1628540091317?e=1641427200&v=beta&t=wPe75Xo9mSHjw_2XFLnp4osAJxiO6uvvntBhCAGY36w",
				},
				{
					firstName: "Sukhraj",
					lastName: "Bhogal",
					title: "Soft. Eng.",
					bio: "I am currently a fifth-year student at the University of Ottawa, pursuing software engineering. I am a passionate programmer with a keen interest in learning the ins-and-outs of new technology. With a strong passion for data science and security analysis, I'm currently learning data science libraries such as pandas, scikit-learn, and SciPy alongside machine learning libraries such as TensorFlow and PyTorch. Using these technologies, I'm working on extending my knowledge by developing stock market backtests and automated trading algorithms in order to delve into quantitative finance.",
					skills: [
						{ color: "lightBlue.500", name: "React Native" },
						{ color: "yellow.400", name: "Python" },
					],
					experience: [],
					picture:
						"https://media-exp1.licdn.com/dms/image/C4E35AQEp-KzlLBMxbw/profile-framedphoto-shrink_800_800/0/1616548825977?e=1636092000&v=beta&t=5MbIloZKClPx-QZLJJGLn8wQzAH-LlH8JoqQc7TNyOo",
				},
				{
					firstName: "Shaun",
					lastName: "Ruddy",
					title: "Mech. Eng.",
					bio: "I am a fourth-year year Mechanical Engineering and Computing Technologies student at the university of Ottawa. I was first introduced to SolidWorks when I was 14 and I have been using it since then for high school and university projects. I was even handpicked by my high school to compete in the Skills Ontario Robotics competition (we won 2nd place). I have also been programming in Java since I was 16 and I was introduced to Python in my first year of university. I am hardworking and determined and I would be a great addition to your team.",
					skills: [
						{ color: "orange.700", name: "Java" },
						{ color: "yellow.400", name: "Python" },
					],
					experience: [],
					picture: "https://cdn.discordapp.com/attachments/894274640619376674/905998990150090752/shaun_1.png",
				},
			]}
			renderCard={(card) => {
				return (
					<JobSeekerCard
						firstName={card.firstName}
						lastName={card.lastName}
						title={card.title}
						picture={card.picture}
						bio={card.bio}
						skills={card.skills}
					/>
				);
			}}
			backgroundColor='#283242'
			// showSecondCard={false}
			onSwiped={(cardIndex) => {
				console.log(cardIndex);
			}}
			onSwipedAll={() => {
				console.log("onSwipedAll");
			}}
			cardIndex={0}
			cardVerticalMargin={0}
			cardHorizontalMargin={0}
			infinite
			stackSeparation={2}
			stackSize={3}></Swiper>
	);
};
