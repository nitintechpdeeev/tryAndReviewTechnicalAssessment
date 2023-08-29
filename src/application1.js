import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from './utils.js/colors';
import AppButton from './components/AppButton';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class Application1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              width: (mobileW * 10) / 100,
              height: (mobileW * 10) / 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {}}>
            <Image
              resizeMode="contain"
              source={require('./icons/search.png')}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topBarStyle}>
          <View style={styles.firstColumn}>
            <TouchableOpacity
              style={{
                marginTop: (mobileW * 2.5) / 100,
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
              }}>
              <Image
                source={require('./icons/back.png')}
                style={{
                  marginLeft: (mobileW * 2.0) / 100,
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondColumn}>
            <Text style={{fontSize: (mobileW * 4.5) / 100, fontWeight: '500'}}>
              Application
            </Text>
            <Text>Step1</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#EDF0F7',
            width: mobileW,
            height: mobileH * 70,
          }}>
          <View
            style={{
              marginTop: (mobileW * 5) / 100,
              backgroundColor: '#FFFFFF',
              width: mobileW,
              height: (mobileH * 32) / 100,
              paddingHorizontal: (mobileW * 4.0) / 100,
              paddingVertical: (mobileW * 5) / 100,
            }}>
            <Text style={styles.questionsStyle}>
              What is your current occupation status?
            </Text>
            <View style={[styles.selectDropdownContainer]}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{fontSize: (mobileW * 4.0) / 100, fontWeight: '500'}}>
                  Select Item
                </Text>
                <Image
                  source={require('./icons/down-arrow.png')}
                  style={{
                    resizeMode: 'contain',
                    width: (mobileW * 5.0) / 100,
                    height: (mobileW * 5.0) / 100,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.questionsStyle,
                {marginTop: (mobileW * 5.0) / 100},
              ]}>
                Do you buy your groceries online?
            </Text>
            <View style={[styles.selectDropdownContainer]}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{fontSize: (mobileW * 4.0) / 100, fontWeight: '500'}}>
                  Select Item
                </Text>
                <Image
                  source={require('./icons/down-arrow.png')}
                  style={{
                    resizeMode: 'contain',
                    width: (mobileW * 5.0) / 100,
                    height: (mobileW * 5.0) / 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <AppButton
            width={(mobileW * 92) / 100}
            title={'Next'}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerStyle: {
    paddingHorizontal: (mobileW * 2) / 100,
    window: mobileW,
    height: (mobileW * 14) / 100,
    backgroundColor: '#CDE8E3',
    justifyContent: 'center',
  },
  topBarStyle: {
    width: mobileW,
    flexDirection: 'row',
    paddingHorizontal: (mobileW * 2) / 100,
    paddingVertical: (mobileW * 4.0) / 100,
  },
  firstColumn: {
    width: (mobileW * 15) / 100,
  },
  secondColumn: {
    alignItems: 'center',
    width: (mobileW * 70) / 100,
  },
  questionsStyle: {
    color: '#676C7E',
    fontSize: (mobileW * 4.5) / 100,
    fontWeight: '600',
  },
  selectDropdownContainer: {
    marginTop: (mobileW * 3.0) / 100,
    width: (mobileW * 92) / 100,
    height: (mobileW * 10) / 100,
    justifyContent: 'center',
    borderColor: colors.grey,
    borderWidth: (mobileW * 0.3) / 100,
    paddingHorizontal: (mobileW * 2.0) / 100,
  },
});
