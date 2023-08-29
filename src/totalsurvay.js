import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import {colors} from './utils.js/colors';

const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;
export default class Totalsurvay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyList: [],
      loader: false,
    };
  }
  componentDidMount() {
    this.setState({loader: true});
    const url =
      'https://www.tryandreview.com/api/saas/surveyssurvey/641b4cf860bce';
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        console.log('json', json);
        this.setState({surveyList: json});
      })
      .catch(error => console.error(error))
      .finally(() => this.setState({loader: false}));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: (mobileW * 3.0) / 100,
            alignSelf: 'center',
            color: '#273367',
            fontSize: (mobileW * 15.0) / 100,
          }}>
          26
        </Text>
        <Text
          style={{
            width: (mobileW * 75) / 100,
            fontSize: (mobileW * 3.0) / 100,
            color: '#273367',
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          Surveys can be used for a variaty of purpouse which as market
          reaserch. Public option service reasearch program education
        </Text>

        <FlatList
          contentContainerStyle={{paddingVertical: (mobileW * 2) / 100}}
          data={this.state.surveyList}
          renderItem={({item}) => (
            <View style={{alignSelf: 'center', marginTop: (mobileW * 3) / 100}}>
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileW * 25) / 100,
                }}
                source={require('./icons/ic_card.png')}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingRight: (mobileW * 12) / 100,
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 4.5) / 100,
                      fontWeight: '500',
                      marginTop: (mobileW * 7) / 100,
                    }}>
                    {'  ' + item.id}
                  </Text>
                  <Text
                    style={{
                      fontSize: (mobileW * 4.5) / 100,
                      fontWeight: '500',
                      marginTop: (mobileW * 0) / 100,
                    }}>
                    {'Pts'}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
