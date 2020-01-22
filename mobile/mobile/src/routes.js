import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';
import Main from './pages/Main';
import Profile from './pages/Profile';


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
                title:'Dossie'
            }
        },
    }, {
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
               backgroundColor: '#7D40E7'
           }
        },
    })
);

export default Routes;