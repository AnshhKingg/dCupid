import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import md from './privacy';
import Markdown, {getUniqueID, openUrl} from 'react-native-markdown-renderer';
import {Header} from '../../Components';

const Privac = ({navigation}) => {
  const rules = {
    textgroup: (node, children, parent, styles) => {
      return (
        <Text key={node.key} style={styles.text}>
          {children}
        </Text>
      );
    },
    heading1: (node, children, parent, styles) => (
      <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
        {children}
      </Text>
    ),
    blockquote: (node, children, parent, styles) => (
      <View key={node.key} style={styles.blockquote}>
        {children}
      </View>
    ),
    em: (node, children, parent, styles) => {
      // implement navigation here
      return (
        <Text key={node.key} style={styles.em}>
          {children}
        </Text>
      );
    },
    strong: (node, children, parent, styles) => {
      return (
        <Text key={node.key} style={[styles.strong]}>
          {children}
        </Text>
      );
    },
    softbreak: (node, children, parent, styles) => (
      <Text key={node.key}> </Text>
    ),

    link: (node, children, parent, styles) => {
      return (
        <Text
          key={node.key}
          style={styles.link}
          onPress={() => openUrl(node.attributes.href)}>
          {children}
        </Text>
      );
    },
  };

  return (
    <View>
      <ScrollView>
        <Header
          title="About me"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <View style={style.container}>
          <Markdown style={mdStyle} rules={rules}>
            {md}
          </Markdown>
        </View>
      </ScrollView>
    </View>
  );
};

const mdStyle = StyleSheet.create({
  heading1: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    marginBottom: 30,
  },
  strong: {
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'justify',
    lineHeight: 25,
    padding: 5,
    marginBottom: 10,
    color: 'black',
  },
  link: {
    color: '#ec407a',
  },
  paragraph: {
    color: 'red',
  },
  em: {
    color: '#ec407a',
  },
});

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
    marginBottom: 20,
  },
});
export default Privac;
