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
  H1, H2, H3, H4, H5, H6,
  Input } from 'native-base';
import { TabNavigator } from "react-navigation";
import React_Icon from 'react-native-vector-icons';

let mainSlider = 
[
    {
        "id": "10233",
        "name": "13 reasons why",
        "img_url": "https://lhsstatesman.com/wp-content/uploads/2017/05/13-reasons-why.jpg"
    },
    {
        "id": "202321",
        "name": "narcos",
        "img_url": "http://www.hoodedutilitarian.com/wp-content/uploads/2015/09/narcos0004.jpg"
    },
    {
        "id": "402324",
        "name": "house of cards",
        "img_url": "https://vignette.wikia.nocookie.net/house-of-cards/images/a/a8/House_of_Cards_Season_1_Poster.jpg/revision/latest?cb=20140217231358"
    },
    {
        "id": "502324",
        "name": "dark",
        "img_url": "http://fr.web.img4.acsta.net/pictures/17/11/10/12/18/2448823.jpg"
    },
    {
        "id": "6028724",
        "name": "resident evil",
        "img_url": "http://cdn.cinepop.com.br/2018/03/residentevilserie.jpg"
    }
]

let feed = [
    {
      "id": "7028724",
      "name": "resident evil",
      "img_url": "http://cdn.cinepop.com.br/2018/03/residentevilserie.jpg"
    },
    {
      "id": "90233",
      "name": "rick and morty",
      "img_url": "https://imgc.allpostersimages.com/img/print/posters/rick-morty-cast-of-emotions_a-G-14537695-0.jpg"
    },
    {
      "id": "80233",
      "name": "13 reasons why",
      "img_url": "https://lhsstatesman.com/wp-content/uploads/2017/05/13-reasons-why.jpg"
    }
]

let action = [
  {
    "id": "11128724",
    "name": "the matrix",
    "img_url": "http://4.bp.blogspot.com/-QWXQ5UydcZY/T_nJNkPbpQI/AAAAAAAAFRM/rpew1lKMciY/s1600/the_matrix_-_poster_1__1999_.jpg"
  },
  {
    "id": "1342128724",
    "name": "the matrix reload",
    "img_url": "https://occ-0-999-1001.1.nflxso.net/art/907c8/f8c9b526241fc592533ff1aa2d533ed08a2907c8.jpg"
  }
]
class FirstScreen extends Component {
    static navigationOptions = {
      header: null,
    };

    _keyExtractor = (item, index) => item.id;
    _renderItem(item) {
      return (
        <Image style={{width:220, height:330, overflow:'hidden'}} source={{uri:item.img_url}}/>
      )
    }
    render() {
      return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header style={styles.containerLogo}>
              <Body>
                  <Image style={styles.logo} source={require('../assets/images/netflix.png')} />
              </Body>
            </Header>
            <ScrollView>
               <FlatList
                horizontal
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => this._renderItem(item)} 
                data={mainSlider}
               />
              <H3 style={styles.headingTitle}>
                Series & Movie Update
              </H3>
              <FlatList
                  horizontal
                  keyExtractor={this._keyExtractor}
                  ItemSeparatorComponent={ () => <View style={{ width: 20}}/> }
                  renderItem={({item}) => this._renderItem(item)} 
                  data={feed}
                />

              <H3 style={styles.headingTitle}>
                Action Sci-Fi
              </H3>
              <FlatList
                  horizontal
                  keyExtractor={this._keyExtractor}
                  ItemSeparatorComponent={ () => <View style={{ width: 20}}/> }
                  renderItem={({item}) => this._renderItem(item)} 
                  data={action}
              />
            </ScrollView>
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
      backgroundColor:'#000'
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
    },
    headingTitle: {
      padding:20,
      fontSize:16,
      fontWeight:'bold',
      color:'#fff'
    }
});