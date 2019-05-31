import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

/** Components import  */
import { Button } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { connect } from 'react-redux';

/** Redux Actions import */
import { postFetch, postsLoading } from '../redux/actions';

/**
 * Class HOME
 */

class Posts extends React.Component {
  static navigationOptions = {
    title: 'Postes',
  };

  static propTypes = {
    isLoading: PropTypes.bool,
    postFetch: PropTypes.func,
    posts: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.postFetch();
  }

  render() {
      console.log(this.props.posts);
    if (this.props.isLoading) {
        return (
          <View style={styles.loadContainer}>
            <ActivityIndicator size="large" />
          </View>
        );
    } return (
      <View style={styles.container}>
        <Button
          title="Postes"
          onPress={() => this.handleLoadMore()}
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const { isLoading, posts } = state.postReducer;
  return { isLoading, posts };
};

export default connect(
  mapStateToProps,
  { postFetch, postsLoading },
)(Posts);
