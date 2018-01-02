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
  View
} from 'react-native';
import { Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Content,
  Form,
  Item,
  FooterTab,
  Footer,
  Button,
  Input } from 'native-base';
import { TabNavigator } from "react-navigation";
import React_Icon from 'react-native-vector-icons';
class FirstScreen extends Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header style={styles.containerLogo}>
              <Body>
                  <Image style={styles.logo} source={require('../assets/images/netflix.png')} />
              </Body>
            </Header>
            <Container>
                <Text style={styles.text}>hello</Text>
            </Container>
        </View>
      )
    }
  }

class SecondsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header style={styles.containerLogo}>
              <Body>
                  <Image style={styles.logo} source={require('../assets/images/netflix.png')} />
              </Body>
            </Header>
            <Container>
                <Text style={styles.text}>hello world</Text>
            </Container>
      </View>
    )
  }
}

class ThirdScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header style={styles.containerLogo}>
              <Body>
                  <Image style={styles.logo} source={require('../assets/images/netflix.png')} />
              </Body>
            </Header>
            <Container>
                <Text style={styles.text}>hello profile</Text>
            </Container>
      </View>
    )
  }
}

const Home_navigation = TabNavigator({
  Home: {
    screen: FirstScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon style={styles.Icon} name="ios-home-outline" size={16} />
      )
    }
  },
  Category: {
    screen: SecondsScreen,
    navigationOptions: {
      tabBarLabel: 'Favorite Movie',
      tabBarIcon: () => (
        <Icon style={styles.Icon} name="ios-desktop-outline" size={16} />
      )
    }
  },
  Profile: {
    screen: ThirdScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <Icon style={styles.Icon} name="ios-contact" size={16} />
      )
    }
  },
}, 
  {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#a4aab3',
    style: {
      backgroundColor: '#fff'
   }
  }
});

export default Home_navigation;

const styles = StyleSheet.create({
    text: {
      color:'#fff',
      textAlign:'center',
      fontSize:60,
      paddingTop:30
    },
    container: {
      flex:1,
      width: undefined,
      height: undefined,
      justifyContent: 'center',
      backgroundColor:'#141414'
    },
    containerLogo: {
      backgroundColor:'#fff',
      borderBottomColor: 'transparent'
    },
    logo: {
      width:100,
      height:20,
      overflow:'hidden',
      resizeMode:'contain'
    },
    Icon: {
      color:'#a4aab3'
    }
});