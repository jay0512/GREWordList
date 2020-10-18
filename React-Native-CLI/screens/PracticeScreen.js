import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import Swiper from 'react-native-swiper'

const url = "https://gre-word-list-101.herokuapp.com/words";

export default class PracticeComponent extends React.Component {

  state = {
    wordList: []
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        const wordList = res.data;
        this.setState({ wordList });
      }).catch(error => console.log(error));
  }

  render() {

    const { wordList } = this.state;

    var wordView = [];
    var i = 0;
    wordList.forEach(word => {
      if ((i % 3) == 0) {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide1}>
            <Text style={styles.text}>{word['Word']}</Text>
          </View>
        );
      }
      else if ((i % 3) == 1) {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide2}>
            <Text style={styles.text}>{word['Word']}</Text>
          </View>
        );
      }
      else {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide3}>
            <Text style={styles.text}>{word['Word']}</Text>
          </View>
        );
      }
      i++;
    });

    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={true}>
        {wordView}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    margin: 16,
    fontWeight: 'bold',
  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }

});
