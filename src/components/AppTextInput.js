import React, {Component} from 'react';
import {Dimensions, TextInput} from 'react-native';
import {colors} from '../utils.js/colors';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class AppTextInput extends Component {
  render() {
    const {
      value,
      onChangeText,
      secureTextEntry,
      placeholder,
      placeholderTextColor,
      keyboardType,
      width,
    } = this.props;
    return (
      <TextInput
        style={{
          backgroundColor: '#F8F9FD',
          marginTop: (mobileW * 5.0) / 100,
          width: width,
          alignSelf: 'center',
          paddingVertical: (mobileW * 1.5) / 100,
          borderRadius: (mobileW * 0) / 100,
          borderColor: colors.grey,
          borderWidth: (mobileW * 0.3) / 100,
          fontSize: (mobileW * 4.0) / 100,
          paddingLeft: (mobileW * 2) / 100,
        }}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#B6B9BE'}
        maxLength={15}
        selectionColor={colors.black}
      />
    );
  }
}
