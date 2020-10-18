import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import Swiper from 'react-native-swiper'

const url = "https://gre-word-list-101.herokuapp.com/words";

export default class PracticeComponent extends React.Component {

  state = {
    wordList: [],
    startswiper: false,
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        const wordList = res.data;
        this.setState({ wordList });
        this.setState({ startswiper: true });
      }).catch(error => console.log(error));
  }

  _renderSwiper() {
    const { wordList } = this.state;

    var wordView = [];
    var i = 0;
    wordList.forEach(word => {
      if ((i % 3) == 0) {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide1}>
            <View style={styles.slideContainer}>
              <Text style={styles.text}>{word['Word']}</Text>
            </View>
            <Button
              title="Explore Word"
              type="clear"
              iconRight
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="#2089dc"
                />
              }
              titleStyle={{ marginRight: 4 }}
              onPress={() => this.props.navigation.navigate('Details', { word: JSON.stringify(word) })}
            />
          </View>

        );
      }
      else if ((i % 3) == 1) {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide2}>
            <View style={styles.slideContainer}>
              <Text style={styles.text}>{word['Word']}</Text>
            </View>
            <Button
              title="Explore Word"
              type="clear"
              iconRight
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="#2089dc"
                />
              }
              titleStyle={{ marginRight: 4 }}
              onPress={() => this.props.navigation.navigate('Details', { word: JSON.stringify(word) })}
            />
          </View>
        );
      }
      else {
        wordView.push(
          <View key={word['SrNo']} style={styles.slide3}>
            <View style={styles.slideContainer}>
              <Text style={styles.text}>{word['Word']}</Text>
            </View>
            <Button
              title="Explore Word"
              type="clear"
              iconRight
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="#2089dc"
                />
              }
              titleStyle={{ marginRight: 4 }}
              onPress={() => this.props.navigation.navigate('Details', { word: JSON.stringify(word) })}
            />
          </View>
        );
      }
      i++;
    });

    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {wordView}
      </Swiper>
    );
  }

  _renderLoading() {
    return (
      <View style={styles.loading}>
        <Text style={styles.title}>
          Loading...
      </Text>
      </View>
    );
  }

  render() {
    const { startswiper } = this.state;

    return (
      startswiper === true ? this._renderSwiper() : this._renderLoading()
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
    fontWeight: 'bold',
  },
  slideContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
