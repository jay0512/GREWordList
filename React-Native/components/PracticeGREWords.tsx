import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import words from '../assets/words.json';

import Swiper from 'react-native-swiper'
import axios from 'axios';

const styles = StyleSheet.create({
  wrapper: {},
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
})

const url = "http://192.168.43.75:3000/words";
export default class PracticeGREWordsComponent extends Component {

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

    var wordView: any = [];
    var i: number = 0;
    wordList.forEach(word => {
      // words['words'].forEach(word => {
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
      <Swiper style={styles.wrapper} showsButtons={true}>
        {wordView}
      </Swiper>
    )
  }
}



AppRegistry.registerComponent('GREWordList', () => PracticeGREWordsComponent)