
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroComponent from './components/screens/CadastroComponent';
import RegistroComponent from './components/screens/RegistroComponent'
import Jobs from './components/screens/Jobs'
import ForgotPassword from './components/screens/ForgotPassword'
import { RootStackParamList } from './components/types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='CadastroComponent'>
        <Stack.Screen
          name="CadastroComponent"
          component={CadastroComponent}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="RegistroComponent"
          component={RegistroComponent}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
