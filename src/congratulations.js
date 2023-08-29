import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class congratulations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: mobileW,
            height: (mobileH * 60) / 100,
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={require('./icons/Star.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.congratulationsTextStyle}>
            {'Congratulations!'}
          </Text>
          <Text style={styles.headerTextStyle}>
            Did you know that you can view your record ofpoint transactions.
            Learn more here
          </Text>
          <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>{'Back to homepage'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAE9E1',
    justifyContent: 'center',
  },
  imageStyle: {
    alignSelf: 'center',
    width: (mobileW * 30) / 100,
    height: (mobileW * 30) / 100,
  },
  congratulationsTextStyle: {
    alignSelf: 'center',
    fontSize: (mobileW * 6.0) / 100,
    fontWeight: '700',
    color: '#334B71',
  },
  headerTextStyle: {
    width: (mobileW * 60) / 100,
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: (mobileW * 4.0) / 100,
    textAlign: 'center',
    color: '#334B71',
  },
  buttonStyle: {
    backgroundColor: '#233771',
    width: (mobileW * 70) / 100,
    paddingVertical: (mobileW * 3.5) / 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: (mobileW * 3.8) / 100,
    color: '#FFFFFF',
  },
});
