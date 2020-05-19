import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
//react native cannot dynamically load source, so have to do this...
  getcardImages = () => {
    if (this.props.hidden) {
      return <Image source={require('../assets/PNG/gray_back.png')} resizeMode = 'contain' style = {styles.cardPic}/>
    }
    else {
      switch(this.props.whichCard) {
        case "c1": 
          return <Image source={require('../assets/PNG/AC.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "c2":
            return <Image source={require('../assets/PNG/2C.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "c3":
            return <Image source={require('../assets/PNG/3C.png')} resizeMode = 'contain'  style = {styles.cardPic} /> 
        case "c4":
            return <Image source={require('../assets/PNG/4C.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c5":
            return <Image source={require('../assets/PNG/5C.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c6":
            return <Image source={require('../assets/PNG/6C.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c7":
            return <Image source={require('../assets/PNG/7C.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c8":
            return <Image source={require('../assets/PNG/8C.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "c9":
            return <Image source={require('../assets/PNG/9C.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "c10":
            return <Image source={require('../assets/PNG/10C.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "c11":
            return <Image source={require('../assets/PNG/JC.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c12":
          return <Image source={require('../assets/PNG/QC.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "c13":
            return <Image source={require('../assets/PNG/KC.png')} resizeMode = 'contain'  style = {styles.cardPic} />
//he  arts
        case "d1": 
            return <Image source={require('../assets/PNG/AD.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "d2":
            return <Image source={require('../assets/PNG/2D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d3":
            return <Image source={require('../assets/PNG/3D.png')} resizeMode = 'contain'  style = {styles.cardPic} /> 
        case "d4":
            return <Image source={require('../assets/PNG/4D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d5":
            return <Image source={require('../assets/PNG/5D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d6":
            return <Image source={require('../assets/PNG/6D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d7":
            return <Image source={require('../assets/PNG/7D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d8":
            return <Image source={require('../assets/PNG/8D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d9":
            return <Image source={require('../assets/PNG/9D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d10":
            return <Image source={require('../assets/PNG/10D.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d11":
            return <Image source={require('../assets/PNG/JD.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d12":
            return <Image source={require('../assets/PNG/QD.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "d13":
            return <Image source={require('../assets/PNG/KD.png')} resizeMode = 'contain'  style = {styles.cardPic} />

        case "s1": 
            return <Image source={require('../assets/PNG/AS.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s2":
            return <Image source={require('../assets/PNG/2S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s3":
            return <Image source={require('../assets/PNG/3S.png')} resizeMode = 'contain' style = {styles.cardPic} /> 
        case "s4":
            return <Image source={require('../assets/PNG/4S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s5":
            return <Image source={require('../assets/PNG/5S.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "s6":
            return <Image source={require('../assets/PNG/6S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s7":
            return <Image source={require('../assets/PNG/7S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s8":
            return <Image source={require('../assets/PNG/8S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s9":
            return <Image source={require('../assets/PNG/9S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s10":
            return <Image source={require('../assets/PNG/10S.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s11":
            return <Image source={require('../assets/PNG/JS.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "s12":
            return <Image source={require('../assets/PNG/QS.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "s13":
            return <Image source={require('../assets/PNG/KS.png')} resizeMode = 'contain'  style = {styles.cardPic} />

        case "h1": 
            return <Image source={require('../assets/PNG/AH.png')} resizeMode = 'contain' style = {styles.cardPic} />
        case "h2":
            return <Image source={require('../assets/PNG/2H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h3":
            return <Image source={require('../assets/PNG/3H.png')} resizeMode = 'contain'  style = {styles.cardPic} /> 
        case "h4":
            return <Image source={require('../assets/PNG/4H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h5":
            return <Image source={require('../assets/PNG/5H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h6":
            return <Image source={require('../assets/PNG/6H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h7":
            return <Image source={require('../assets/PNG/7H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h8":
            return <Image source={require('../assets/PNG/8H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h9":
            return <Image source={require('../assets/PNG/9H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h10":
            return <Image source={require('../assets/PNG/10H.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h11":
            return <Image source={require('../assets/PNG/JH.png')} resizeMode = 'contain'  style = {styles.cardPic} />
        case "h12":
            return <Image source={require('../assets/PNG/QH.png')}resizeMode = 'contain'  style = {styles.cardPic} />
        case "h13":
            return <Image source={require('../assets/PNG/KH.png')} resizeMode = 'contain'  style = {styles.cardPic} />

        default:
          return require('../assets/PNG/gray_back.png');
    }
    }
  }

  render() {
    

    return(
      <View style = {styles.card}>
        {this.getcardImages()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    width: 100,
    height: 100
  },
  cardPic: {
    resizeMode: "contain",
    width:'100%',
    height:'100%'
  }
})