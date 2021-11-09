import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import { Box, Heading, Image, Text, Stack, Badge, Pressable } from "native-base";
import React from "react";
import { Dimensions, StatusBar } from "react-native";

interface JobSeekerCardProps {
	firstName: string;
	lastName: string;
	title: string;
	picture: string;
	bio: string;
	skills: { color: string; name: string }[];
}

export const JobSeekerCard: React.FC<JobSeekerCardProps> = ({ ...props }) => {
	const navigation = useNavigation();
	const tabBarHeight = useBottomTabBarHeight();
	const { firstName, lastName, title, picture, bio, skills } = props;

	const handleProfileClick = () => {
		//@ts-ignore
		navigation.navigate("Profile");
	};
	return (
		// <Pressable onPress={handleProfileClick}>
		//height={Dimensions.get("window").height + StatusBar.currentHeight!}
		<Box width='100%' height='100%'>
			<Box width='100%' height='100%'>
				<Image
					source={{
						uri: picture,
					}}
					size={"100%"}
					alt='profile picture'
					resizeMode={"cover"}
				/>
			</Box>
			<Box
				bg={{
					linearGradient: {
						colors: ["transparent", "black"],
					},
				}}
				paddingTop={400}
				width='100%'
				position='absolute'
				bottom={0}
				paddingBottom={tabBarHeight}>
				<Stack space={3} p='4'>
					<Heading size='xl' fontFamily='Comfortaa' color='white' fontWeight='bold'>
						{firstName + " " + lastName}
					</Heading>
					<Text fontSize='md' fontFamily='Comfortaa' color='teal.500' fontWeight='semibold' mt='-3'>
						{title}
					</Text>
					<Box flexDirection='row'>
						{skills.map((skill) => {
							return (
								<Badge
									marginRight={2}
									borderRadius='10px'
									borderColor={skill.color}
									_text={{
										color: skill.color,
									}}
									variant={"outline"}>
									{skill.name}
								</Badge>
							);
						})}
					</Box>
					<Text
						isTruncated
						noOfLines={2}
						fontSize='sm'
						fontFamily='Comfortaa'
						color='gray.400'
						fontWeight='bold'
						mt='-1'>
						{bio}
					</Text>
				</Stack>
			</Box>
		</Box>
		// </Pressable>
	);
};
