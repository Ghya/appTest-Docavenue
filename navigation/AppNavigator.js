import { createStackNavigator, createAppContainer } from 'react-navigation';

/**
 * Screens imports
 */
import Home from '../screens/Home';

/**
 * Navigator made with React-navigation
 */
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
