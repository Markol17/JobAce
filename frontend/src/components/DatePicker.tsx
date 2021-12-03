import React from "react";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";

interface DatePickerProps {
	values: any;
	fieldName: string;
	name: string;
	index?: number;
	setFieldValue: (fieldName: string, date: any) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ ...props }) => {
	const { values, setFieldValue, fieldName, index, name } = props;
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: Date) => {
		hideDatePicker();
		setFieldValue(`experiences.${index}.${fieldName}`, moment(date).format("YYYY-MM-DD"));
	};
	return (
		<>
			<Button
				w='100%'
				size='lg'
				endIcon={<AntDesign name='calendar' size={24} color='white' />}
				p={3}
				colorScheme='teal'
				style={{
					borderRadius: 10,
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
					fontWeight: "bold",
					fontSize: "md",
				}}
				bg='#1e2530'
				onPress={showDatePicker}>
				{index != null && index != undefined && !!values.experiences[index][fieldName]
					? values.experiences[index][fieldName]
					: `Select ${name}`}
			</Button>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode='date'
				themeVariant='dark'
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				date={moment(values.myDate).toDate()}
			/>
		</>
	);
};
