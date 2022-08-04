import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import ShuffleCard from './ShuffleCard'
import { Root } from 'native-base';
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

class App extends React.Component {
	state = {
		assetsLoaded: false,
		id: '',
		status: ''
	};

	async componentDidMount() {
		await Font.loadAsync({
      'font-cblack': require('./assets/fonts/CeraPro-Black.ttf'),
			'font-cbold': require('./assets/fonts/CeraPro-Bold.ttf'),
			'font-clight': require('./assets/fonts/CeraPro-Light.ttf'),
			'font-cregular': require('./assets/fonts/CeraPro-Regular.ttf'),
			'font-cmedium': require('./assets/fonts/CeraPro-Medium.ttf')
		});
		this.setState({ assetsLoaded: true });
	}

	render() {
		StatusBar.setBarStyle('light', true);
		// StatusBar.setBackgroundColor('#FFF');
		const { assetsLoaded } = this.state;
		if (assetsLoaded) {
			return (
				<Root>
					<NavigationContainer>
						<Stack.Navigator
							headerMode="none"
							mode="card"
						>
							<Stack.Screen name="ShuffleCard" component={ShuffleCard} />
						</Stack.Navigator>
					</NavigationContainer>
				</Root>
			);
		} else {
			return <View />;
		}
	}
}

export default App;
