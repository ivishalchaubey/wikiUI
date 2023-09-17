import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {ArrowLeftFullIcon, CopyIcon, QR_BigIcon} from '../../assets/SVG_Icons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ImageComp} from '../../components';
import imagePath from '../../constants/imagePath';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import BackButtonContainer from '../../components/BackButtonContainer';

const QRScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        gap: scale(30),
      }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={{...styles.justifyBetween, justifyContent: 'center'}}>
          <BackButtonContainer style={{position: 'absolute', left: 0}} />
          <Text style={styles.title}>QR Code</Text>
          <View />
        </View>
        {/* QR Code */}
        <View>
          <View style={styles.qrContainer}>
            <LinearGradient
              colors={[colors.blue2, colors.pink2]}
              style={{
                borderRadius: moderateScale(60),
                justifyContent: 'center',
                alignItems: 'center',
                top: verticalScale(-25),
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.white,
                  borderRadius: moderateScale(60),
                }}>
                <ImageComp image={imagePath.userImage} width={78} height={78} />
              </View>
            </LinearGradient>
            <QR_BigIcon />
            <Text style={{...styles.title, fontSize: moderateScale(22)}}>
              Vishu Chaturvedi
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: verticalScale(10)}}>
            <Text style={styles.subtitle}>
              Tap to save QR code in your phone
            </Text>
          </View>
        </View>
        {/* Bottom Bar */}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.justifyBetween}>
          <View>
            <Text style={styles.subtitle}>Like to my Business Card</Text>
            <Text style={{...styles.subtitle, fontSize: moderateScale(14)}}>
              @ivishalchaubey
            </Text>
          </View>
          <CopyIcon />
        </View>
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0, 1]}
          colors={['#131392', '#a310c0']}
          useAngle={true}
          angle={19.95}>
          <TouchableOpacity>
            <Text style={styles.subtitle}>Share the Link</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: colors.white,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qrContainer: {
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
    paddingBottom: verticalScale(40),
  },
  subtitle: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: colors.white,
  },
  bottomContainer: {
    backgroundColor: '#262626',
    bottom: 0,
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(30),
    borderTopLeftRadius: moderateScale(28),
    borderTopRightRadius: moderateScale(28),
    gap: verticalScale(8),
  },
  rectangleLineargradient: {
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(7),
  },
});
export default QRScreen;
