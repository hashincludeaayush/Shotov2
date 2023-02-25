import React from 'react';
import { Provider as RRProvider } from 'react-redux';
import store from './src/store';
import Screens from './src/screens';

const fonts = {
  "SFProDisplay-Bold": require("./fonts/SF-Pro-Display-Bold.ttf"),
  "SFProDisplay-Regular": require("./fonts/SF-Pro-Display-Regular.ttf"),
};
export default function App() {
	return (
		<RRProvider store={store}>
			<Screens />
		</RRProvider>
	);
}
