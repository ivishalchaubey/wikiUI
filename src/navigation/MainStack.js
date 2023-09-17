import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString';
import {
  Login,
  MyAppointments,
  PointCollected,
  QRScreen,
  SplashScreen,
  StatsOverview,
} from '../screens';
import TabNavigation from './TabNavigation';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationString.SPLASH_SCREEN}
        component={SplashScreen}
      />
      <Stack.Screen name={navigationString.LOIN} component={Login} />
      <Stack.Screen
        name={navigationString.TAB_NAVIGATION}
        component={TabNavigation}
      />
      <Stack.Screen
        name={navigationString.MY_APPOINTMENTS}
        component={MyAppointments}
      />
      <Stack.Screen name={navigationString.QR_SCEEN} component={QRScreen} />
      <Stack.Screen
        name={navigationString.POINT_COLLECTED}
        component={PointCollected}
      />
      <Stack.Screen
        name={navigationString.STATS_OVERVIEW}
        component={StatsOverview}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
