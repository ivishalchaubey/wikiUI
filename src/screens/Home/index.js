import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {ImageComp, InputContainer, LongButton} from '../../components';
import imagePath from '../../constants/imagePath';
import {
  ClipboardIcon,
  CollabIcon,
  CopyIcon,
  GiftIcon,
  NotificationIcon,
  QRIcon,
  QR_ReaderIcon,
  SearchIcon,
  SettingIcon,
  ShareIcon,
} from '../../assets/SVG_Icons';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.subtitle}>Hello,</Text>
            <Text style={styles.title}>Vishu Chaturvedi</Text>
          </View>
          <ImageComp image={imagePath.userImage} width={52} height={52} />
        </View>
        {/* Search */}
        <InputContainer icon={<SearchIcon />} rightIcon={<SettingIcon />} />

        {/* icons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity>
            <ShareIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <NotificationIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <QRIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <CollabIcon />
          </TouchableOpacity>
        </View>

        {/* Total Earning Container */}
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0, 1]}
          colors={['rgba(19, 19, 146, 0.5)', 'rgba(163, 16, 192, 0.5)']}
          useAngle={true}
          angle={19.95}>
          <View style={{gap: verticalScale(10)}}>
            <Text style={styles.extraSubtitle}>Total Earning</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: scale(10),
                backgroundColor: 'rgba(255,255,255,0.6)',
                paddingVertical: verticalScale(2),
                paddingHorizontal: scale(7),
                borderRadius: moderateScale(20),
              }}>
              <ImageComp image={imagePath.coinImage} width={16} height={16} />
              <Text style={styles.title}>250</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: scale(10),
                backgroundColor: colors.white,
                paddingHorizontal: scale(16),
                paddingVertical: verticalScale(8),
                borderRadius: moderateScale(20),
              }}>
              <GiftIcon />
              <Text>Redeem</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/* Long Buttons */}
        <View style={{gap: verticalScale(16)}}>
          <LongButton icon={<ClipboardIcon />} text={'Check Appointments'} />
          <LongButton icon={<QR_ReaderIcon />} text={'Stats & Overview'} />
        </View>
        {/* Slider */}
        <View>
          <ImageComp image={imagePath.bannerImage} width={343} height={108} />
        </View>
        {/* Reffer link */}
        <View style={{gap: verticalScale(10)}}>
          <Text style={styles.extraSubtitle}>Refer this link</Text>
          <LinearGradient
            style={styles.rectangleLineargradient}
            locations={[0, 1]}
            colors={['#131392', '#a310c0']}
            useAngle={true}
            angle={19.95}>
            <Text style={styles.subtitle}>
              https://wikireferral203/yashasvidongre
            </Text>
            <CopyIcon />
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: colors.black,
    paddingTop: verticalScale(20),
  },
  container: {
    flex: 1,
    gap: verticalScale(30),
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(50),
  },
  title: {
    fontSize: moderateScale(22),
    color: colors.white,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: colors.white,
    fontWeight: '400',
  },
  extraSubtitle: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontWeight: '500',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rectangleLineargradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(23),
    paddingVertical: verticalScale(19),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
});
export default Home;
