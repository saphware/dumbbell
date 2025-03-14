"use client"

import { buttonStyles } from "@/style/buttonStyles"
import { colors, commonStyles } from "@/style/commonStyles"
import { textStyles } from "@/style/textStyles"
import { useState } from "react"
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions, SafeAreaView } from "react-native"
// import { ChevronDown, Check } from "lucide-react-native"

const { width } = Dimensions.get("window")

type DropdownOption = {
    label: string
    value: string
}

type DropdownSelectProps = {
    options: DropdownOption[]
    selectedValue?: string
    onValueChange: (value: string) => void
    placeholder?: string
    disabled?: boolean
}

export const DropdownSelect = ({
    options,
    selectedValue,
    onValueChange,
    placeholder = "Select an option",
    disabled = false,
}: DropdownSelectProps) => {
    const [modalVisible, setModalVisible] = useState(false)

    const selectedOption = options.find((option) => option.value === selectedValue)

    const openDropdown = () => {
        if (!disabled) {
            setModalVisible(true)
        }
    }

    const closeDropdown = () => {
        setModalVisible(false)
    }

    const selectOption = (value: string) => {
        onValueChange(value)
        closeDropdown()
        console.log("selected")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[buttonStyles.buttonBorder, disabled && styles.disabledButton]}
                onPress={openDropdown}
                disabled={disabled}
            >
                <Text style={[textStyles.titleSm, !selectedValue && styles.placeholderText]}>
                    {selectedOption ? selectedOption.label : placeholder}
                </Text>
                {/* <ChevronDown size={20} color="#666" /> */}
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeDropdown}>
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={closeDropdown}>
                    <SafeAreaView style={styles.modalContainer}>
                        <View style={styles.optionsContainer}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={buttonStyles.buttonBorder} onPress={() => selectOption(item.value)}>
                                        <Text style={textStyles.buttonText}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </SafeAreaView>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    disabledButton: {
        backgroundColor: "#f5f5f5",
        borderColor: "#eee",
    },
    selectedValueText: {
        fontSize: 16,
        color: "#333",
    },
    placeholderText: {
        color: "#999",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    optionsContainer: {
        width: width * 0.8,
        maxHeight: 300,
        backgroundColor: colors.sg2,
        borderRadius: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    }
})

