import { useProfile } from '@/hooks/useProfile';
import { buttonStyles } from '@/style/buttonStyles';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import { textStyles } from '@/style/textStyles';
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

type FormData = {
    name: string;
    weight: number;
    height: number;
    weight_unit: string;
    height_unit: string;
    /* current_activity: number;
    target_activity: number;
    goal: number;
    target_weight: number; */
    extraInfo: string;
};
const weightUnits = [
    {
        id: 0,
        unit: "kg"
    },
    {
        id: 1,
        unit: "lb"
    }
]

const heightUnits = [
    {
        id: 0,
        unit: "cm"
    },
    {
        id: 1,
        unit: "in"
    }
]
const InitialForm: React.FC = () => {
    const [assets] = useAssets([
        require('@/assets/images/heroDumbbell.png'),
    ]);
    const {user, profile} = useProfile();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        weight: 50,
        height: 170,
        weight_unit: 'kg',
        height_unit: 'cm',
        extraInfo: '',
        /* current_activity: 0,
        target_activity: 0,
        goal: 0,
        target_weight: 0, */
    });

    const updateFormData = (key: keyof FormData, value: string | number) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value !== undefined ? value : "",
        }));
        console.log(formData)
    };

    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.name.trim().length > 0 || formData.weight > 0;
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
                                value={formData.weight.toString() ?? ""} // Fallback para evitar undefined
                                placeholderTextColor={colors.sg2}
                                onChangeText={(text) => {
                                    let num = parseFloat(text) || 0; 
                                    if (num < 0) num = 0;                                
                                    updateFormData('weight', num); 
                                }}
                                placeholder="Ingresa tu peso"
                                keyboardType="numeric"                                
                                inputMode="numeric" 
                            />

                    <FlatList
                        data={weightUnits}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity    
                                style={[
                                    inputStyles.unitButton,
                                    formData.weight_unit === item.unit && inputStyles.selectedButton
                                ]}                    
                                onPress={() => updateFormData('height_unit', item.unit)}
                            >
                                <Text style={inputStyles.unitText}>{item.unit}</Text>
                            </TouchableOpacity>
                        )}
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
                                value={formData.height.toString() ?? ""} // Fallback para evitar undefined               
                                onChangeText={(text) => {
                                    let num = parseFloat(text) || 0; 
                                    if (num < 0) num = 10;        
                                    if (num > 300) num = 300                        
                                    updateFormData('height', num); 
                                }}
                                placeholder="Ingresa tu altura"
                                keyboardType="numeric"
                            />
                            <FlatList
                        data={heightUnits}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity    
                                style={[
                                    inputStyles.unitButton,
                                    formData.height_unit === item.unit && inputStyles.selectedButton
                                ]}                    
                                onPress={() => updateFormData('height_unit', item.unit)}
                            >
                                <Text style={inputStyles.unitText}>{item.unit}</Text>
                            </TouchableOpacity>
                        )}
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
                            <TouchableOpacity style={buttonStyles.button} onPress={handleSubmit}>
                                <Link href={"/(app)"}>                                
                                    <Text style={textStyles.buttonText}>Submit</Text>                            
                                </Link>
                            </TouchableOpacity>
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