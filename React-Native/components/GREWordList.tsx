import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import words from '../assets/words.json';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const url = "http://192.168.43.75:3000/words";

export default class GREWordListComponent extends Component {

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

      wordView.push(
        <View key={word['SrNo']} style={styles.getStartedContainer}>
          <Text
            style={styles.rootWordStyle}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {word['Word']}
          </Text>

          <Text
            style={styles.rootMeaningStyle}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {word['Meaning']}
          </Text>
        </View>
      );
    });

    return (
      <ScrollView>
        {wordView}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    width: '100%'
  },
  rootWordStyle: {
    fontSize: 17,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: 'left',
  },
  rootMeaningStyle: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
  }
});
