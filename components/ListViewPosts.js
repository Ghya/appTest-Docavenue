import React from 'react';
import {
 View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class ListViewPosts extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    const { item } = this.state;

    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default ListViewPosts;
