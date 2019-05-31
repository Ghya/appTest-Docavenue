import React from 'react';
import {
 View, Text, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { EvilIcons as Icon } from '@expo/vector-icons';

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

  firstToUpperCase = string => (
    string.charAt(0).toUpperCase() + string.slice(1)
  );

  render() {
    const { item } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/avatar.jpg')}
            style={styles.img}
          />
          <Text style={styles.userTxt}>{`Utilisateur : ${item.userId}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{this.firstToUpperCase(item.title)}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.body}>{this.firstToUpperCase(item.body)}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.wrapper}>
            <Icon style={styles.icon} name="heart" size={25} color="purple" />
            <Text>J&apos;aime</Text>
          </View>
          <View style={styles.wrapper}>
            <Icon style={styles.icon} name="comment" size={25} color="purple" />
            <Text>Commenter</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#9900ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    borderColor: 'grey',
  },
  userTxt: {
    marginLeft: 20,
  },
  section: {
    padding: 10,
    paddingBottom: 20,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListViewPosts;
