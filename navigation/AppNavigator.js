import { createStackNavigator, createAppContainer } from 'react-navigation';

/**
 * Screens imports
 */
import Home from '../screens/Home';
import Posts from '../screens/Posts';

/**
 * Navigator made with React-navigation
 */
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Posts: {
    screen: Posts,
  },
});

export default createAppContainer(AppNavigator);
