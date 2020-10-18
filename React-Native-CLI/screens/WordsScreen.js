import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

const url = "https://gre-word-list-101.herokuapp.com/words";

export default class GREWordListComponent extends React.Component {

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

    const { navigation } = this.props.navigation;

    var wordView = [];
    var i = 0;
    wordList.forEach(word => {

      wordView.push(
        <TouchableOpacity key={word['SrNo']}
          onPress={() => this.props.navigation.navigate('Details', { word: JSON.stringify(word) })}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.rootWordStyle}>
              {word['Word']}
            </Text>

            <Text style={styles.rootMeaningStyle}>
              {word['Meaning']}
            </Text>

          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{ marginTop: 12 }}>
        <ScrollView>
          {wordView}
        </ScrollView>
      </View>
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
  separator: {
    marginVertical: 15,
    height: 1,
    width: '100%',
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd'
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
