import React from "react";
import Swiper from "react-native-deck-swiper";
import { EmployerCard } from ".";
import { JobSeekerCard } from "./JobSeekerCard";

interface DeckSwiperProps {}
const employer = [
	{
		companyName: "Company #1",
		title: "Backend Software Engineer",
		desc: "As a Backend Developer, you will be managing the exchange of data between the server and the users. Your will be focus on the development of all server-side logic, maintenance, and definition of the central database, and ensuring high performance and responsiveness to requests from the front-end.",
		link: "https://firebasestorage.googleapis.com/v0/b/jobtok-3f057.appspot.com/o/coding.mp4?alt=media&token=c94a2a3d-84d9-4957-81c6-deb0e7f5d477",
		skills: [
			{ color: "purple.600", name: ". Net Core" },
			{ color: "pink.600", name: "GraphQL" },
			{ color: "blue.600", name: "Docker" },
		],
	},
	{
		companyName: "Company #2",
		title: "Marketing Director",
		desc: "Marketing directors are responsible for their company's marketing and communications strategies, as well as overall branding and image. They prepare annual marketing plans, create a calendar of campaigns and events, set the marketing budget and analyse the market and competitors.",
		link: "https://firebasestorage.googleapis.com/v0/b/jobtok-3f057.appspot.com/o/marketing.mp4?alt=media&token=ee72fb9e-f490-41a2-ab70-8beb416f6d4e",
		skills: [
			{ color: "lightBlue.500", name: "Communication" },
			{ color: "yellow.400", name: "Marketing" },
		],
	},
	{
		companyName: "Company #3",
		title: "Product Manager",
		desc: "The Product Manager is responsible for the product planning and execution throughout the Product Lifecycle, including: gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing and support to ensure revenue and customer satisfaction.",
		link: "https://firebasestorage.googleapis.com/v0/b/jobtok-3f057.appspot.com/o/manager.mp4?alt=media&token=ed6439a9-febb-4e98-8858-d3bf2918acad",
		skills: [
			{ color: "orange.700", name: "AGILE" },
			{ color: "yellow.400", name: "Programming" },
		],
	},
];
const jobSeekers = [
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
		link: "https://media-exp1.licdn.com/dms/image/C5603AQHzR0QdUhA-xA/profile-displayphoto-shrink_800_800/0/1628540091317?e=1641427200&v=beta&t=wPe75Xo9mSHjw_2XFLnp4osAJxiO6uvvntBhCAGY36w",
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
		link: "https://media-exp1.licdn.com/dms/image/C4E35AQEp-KzlLBMxbw/profile-framedphoto-shrink_800_800/0/1616548825977?e=1636092000&v=beta&t=5MbIloZKClPx-QZLJJGLn8wQzAH-LlH8JoqQc7TNyOo",
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
		link: "https://cdn.discordapp.com/attachments/894274640619376674/905998990150090752/shaun_1.png",
	},
];
export const DeckSwiper: React.FC<DeckSwiperProps> = () => {
	return (
		<Swiper
			cards={employer}
			renderCard={(card) => {
				return (
					<EmployerCard
						companyName={card.companyName}
						title={card.title}
						link={card.link}
						desc={card.desc}
						skills={card.skills}
					/>
					// <JobSeekerCard
					// 	firstName={card.firstName}
					// 	lastName={card.lastName}
					// 	title={card.title}
					// 	link={card.link}
					// 	bio={card.bio}
					// 	skills={card.skills}
					// />
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
