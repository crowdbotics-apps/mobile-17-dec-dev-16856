import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015861Navigator from '../features/BlankScreen015861/navigator';
import BlankScreen015860Navigator from '../features/BlankScreen015860/navigator';
import BlankScreen015855Navigator from '../features/BlankScreen015855/navigator';
import BlankScreen015843Navigator from '../features/BlankScreen015843/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015861: { screen: BlankScreen015861Navigator },
BlankScreen015860: { screen: BlankScreen015860Navigator },
BlankScreen015855: { screen: BlankScreen015855Navigator },
BlankScreen015843: { screen: BlankScreen015843Navigator },

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
