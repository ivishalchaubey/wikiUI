import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BackButtonContainer from '../../components/BackButtonContainer';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../constants/imagePath';
import {ImageComp} from '../../components';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CopyIcon,
  DotIcon,
  GiftIcon,
} from '../../assets/SVG_Icons';

const PointCollected = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={{backgroundColor: '#080808', gap: verticalScale(25)}}>
          <View style={styles.justifyBetween}>
            <BackButtonContainer />
            <Text style={styles.subtitle}>Points Collected</Text>
            <Text
              style={{
                ...styles.paragraph,
                borderBottomColor: colors.white,
                borderBottomWidth: 1,
              }}>
              Help
            </Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Welcome to</Text>
            <Text style={styles.title}>WiKi Rewards</Text>
          </View>
        </View>
        {/* coin container */}
        <LinearGradient
          locations={[0, 1]}
          colors={['rgba(19, 19, 146, 0.5)', 'rgba(163, 16, 192, 0.5)']}
          useAngle={true}
          style={{borderRadius: moderateScale(10)}}
          angle={19.95}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: verticalScale(15),
              paddingVertical: verticalScale(20),
            }}>
            <Text style={styles.subtitle}>Total Earning:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: scale(10),
                backgroundColor: 'rgba(255,255,255,0.6)',
                paddingVertical: verticalScale(2),
                paddingHorizontal: scale(17),
                borderRadius: moderateScale(20),
              }}>
              <ImageComp image={imagePath.coinImage} width={16} height={16} />
              <Text style={styles.subtitle}>250 Coins</Text>
            </View>
          </View>
        </LinearGradient>
        {/* Button */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: colors.white,
            paddingVertical: verticalScale(15),
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: moderateScale(10),
          }}>
          <GiftIcon />
          <Text style={{...styles.subtitle, color: colors.blue}}>
            Redeem Points
          </Text>
        </TouchableOpacity>
        {/* Reffer container */}
        <View style={styles.reffrContainer}>
          <View style={styles.justifyBetween}>
            <Text style={styles.subtitle}>Refer your friends</Text>
            <ArrowRightIcon />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: scale(6)}}>
            <DotIcon />
            <Text style={styles.paragraph}>You get 25 pts (Coins)</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: scale(6)}}>
            <DotIcon />
            <Text style={styles.paragraph}>They get also 25 pts (Coins)</Text>
          </View>
          <View style={styles.urlContainer}>
            <Text style={styles.paragraph}>
              https://wikireferral203/yashasvido...
            </Text>
            <CopyIcon />
          </View>
        </View>
        {/* Frequently Asked Questions */}
        <View style={styles.faqContainer}>
          <Text style={styles.subtitle}>Frequently Asked Questions</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.paragraph}>How to Redeem Coins</Text>
            <ArrowDownIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.paragraph}>How to Redeem Coins</Text>
            <ArrowDownIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: scale(15),
    gap: verticalScale(22),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: colors.white,
  },
  subtitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: colors.white,
  },
  paragraph: {
    fontSize: moderateScale(12),
    color: colors.white,
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  urlContainer: {
    backgroundColor: '#343434',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: scale(27),
    paddingVertical: verticalScale(19),
    borderWidth: 1,
    borderColor: colors.blue2,
    borderRadius: moderateScale(10),
  },
  reffrContainer: {
    backgroundColor: 'rgba(38, 38, 38, 0.60)',
    paddingHorizontal: scale(27),
    paddingVertical: verticalScale(23),
    borderRadius: moderateScale(10),
    gap: verticalScale(14),
  },
  faqContainer: {
    gap: verticalScale(22),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(18),
    borderWidth: 1,
    borderColor: 'rgba(38, 38, 38, 0.60)',
    borderRadius: moderateScale(10),
  },
});
export default PointCollected;
