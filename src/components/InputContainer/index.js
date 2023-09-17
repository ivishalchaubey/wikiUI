import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const InputContainer = ({
  icon,
  rightIcon,
  placeholder = 'Find near By You',
}) => {
  return (
    <View style={styles.container}>
      {icon && icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        style={styles.textInput}
      />
      {rightIcon && rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(15),
    borderWidth: 1,
    borderColor: colors.blue,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(10),
  },
  textInput: {
    width: '80%',
  },
});
export default InputContainer;
