import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import { Video } from "expo-av";
import { Box, Heading, Image, Text, Stack, Badge } from "native-base";
import React, { useRef, useState } from "react";
import { Dimensions, StatusBar } from "react-native";

interface EmployerCardProps {
	companyName: string;
	title: string;
	link: string;
	desc: string;
	skills: { color: string; name: string }[];
}

export const EmployerCard: React.FC<EmployerCardProps> = ({ ...props }) => {
	const video = useRef<any>(null);
	const [status, setStatus] = useState<any>({});
	const navigation = useNavigation();
	const tabBarHeight = useBottomTabBarHeight();
	const { companyName, title, link, desc, skills } = props;

	const handleProfileClick = () => {
		//@ts-ignore
		navigation.navigate("Profile");
	};
	return (
		// <Pressable onPress={handleProfileClick}>
		//height={Dimensions.get("window").height + StatusBar.currentHeight!}
		<Box width='100%' height={Dimensions.get("window").height + StatusBar.currentHeight!}>
			<Box width='100%' height='100%'>
				<Video
					ref={video}
					style={{ width: "100%", height: "100%" }}
					source={{
						uri: link,
					}}
					useNativeControls={false}
					resizeMode='cover'
					isLooping
					onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
					<Heading
						onPress={() => (status.isPlaying ? video.current!.pauseAsync() : video.current!.playAsync())}
						size='xl'
						fontFamily='Comfortaa'
						color='white'
						fontWeight='bold'>
						{companyName}
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
						noOfLines={3}
						fontSize='sm'
						fontFamily='Comfortaa'
						color='gray.400'
						fontWeight='bold'
						mt='-1'>
						{desc}
					</Text>
				</Stack>
			</Box>
		</Box>
		// </Pressable>
	);
};
