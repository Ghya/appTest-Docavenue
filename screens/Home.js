import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Class HOME
 */
class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  /**
   * handle navigation to page : POSTS
   */
  handleGotoPosts= () => {
    this.props.navigation.navigate('Posts');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Page home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default Home;
