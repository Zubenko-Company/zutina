import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { TestListViewConnected } from './src/components/tests/testList';
import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <View style={tw`w-full flex-col flex`}>
      <Text style={tw`self-center`}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TestListViewConnected />
    </View>
  </Provider>
);

export default App;
