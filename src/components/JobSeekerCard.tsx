import { Box, Heading, Icon, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import React from "react";

interface JobSeekerCardProps {
	firstName: string;
	lastName: string;
	title: string;
	picture: string;
}

export const JobSeekerCard: React.FC<JobSeekerCardProps> = ({ ...props }) => {
	const { firstName, lastName, title, picture } = props;
	return (
		<Box
			rounded='lg'
			overflow='hidden'
			width='100%'
			height='92%'
			shadow={1}
			_light={{ backgroundColor: "gray.50" }}
			_dark={{ backgroundColor: "gray.700" }}>
			<Box>
				<AspectRatio>
					<Image
						source={{
							uri: picture,
						}}
						alt='image'
					/>
				</AspectRatio>
			</Box>
			<Stack p='4' space={3}>
				<Stack space={2}>
					<Heading size='md' ml='-1'>
						{firstName + " " + lastName}
					</Heading>
					<Text
						fontSize='xs'
						_light={{ color: "violet.500" }}
						_dark={{ color: "violet.300" }}
						fontWeight='500'
						ml='-0.5'
						mt='-1'>
						{title}
					</Text>
				</Stack>
				<Text fontWeight='400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
					repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
					praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
				</Text>
				<HStack alignItems='center' space={4} justifyContent='space-between'>
					<HStack alignItems='center'>
						<Text color='gray.500' fontWeight='400'>
							5 mins ago
						</Text>
					</HStack>
				</HStack>
			</Stack>
		</Box>
	);
};
