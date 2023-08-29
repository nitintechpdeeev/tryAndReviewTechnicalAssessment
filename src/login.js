import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import AppTextInput from './components/AppTextInput';
import AppPasswordTextInput from './components/AppPasswordTextInput';
import AppButton from './components/AppButton';
import SocialLoginButton from './components/SocialLoginButton';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      visible: true,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{height: (mobileH * 95) / 100, justifyContent: 'center'}}>
            <View style={styles.mainShadowBox}>
              <Text style={styles.loginHeading}>{'Login'}</Text>
              <AppTextInput
                width={(mobileW * 78) / 100}
                value={this.state.email}
                placeholder={'Email'}
                onChangeText={value => {
                  this.setState({email: value});
                }}
              />
              <AppPasswordTextInput
                eyePress={() => {
                  this.setState({visible: !this.state.visible});
                }}
                value={this.state.password}
                placeholder={'Password'}
                secureTextEntry={this.state.visible}
                onChangeText={value => {
                  this.setState({password: value});
                }}
              />
              <Text onPress={() => {}} style={styles.forgotPasswordStyle}>
                {'Forgot Password?'}
              </Text>
              <AppButton
                width={(mobileW * 78) / 100}
                title={'Sign In'}
                onPress={() => {}}
              />
              <Text style={styles.orHeading}>{'-OR-'}</Text>
              <SocialLoginButton
                onPress={() => {}}
                image={require('./icons/facebook.png')}
                title={'Sign In Via Google'}
              />
              <SocialLoginButton
                onPress={() => {}}
                image={require('./icons/google.png')}
                title={'Sign In Via Facebook'}
              />
            </View>
            <View
              style={{
                width: (mobileW * 100) / 100,
                marginTop: (mobileW * 2) / 100,
              }}>
              <Text style={styles.accountTextStyle}>
                {'Do you have an account yet'}
                <Text onPress={() => {}} style={[styles.signupTextStyle]}>
                  {' Signup?'}
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.accountTextStyle}>
              {'2023 Try & Review All Rihts Reserved'}
            </Text>
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
  mainShadowBox: {
    width: (mobileW * 90) / 100,
    height: (mobileH * 60) / 100,
    borderRadius: (mobileW * 3) / 100,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
  loginHeading: {
    marginTop: (mobileW * 2) / 100,
    alignSelf: 'center',
    fontSize: (mobileW * 5.6) / 100,
    color: '#535F83',
    fontWeight: '800',
  },
  orHeading: {
    marginTop: (mobileW * 2.5) / 100,
    alignSelf: 'center',
    fontSize: (mobileW * 3.5) / 100,
    color: '#535F83',
    fontWeight: '800',
  },
  forgotPasswordStyle: {
    marginTop: (mobileW * 2.8) / 100,
    width: (mobileW * 78) / 100,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#F87D3E',
    fontSize: (mobileW * 4) / 100,
    fontWeight: '600',
  },
  accountTextStyle: {
    marginTop: (mobileW * 2.8) / 100,
    alignSelf: 'center',
    color: '#535F83',
    fontSize: (mobileW * 4) / 100,
    fontWeight: '600',
  },
  signupTextStyle: {
    color: '#F87D3E',
    fontSize: (mobileW * 4) / 100,
    fontWeight: '600',
  },
});
