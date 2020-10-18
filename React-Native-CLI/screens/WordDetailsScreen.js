import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';

export default class WordDetailsScreenComponent extends React.Component {

  state = {
    word: {}
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.setState(this.props.word)
    // const { word } = this.state;

  }

  render() {

    const word = JSON.parse(this.props.route.params.word);

    let synonyms = [];
    let SynonymCard;
    const BULLET = '\u2022';
    if (word["Synonyms"]) {
      synonyms = word["Synonyms"].split(',');
      synonyms.forEach((element, index) => {
        synonyms[index] = synonyms[index].trim();
      });

      SynonymCard = <Card style={{ padding: 10, margin: 10 }}>
        <Text style={styles.title}>Synonyms</Text>
        {synonyms.map(synonym => {
          return (<Text style={styles.content}>{BULLET} {synonym}</Text>)
        })}
      </Card>;
    }

    let ExampleCard;
    if (word["Example"]) {
      ExampleCard = <Card style={{ padding: 10, margin: 10 }}>
        <Text style={styles.title}>Example</Text>
        <Text style={styles.content}>{word["Example"]}</Text>
      </Card>
    }

    return (
      <View style={styles.container}>
        <Card style={{ padding: 10, margin: 10 }}>
          <Text style={styles.title}>{word['Word']}</Text>
          <Text style={styles.content}>{word["Meaning"]}</Text>
        </Card>

        {ExampleCard}
        {SynonymCard}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    padding: 12,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12
    ,
    textAlign: "justify",
  }
});
