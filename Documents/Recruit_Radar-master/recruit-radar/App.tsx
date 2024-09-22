
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/screens/SplashScreen';
import RegistroComponent from './components/screens/RegistroComponent';
import Jobs from './components/screens/Jobs';
import ForgotPassword from './components/screens/ForgotPassword';
import cadastroEmail from './components/screens/cadastro_steps/cadastroEmail';
import cadastroSenha from './components/screens/cadastro_steps/cadastroSenha';
import cadastroCEP from './components/screens/cadastro_steps/cadastroCEP';
import cadastroCPF from './components/screens/cadastro_steps/cadastroCPF';
import cadastroGender from './components/screens/cadastro_steps/cadastroGender';
import CadastroEmprego from './components/screens/cadastro_steps/CadastroEmprego';
import CadastroCargo from './components/screens/cadastro_steps/CadastroCargo';
import CadastroFoto from './components/screens/cadastro_steps/CadastroFoto';
import DadosPessoais from './components/screens/componentTabBar/DadosPessoais';
import MinhasCandidaturas from './components/screens/componentsScreen/MinhasCandidaturas';
import { RootStackParamList } from './components/types';



const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
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
        <Stack.Screen
          name="cadastroEmail"
          component={cadastroEmail}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="cadastroSenha"
          component={cadastroSenha}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="cadastroCEP"
          component={cadastroCEP}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="cadastroCPF"
          component={cadastroCPF}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="cadastroGender"
          component={cadastroGender}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="CadastroEmprego"
          component={CadastroEmprego}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="CadastroCargo"
          component={CadastroCargo}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="CadastroFoto"
          component={CadastroFoto}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="DadosPessoais"
          component={DadosPessoais}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="MinhasCandidaturas"
          component={MinhasCandidaturas}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
