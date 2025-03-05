import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ModalProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean; // New prop to control visibility
}

const Modal: React.FC<ModalProps> = ({ message, type, isVisible }) => {
    const [visible, setVisible] = React.useState(isVisible);

    useEffect(() => {
        setVisible(isVisible); // Update visibility based on isVisible prop
        if (isVisible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000); // Close the modal after 3 seconds

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [isVisible]); // Dependency on isVisible

    if (!visible) return null; // Render nothing if not visible

    return (
        <View style={[styles.modalContainer, type === 'success' ? styles.success : styles.error]}>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 16,
        alignItems: 'center',
        zIndex: 1000,
        borderRadius: 6,
    },
    success: {
        backgroundColor: '#DBD6C9',
        borderColor: '#DBD6C9',
    },
    error: {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
    },
    message: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default Modal;
