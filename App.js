import React from 'react';
import {
 Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import {
 AppLoading, Asset, Font, Icon,
} from 'expo';

/** Redux */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';

/** Router */
import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/splash.png'),
      require('./assets/images/avatar.jpg'),
      require('./assets/images/back_img.png'),
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

handleLoadingError = (error) => {
  console.warn(error);
};

handleFinishLoading = () => {
  this.setState({ isLoadingComplete: true });
};

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </Provider>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
