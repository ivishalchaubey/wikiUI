import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {InputContainer} from '../../components';
import {EmailIcon, PasswordIcon, UserIcon} from '../../assets/SVG_Icons';
import LinearGradient from 'react-native-linear-gradient';
import navigationString from '../../constants/navigationString';

const Login = ({navigation}) => {
  return (
    <View style={styles.continer}>
      <View>
        <Text style={styles.title}>Log in to WiKi</Text>
        <View>
          <Text style={styles.subtitle}>Name</Text>
          <InputContainer icon={<UserIcon />} placeholder="Vishu Chaturvedi" />
        </View>
        <View>
          <Text style={styles.subtitle}>Email</Text>
          <InputContainer icon={<EmailIcon />} placeholder="Enter your email" />
        </View>
        <View>
          <Text style={styles.subtitle}>Password</Text>
          <InputContainer icon={<PasswordIcon />} placeholder="**********" />
        </View>
        <View>
          <Text style={styles.subtitle}>Phone</Text>
          <InputContainer
            icon={<UserIcon />}
            placeholder="Enter Your Phone No."
          />
        </View>
        <View>
          <Text style={styles.subtitle}>Referral Code</Text>
          <InputContainer placeholder="Have any referral code or link" />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace(navigationString.TAB_NAVIGATION)}
        style={{
          justifyContent: 'center',
          borderRadius: moderateScale(10),
          overflow: 'hidden',
        }}>
        <LinearGradient
          locations={[0, 1]}
          colors={['#131392', '#a310c0']}
          useAngle={true}
          angle={19.95}>
          <Text style={{...styles.subtitle, textAlign: 'center'}}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: scale(19),
    paddingTop: verticalScale(40),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(32),
    color: colors.white,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontWeight: '400',
    lineHeight: verticalScale(40),
  },
});
export default Login;
