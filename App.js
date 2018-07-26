import React,{ Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Form,
  Item,
  FooterTab,
  Footer,
  Input } from 'native-base';
import { TabNavigator, StackNavigator } from 'react-navigation';

import FirstScreen from './Screens/TabsView'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <AppNavigation/>
      </View>
    );
  }
}

const AppNavigation = StackNavigator({
  FirstScreen: {screen: FirstScreen}
});

const styles = StyleSheet.create({
    container: {
    flex:1,
    width: undefined,
    height: undefined
    }
});
