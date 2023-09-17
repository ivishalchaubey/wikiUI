import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {ArrowLeftFullIcon} from '../../assets/SVG_Icons';

const BackButtonContainer = ({style}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        ...style,
        backgroundColor: '#262626',
        padding: moderateScale(12),
        borderRadius: moderateScale(40),
      }}
      onPress={() => navigation.goBack()}>
      <ArrowLeftFullIcon />
    </TouchableOpacity>
  );
};

export default BackButtonContainer;
