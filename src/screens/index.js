import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Search, Playing, Home, Songs, Favourite, Recent, Playlists, Playlist, About } from './screens';
import { SCREENS } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import OnboardingScreen from './OnboardingScreen';
//import HomeScreen from './src/screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Index = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(true);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);
  return (isAppFirstLaunched != null && (
	<NavigationContainer>
	  <Stack.Navigator screenOptions={{headerShown: false}}>
		{isAppFirstLaunched && (
		  <Stack.Screen
			name="OnboardingScreen"
			component={OnboardingScreen}
		  />
		)}
		 <Stack.Screen name="HomeScreen" component={Home} />
		<Stack.Screen name={SCREENS.LOADING} component={Loading} />
		<Stack.Screen name={SCREENS.SEARCH} component={Search} />
		<Stack.Screen name={SCREENS.PLAYING} component={Playing} />
		<Stack.Screen name={SCREENS.HOME} component={Home} />
		<Stack.Screen name={SCREENS.SONGS} component={Songs} />
		<Stack.Screen name={SCREENS.FAVOURITE} component={Favourite} />
		<Stack.Screen name={SCREENS.RECENT} component={Recent} />
		<Stack.Screen name={SCREENS.PLAYLISTS} component={Playlists} />
		<Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} />
		<Stack.Screen name={SCREENS.ABOUT} component={About} />
	  </Stack.Navigator>
	</NavigationContainer>));
};

export default Index;
