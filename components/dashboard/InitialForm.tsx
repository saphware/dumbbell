import { buttonStyles } from '@/style/buttonStyles';
import { commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

type FormData = {
    name: string;
    weight: string;
    height: string;
    extraInfo: string;
};

const InitialForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        weight: '',
        height: '',
        extraInfo: '',
    });

    const updateFormData = (key: keyof FormData, value: string) => {
        setFormData(prevData => ({ ...prevData, [key]: value }));
    };

    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.name.trim().length > 0;
            case 2:
                return !isNaN(Number(formData.weight)) && Number(formData.weight) > 0;
            case 3:
                return !isNaN(Number(formData.height)) && Number(formData.height) > 0;
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (isStepValid()) {
            setStep(prevStep => prevStep + 1);
        }
    };

    const handleBack = () => {
        setStep(prevStep => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to an API or perform some action
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View>
                        <Text style={textStyles.span}>Name:</Text>
                        <TextInput
                            style={inputStyles.input}
                            value={formData.name}
                            onChangeText={(text) => updateFormData('name', text)}
                            placeholder="Enter your name"
                        />
                    </View>
                );
            case 2:
                return (
                    <View>
                        <Text style={textStyles.span}>Weight (kg):</Text>
                        <TextInput
                            style={inputStyles.input}
                            value={formData.weight}
                            onChangeText={(text) => updateFormData('weight', text)}
                            placeholder="Enter your weight"
                            keyboardType="numeric"
                        />
                    </View>
                );
            case 3:
                return (
                    <View>
                        <Text style={textStyles.span}>Height (cm):</Text>
                        <TextInput
                            style={inputStyles.input}
                            value={formData.height}
                            onChangeText={(text) => updateFormData('height', text)}
                            placeholder="Enter your height"
                            keyboardType="numeric"
                        />
                    </View>
                );
            case 4:
                return (
                    <View>
                        <Text style={textStyles.span}>Extra Information:</Text>
                        <TextInput
                            style={inputStyles.input}
                            value={formData.extraInfo}
                            onChangeText={(text) => updateFormData('extraInfo', text)}
                            placeholder="Any additional information you'd like to share"
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <ScrollView contentContainerStyle={commonStyles.container}>
            <Text style={textStyles.span}>Step {step} of 4</Text>
            {renderStep()}
            <View style={inputStyles.input}>
                {step > 1 && (
                    <TouchableOpacity style={buttonStyles.button} onPress={handleBack}>
                        <Text style={textStyles.buttonText}>Back</Text>
                    </TouchableOpacity>
                )}
                {step < 4 ? (
                    <TouchableOpacity
                        style={[buttonStyles.button, !isStepValid() && buttonStyles.button]}
                        onPress={handleNext}
                        disabled={!isStepValid()}
                    >
                        <Text style={textStyles.buttonText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={buttonStyles.button} onPress={handleSubmit}>
                        <Text style={textStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
};

export default InitialForm;