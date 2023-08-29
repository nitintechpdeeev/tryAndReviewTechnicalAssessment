import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from './utils.js/colors';
import AppTextInput from './components/AppTextInput';
const mobileW = Dimensions.get('window').width;

export default class Application2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
              <Text
                style={{fontSize: (mobileW * 4.5) / 100, fontWeight: '500'}}>
                Application
              </Text>
              <Text>Step1</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#EDF0F7',
              width: mobileW,
              // height: (mobileH * 70) / 100,
            }}>
            <View
              style={{
                marginTop: (mobileW * 5) / 100,
                backgroundColor: '#FFFFFF',
                width: mobileW,
                // height: (mobileH * 70) / 100,
                paddingHorizontal: (mobileW * 4.0) / 100,
                paddingVertical: (mobileW * 5) / 100,
              }}>
              <Text style={styles.questionsStyle}>
                How regularly do you use face masks?
              </Text>
              <View style={[styles.selectDropdownContainer]}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 4.0) / 100,
                      fontWeight: '500',
                    }}>
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
                Why do you use face masks?
              </Text>
              <View style={[styles.selectDropdownContainer]}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 4.0) / 100,
                      fontWeight: '500',
                    }}>
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
                What is the most important function of a face mask for you?
              </Text>

              <View style={{width: mobileW}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Nourisihing
                    </Text>
                  </View>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Mosturizing
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Anti-fotigue
                    </Text>
                  </View>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Energizing
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Toning
                    </Text>
                  </View>
                  <View
                    style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                    <Image
                      source={require('./icons/unchecked.png')}
                      style={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: (mobileW * 3.8) / 100,
                      }}>
                      Revitalizing
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                  <Image
                    source={require('./icons/unchecked.png')}
                    style={{
                      width: (mobileW * 6) / 100,
                      height: (mobileW * 6) / 100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: (mobileW * 3.8) / 100,
                    }}>
                    Relaxing
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', width: (mobileW * 50) / 100}}>
                  <Image
                    source={require('./icons/unchecked.png')}
                    style={{
                      width: (mobileW * 6) / 100,
                      height: (mobileW * 6) / 100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: (mobileW * 3.8) / 100,
                    }}>
                    Refreshing
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.questionsStyle,
                  {marginTop: (mobileW * 5.0) / 100},
                ]}>
                How much would you spend on a face mask?
              </Text>
              <View style={[styles.selectDropdownContainer]}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 4.0) / 100,
                      fontWeight: '500',
                    }}>
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
                What's your favourite brand of nuts?
              </Text>
              <AppTextInput
                width={(mobileW * 90) / 100}
                placeholder={'Enter Value'}
              />

              <Text
                style={[
                  styles.questionsStyle,
                  {marginTop: (mobileW * 5.0) / 100},
                ]}>
                What's your favorite swim diaper brand?
              </Text>
              <AppTextInput
                width={(mobileW * 90) / 100}
                placeholder={'Enter Number'}
              />
            </View>
          </View>
        </ScrollView>
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
