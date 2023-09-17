import React, {useEffect} from 'react';
import imagePath from '../../constants/imagePath';
import {ImageComp} from '../../components';
import colors from '../../style/colors';
import {StatusBar, View} from 'react-native';
import navigationString from '../../constants/navigationString';

const SplashScreen = ({navigation}) => {
  StatusBar.setBackgroundColor(colors.black);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(navigationString.LOIN);
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
      }}>
      <ImageComp image={imagePath.logoImage} width={204} height={232} />
    </View>
  );
};

export default SplashScreen;
