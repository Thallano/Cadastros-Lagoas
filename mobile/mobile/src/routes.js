import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Cadastro from './pages/Cadastro';


const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title:'Lagoas do Norte'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions:{ 
                title: 'Dossie'
            }
        },
        Cadastro: {
            screen: Cadastro,
            navigationOptions:{ 
                title: 'Cadastro'
            }
        },
    }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
               backgroundColor: '#00AFEF'
           }
        },
    })
);

export default Routes;