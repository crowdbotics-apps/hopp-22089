import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps164638Navigator from '../features/Maps164638/navigator';
import Add-Item164637Navigator from '../features/Add-Item164637/navigator';
import Maps164633Navigator from '../features/Maps164633/navigator';
import UserProfile164629Navigator from '../features/UserProfile164629/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps164638: { screen: Maps164638Navigator },
Add-Item164637: { screen: Add-Item164637Navigator },
Maps164633: { screen: Maps164633Navigator },
UserProfile164629: { screen: UserProfile164629Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
