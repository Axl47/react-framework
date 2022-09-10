import React, { FunctionComponent } from 'react';

import Home from '../screens/Home';
import { colors } from '../components/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.jpeg';

export type RootStackParamList = {
	Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.graylight,
						borderBottomWidth: 0,
						shadowColor: "transparent",
						shadowOpacity: 0,
						elevation: 0,
						height: 120,
					},
					headerTintColor: colors.secondary,
					headerRightContainerStyle: {
						paddingRight: 25,
					},
					headerLeftContainerStyle: {
						paddingLeft: 10,
					},
					headerRight: () => (
						<Profile
							img={Avi}
							imgContainerStyle={{ backgroundColor: colors.tertiary }}
						/>
					),
				}}
				initialRouteName="Home"
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerTitle: (props) => (
							<Greeting
								mainText="Placeholder Text"
								subText="Idk what to write"
								{...props}
							/>
						),
						headerLeft: () => <></>,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;