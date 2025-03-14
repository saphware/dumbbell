import { useProfile } from '@/hooks/useProfile';
import { buttonStyles } from '@/style/buttonStyles';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

type FormData = {
    name: string;
    weight: string;
    height: string;
    extraInfo: string;
};

const InitialForm: React.FC = () => {
    const [assets] = useAssets([
        require('@/assets/images/heroDumbbell.png'),
    ]);
    const profile = useProfile();
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
                    <>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                value={formData.name}
                                onChangeText={(text) => updateFormData('name', text)}
                                placeholder="Ingresa tu nombre"
                            />
                        </View>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                onChangeText={(text) => updateFormData('weight', text)}
                                placeholder="Ingresa tu peso"
                                keyboardType="numeric"
                            />
                        </View>
                    </>
                );
            case 2:
                return (
                    <>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                onChangeText={(text) => updateFormData('weight', text)}
                                placeholder="Ingresa tu peso"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                value={formData.height}
                                onChangeText={(text) => updateFormData('height', text)}
                                placeholder="Ingresa tu altura"
                                keyboardType="numeric"
                            />
                        </View>
                    </>
                );
            case 3:
                return (
                    <>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                value={formData.height}
                                onChangeText={(text) => updateFormData('height', text)}
                                placeholder="Ingresa tu altura"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={inputStyles.input}>
                            <TextInput
                                style={inputStyles.inputText}
                                placeholderTextColor={colors.sg2}
                                value={formData.extraInfo}
                                onChangeText={(text) => updateFormData('extraInfo', text)}
                                placeholder="Añadi cualquier informacion extra que desees."
                                multiline
                                numberOfLines={4}
                            />
                        </View>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <View style={commonStyles.mainContainer}>
            <View style={commonStyles.container}>
                <View style={commonStyles.containerBetween}>
                    {/* @ts-ignore */}
                    <Image source={assets?.[0]} />
                    {/* <Text style={textStyles.titleSm}>Step {step} of 4</Text> */}
                    <Text style={textStyles.titleLg}>¡Dejame conocerte!</Text>
                    {renderStep()}
                    <View style={commonStyles.content}>
                        {step < 3 ? (
                            <TouchableOpacity
                                style={[buttonStyles.button, !isStepValid() && buttonStyles.button]}
                                onPress={handleNext}
                                disabled={!isStepValid()}
                            >
                                <Text style={textStyles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        ) : (
                            <Link href={"/(app)"}>
                                <TouchableOpacity style={buttonStyles.button} onPress={handleSubmit}>
                                    <Text style={textStyles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </Link>
                        )}
                        {step > 1 && (
                            <TouchableOpacity style={buttonStyles.button} onPress={handleBack}>
                                <Text style={textStyles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InitialForm;