import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import {
  ArrowDownIcon,
  EditIcon,
  EyeIcon,
  PauseIcon,
  PointCollectedIcon,
  QR_ReaderWhiteIcon,
  QR_White,
  ReferralIcon,
  SettingIcon,
  ShareWhiteIcon,
} from '../../assets/SVG_Icons';

import {ImageComp} from '../../components';
import imagePath from '../../constants/imagePath';
import colors from '../../style/colors';
import navigationString from '../../constants/navigationString';

const Profile = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(10),
      justifyContent: 'space-between',
      paddingBottom: verticalScale(20),
    },
    title: {
      fontSize: moderateScale(20),
      fontWeight: '600',
      color: colors.white,
    },
    subtitle: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      color: colors.white,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    paragraph: {
      fontSize: moderateScale(12),
      fontWeight: '300',
      color: colors.white,
    },
    hrLine: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      height: 2,
      width: '100%',
      marginTop: verticalScale(20),
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          ...styles.row,
          justifyContent: 'space-between',
          paddingTop: verticalScale(20),
        }}>
        <View style={styles.row}>
          <Text style={styles.title}>My Profile</Text>
          <ArrowDownIcon />
        </View>
        <SettingIcon />
      </View>

      {/* Profile Container */}
      <View
        style={{
          borderWidth: 1,
          borderColor: 'rgba(184, 184, 184, 0.28)',
          borderRadius: moderateScale(20),
          paddingHorizontal: scale(15),
          backgroundColor: 'rgba(38, 38, 38, 0.40)',
          paddingVertical: verticalScale(20),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            style={{
              ...styles.row,
              borderWidth: 1,
              borderColor: colors.white,
              paddingVertical: verticalScale(5),
              borderRadius: moderateScale(20),
              paddingHorizontal: scale(10),
            }}>
            <Text style={styles.paragraph}>View</Text>
            <EyeIcon />
          </TouchableOpacity>

          <LinearGradient
            colors={[colors.blue2, colors.pink2]}
            style={{
              borderRadius: moderateScale(60),
              justifyContent: 'center',
              alignItems: 'center',
              top: verticalScale(-47),
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.white,
                borderRadius: moderateScale(60),
              }}>
              <ImageComp image={imagePath.userImage} width={100} height={100} />
            </View>
          </LinearGradient>

          <TouchableOpacity
            style={{
              ...styles.row,
              borderWidth: 1,
              borderColor: colors.white,
              paddingVertical: verticalScale(5),
              borderRadius: moderateScale(20),
              paddingHorizontal: scale(10),
            }}>
            <Text style={styles.paragraph}>Share</Text>
            <ShareWhiteIcon />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View />
          <View>
            <Text style={styles.title}>Vishu Chaturvedi</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              padding: moderateScale(10),
              borderRadius: moderateScale(50),
            }}>
            <EditIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* Listing */}
      <View style={{gap: verticalScale(25)}}>
        {[
          {
            icon: <QR_ReaderWhiteIcon />,
            label: 'Stats & Overview',
            onPress: () => navigation.navigate(navigationString.STATS_OVERVIEW),
          },
          {
            icon: <QR_White />,
            label: 'QR Code',
            onPress: () => navigation.navigate(navigationString.QR_SCEEN),
          },
          {
            icon: <PointCollectedIcon />,
            label: 'Points Collected',
            onPress: () =>
              navigation.navigate(navigationString.POINT_COLLECTED),
          },
          {
            icon: <PauseIcon />,
            label: 'Pause Product',
            onPress: () => console.log('Hello'),
          },
          {
            icon: <ReferralIcon />,
            label: 'Referral',
            onPress: () => console.log('Hello'),
          },
        ].map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={item.onPress}
              style={{
                ...styles.row,
                paddingHorizontal: scale(10),
                gap: scale(20),
              }}>
              {item.icon}
              <Text style={styles.subtitle}>{item.label}</Text>
            </TouchableOpacity>
            {index < 4 && <View style={styles.hrLine} />}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Profile;
