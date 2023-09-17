import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import BackButtonContainer from '../../components/BackButtonContainer';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {GraphIcon} from '../../assets/SVG_Icons';
import LinearGradient from 'react-native-linear-gradient';

const StatsOverview = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BackButtonContainer style={{position: 'absolute', left: 0}} />
          <Text style={styles.subtitle}>Stats & Overview</Text>
        </View>

        <Text style={{...styles.paragraph, textAlign: 'center'}}>
          You have reached <Text style={{color: colors.green}}> +138% </Text>{' '}
          more wiki account compared to aug 01 - aug 20
        </Text>
        {/* Monthly overview */}
        <View style={{gap: verticalScale(15)}}>
          <View style={styles.hrLine} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Monthly Overview</Text>
            <View style={{flexDirection: 'row', gap: scale(10)}}>
              <View
                style={{
                  width: moderateScale(19),
                  height: moderateScale(19),
                  borderRadius: moderateScale(4),
                  backgroundColor: colors.pink,
                }}
              />
              <View
                style={{
                  width: moderateScale(19),
                  height: moderateScale(19),
                  borderRadius: moderateScale(4),
                  backgroundColor: '#3028E2',
                }}
              />
            </View>
          </View>
          <View style={styles.hrLine} />
        </View>
        {/* Graph */}
        <View style={{gap: verticalScale(40)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.subtitle}>Jan</Text>
            <Text style={styles.subtitle}>Fab</Text>
            <Text style={styles.subtitle}>March</Text>
            <LinearGradient
              style={styles.aprilContainer}
              locations={[0, 1]}
              colors={['rgba(19, 19, 146, 0.3)', 'rgba(163, 16, 192, 0.3)']}
              useAngle={true}
              angle={19.95}>
              <Text style={styles.subtitle}>April</Text>
            </LinearGradient>
            <Text style={styles.subtitle}>May</Text>
            <Text style={styles.subtitle}>Jun</Text>
            <Text style={styles.subtitle}>July</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: scale(9),
              alignItems: 'flex-end',
            }}>
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(134),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(68),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
            <View>
              <Text style={styles.subtitle}>12.2k</Text>
              <LinearGradient
                style={{
                  ...styles.rectangleLineargradient,
                  height: verticalScale(173),
                }}
                locations={[0, 1]}
                colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
                useAngle={true}
                angle={180}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>7.3k</Text>
              <LinearGradient
                style={{
                  ...styles.rectangleLineargradient,
                  height: verticalScale(90),
                }}
                locations={[0, 1]}
                colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
                useAngle={true}
                angle={180}
              />
            </View>
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(69),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(122),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(134),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
            <LinearGradient
              style={{
                ...styles.rectangleLineargradient,
                height: verticalScale(68),
              }}
              locations={[0, 1]}
              colors={['#5656e7', 'rgba(221, 49, 255, 0)']}
              useAngle={true}
              angle={180}
            />
          </View>
        </View>
        {/* Profile Stats */}
        <View style={{gap: verticalScale(20)}}>
          <Text style={styles.title}>Profile Stats</Text>
          <View style={styles.justifyBetween}>
            <View
              style={{
                backgroundColor: colors.blue,
                padding: moderateScale(12),
                borderRadius: moderateScale(40),
              }}>
              <Text style={styles.subtitle}>38</Text>
            </View>
            <Text style={styles.subtitle}>Card Tapped</Text>
            <View>
              <GraphIcon />
            </View>
          </View>
          <View style={styles.justifyBetween}>
            <View
              style={{
                backgroundColor: colors.blue,
                padding: moderateScale(12),
                borderRadius: moderateScale(40),
              }}>
              <Text style={styles.subtitle}>02</Text>
            </View>
            <Text style={styles.subtitle}>Link Tapped</Text>
            <View>
              <GraphIcon />
            </View>
          </View>
          <View style={styles.justifyBetween}>
            <View
              style={{
                backgroundColor: colors.blue,
                padding: moderateScale(12),
                borderRadius: moderateScale(40),
              }}>
              <Text style={styles.subtitle}>24</Text>
            </View>
            <Text style={styles.subtitle}>Appointments</Text>
            <View>
              <GraphIcon />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: verticalScale(25),
    paddingHorizontal: scale(20),
    gap: verticalScale(25),
  },
  title: {
    fontSize: moderateScale(18),
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
  hrLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.blue,
  },
  justifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#343434',
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(9),
    borderRadius: moderateScale(10),
  },
  rectangleLineargradient: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: verticalScale(122),
    backgroundColor: 'transparent',
    width: scale(34),
  },
  aprilContainer: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(4),
  },
});
export default StatsOverview;
