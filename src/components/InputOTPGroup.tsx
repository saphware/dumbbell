import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface InputOTPGroupProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const InputOTPGroup: React.FC<InputOTPGroupProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


{/* <InputOTP
length={6}
onComplete={handleComplete}
containerStyle={styles.otpContainer}
inputStyle={styles.otpInput}
/> */}