import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {LeftArrowIcon} from '../../assets/SVG_Icons';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const LongButton = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={{flexDirection: 'row', gap: scale(12)}}>
        {icon && icon}
        <Text style={styles.text}>{text}</Text>
      </View>
      <LeftArrowIcon />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: colors.blue,
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(20),
  },
  text: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
export default LongButton;
