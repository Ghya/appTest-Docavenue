import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  NetInfo,
  Alert,
} from 'react-native';

/** Components import  */
import { Button } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { connect } from 'react-redux';
import ListViewPosts from '../components/ListViewPosts';

/** Redux Actions import */
import { postFetch, postsLoading } from '../redux/actions';

/**
 * Class HOME
 */

class Posts extends React.Component {
  static navigationOptions = {
    title: 'Postes',
    headerStyle: {
      backgroundColor: '#9900ff',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
  };

  static propTypes = {
    isLoading: PropTypes.bool,
    postFetch: PropTypes.func,
    postsLoading: PropTypes.func,
    posts: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 10,
    };
  }

  /**
   *  - Initialize loading component then,
   *  - Check Internet connection
   *  - Fetch post
   *
   * (End of loading handle by fetch method)
   */
  componentDidMount = () => {
    this.props.postsLoading(true);
    const connectionType = this.getConnectionType();
    if (connectionType === 'none') {
      Alert.alert('Aucune connexion internet détéctée \n\n Posts chargés en local');
      this.props.postsLoading(false);
    } else {
      this.props.postFetch();
    }
  }

  getConnectionType = () => {
    NetInfo.getConnectionInfo().then(connectionInfo => connectionInfo.type);
  }

  /**
   * Increase 'max' state for pagination
   */
  handleLoadMore = () => {
    const { max } = this.state;
    this.setState({
      max: max + 10,
    });
  }

  render() {
    const { min, max } = this.state;
    const listData = this.props.posts.slice(min, max);
      console.log(listData);
    if (this.props.isLoading) {
        return (
          <View style={styles.loadContainer}>
            <ActivityIndicator size="large" />
          </View>
        );
    } return (
      <View style={styles.container}>
        <FlatList
          data={listData}
          extraData={this.state.max}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListViewPosts item={item} />
          )}
          ListFooterComponent={() => (
            <Button
              title="Afficher plus"
              onPress={() => this.handleLoadMore()}
              disabled={this.state.max === 50}
              iconRight
              icon={
                <Icon style={{ marginLeft: 15 }} name="keyboard-arrow-down" size={25} color="white" />
              }
              buttonStyle={styles.addBtn}
              TouchableComponent={TouchableOpacity}
            />
          )}
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
  addBtn: {
    borderRadius: 20,
    backgroundColor: '#9900ff',
    paddingHorizontal: 50,
    width: '70%',
    marginVertical: 20,
    alignSelf: 'center',
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
