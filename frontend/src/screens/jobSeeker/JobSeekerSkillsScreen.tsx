import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Heading, Button, useToast, VStack, IconButton, Badge } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { getSkills } from "../../api";

export const JobSeekerSkillsScreen = (props: any) => {
	const [selectedSkills, setSelectedSkills] = useState<{ name: string; color: string }[]>([]);
	const [skills, setSkills] = useState<any[]>([]);
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	const handleNext = () => {
		//@ts-ignore
		navigation.navigate("SignUp");
	};

	const handleSkillToggle = (skill: { name: string; color: string }) => {
		const index = selectedSkills.indexOf(skill);
		if (index === -1) {
			setSelectedSkills([...selectedSkills, skill]);
		} else {
			const newSelectedSkills = selectedSkills.filter(function (selectedSkill) {
				return skill.name !== selectedSkill.name;
			});
			setSelectedSkills(newSelectedSkills);
		}
	};

	useEffect(() => {
		const getSkillsData = async () => {
			const data = await getSkills();
			setSkills(data);
		};
		getSkillsData();
	}, []);

	return (
		<VStack bg='#283242' h='100%' py='8'>
			<Box safeArea flex={1} p='2' w='90%' mx='auto'>
				<Box alignItems='center' justifyContent='space-between' flexDirection='row'>
					<Button variant='ghost' colorScheme='teal' onPress={handleBack} marginRight={4}>
						<AntDesign name='back' size={28} color='white' />
					</Button>
					<Box flexDirection='row'>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='white'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							{"Select your "}
						</Heading>
						<Heading
							size='lg'
							justifyContent='space-between'
							color='teal.400'
							fontWeight='extrabold'
							fontFamily='Comfortaa'>
							Skills
						</Heading>
					</Box>
				</Box>
				<Box h='95%' justifyContent='space-between'>
					<Box flexDirection='column'>
						<Box marginBottom={5} flexDirection='row'>
							<Text color='white' fontSize='lg' fontWeight='bold' marginTop={10}>
								{"Your "}
							</Text>
							<Text color='teal.400' fontSize='lg' fontWeight='bold' marginTop={10}>
								skills
							</Text>
						</Box>
						<Box flexDirection='row' flexWrap='wrap'>
							{skills.map((skill, index) => {
								return (
									<Button
										key={index}
										marginBottom={4}
										marginRight={4}
										px={4}
										borderRadius='30px'
										borderColor={skill.color}
										bg={selectedSkills.indexOf(skill) === -1 ? "transparent" : skill.color}
										_pressed={{
											bg: "transparent",
											borderColor: skill.color,
										}}
										_text={{
											color: selectedSkills.indexOf(skill) === -1 ? skill.color : "white",
										}}
										variant={"outline"}
										onPress={() => {
											handleSkillToggle(skill);
										}}>
										{skill.name}
									</Button>
								);
							})}
						</Box>
					</Box>
					<Button
						bottom={0}
						isDisabled={selectedSkills.length < 1}
						w='100%'
						size='lg'
						p={3}
						style={{
							borderRadius: 30,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 3,
							},
							shadowOpacity: 0.29,
							shadowRadius: 4.65,

							elevation: 7,
						}}
						_text={{
							color: "white",
							fontWeight: "bold",
							fontSize: "md",
						}}
						colorScheme='teal'
						onPress={handleNext}>
						Next
					</Button>
				</Box>
			</Box>
		</VStack>
	);
};
