import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

/** Components import  */
import { Button } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

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

  handleGotoPosts= () => {
    this.props.navigation.navigate('Posts');
  }

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
        <Button
          title="Postes"
          onPress={() => this.handleGotoPosts()}
          iconRight
          icon={
            <Icon style={{ marginLeft: 15 }} name="add-circle" size={25} color="white" />
              }
          buttonStyle={styles.addBtn}
          TouchableComponent={TouchableOpacity}
        />
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
