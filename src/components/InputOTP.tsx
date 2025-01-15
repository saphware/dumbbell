import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface InputOTPProps {
  length?: number;
  onComplete?: (value: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
}

export const InputOTP: React.FC<InputOTPProps> = ({
  length = 6,
  onComplete,
  placeholder = '○',
  containerStyle,
  inputStyle,
  keyboardType = 'number-pad',
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (otp.every((digit) => digit !== '')) {
      onComplete?.(otp.join(''));
    }
  }, [otp, onComplete]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {otp.map((_, index) => (
        <TextInput
          key={index}
          style={[styles.input, inputStyle]}
          value={otp[index]}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          keyboardType={keyboardType}
          maxLength={1}
          ref={(ref) => {
            if (ref) inputRefs.current[index] = ref;
          }}
          placeholder={placeholder}
          placeholderTextColor="#CCCCCC"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 4,
  },
  otpContainer: {
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: '#FFFFFF',
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  enteredOTP: {
    fontSize: 18,
    color: '#666666',
  },
});