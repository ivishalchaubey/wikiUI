import {View, Text} from 'react-native';
import React from 'react';
import colors from '../../style/colors';

const Products = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, color: colors.white}}>Products</Text>
    </View>
  );
};

export default Products;
