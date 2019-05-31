import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
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

  /**
   * Handle navigation to page Posts
   */
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
        <ImageBackground
          source={require('../assets/images/back_img.png')}
          style={styles.img}
        >
          <View style={styles.wrapper}>
            <Text style={styles.title}>Application test</Text>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.subtitle}>Jean-Aurel Bousquet</Text>
          </View>
          <View style={styles.wrapper}>
            <Button
              title="Postes"
              onPress={() => this.handleGotoPosts()}
              iconRight
              icon={
                <Icon style={{ marginLeft: 15 }} name="keyboard-arrow-right" size={20} color="white" />
              }
              buttonStyle={styles.addBtn}
              TouchableComponent={TouchableOpacity}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    borderRadius: 20,
    backgroundColor: '#9900ff',
    paddingHorizontal: 50,
  },
  img: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  logo: {
    width: '80%',
    height: 50,
    marginBottom: 50,
  },
});

export default Home;
