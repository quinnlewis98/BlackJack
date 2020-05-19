import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as firebaseApp from 'firebase';
import * as SecureStore from 'expo-secure-store';
import * as Facebook from 'expo-facebook';
import thunk from 'redux-thunk';
import BlackJack from './components/BlackJack.js';

var sixDecks = [{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},
{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},
{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},
{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},
{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},
{value:"ACE", ID: 'c1'}, {value:"ACE", ID: 'd1'}, {value:"ACE", ID: 's1'}, {value:"ACE", ID: 'h1'}, {value:"KING", ID: 'c13'}, {value:"KING", ID: 'd13'}, {value:"KING", ID: 's13'}, {value:"KING", ID: 'h13'}, {value:"QUEEN", ID: 'c12'}, {value:"QUEEN", ID: 'd12'}, {value:"QUEEN", ID: 's12'}, {value:"QUEEN", ID: 'h12'}, {value:"JACK", ID: 'c11'}, {value:"JACK", ID: 'd11'}, {value:"JACK", ID: 's11'}, {value:"JACK", ID: 'h11'}, {value:"10", ID: 'c10'}, {value:"10", ID: 'd10'}, {value:"10", ID: 's10'}, {value:"10", ID: 'h10'}, {value:"9", ID: 'c9'}, {value:"9", ID: 'd9'}, {value:"9", ID: 's9'}, {value:"9", ID: 'h9'}, {value:"8", ID: 'c8'}, 
{value:"8", ID: 'd8'}, {value:"8", ID: 's8'}, {value:"8", ID: 'h8'}, {value:"7", ID: 'c7'}, {value:"7", ID: 'd7'}, {value:"7", ID: 's7'}, {value:"7", ID: 'h7'},{value:"6", ID: 'c6'}, {value:"6", ID: 'd6'}, {value:"6", ID: 's6'}, {value:"6", ID: 'h6'}, {value:"5", ID: 'c5'}, {value:"5", ID: 'd5'}, {value:"5", ID: 's5'}, {value:"5", ID: 'h5'}, {value:"4", ID: 'c4'}, {value:"4", ID: 'd4'}, {value:"4", ID: 's4'}, {value:"4", ID: 'h4'}, {value:"3", ID: 'c3'}, {value:"3", ID: 'd3'}, {value:"3", ID: 's3'}, {value:"3", ID: 'h3'},{value:"2", ID: 's2'}, {value:"2", ID: 'h2'},{value:"2", ID: 'c2'}, {value:"2", ID: 'd2'},]



var firebaseConfig = {
  apiKey: "AIzaSyDQhCIJVY6kV1aoqrV6Sae6PTNHC1mmFwU",
  authDomain: "blackjackapp-93f8b.firebaseapp.com",
  databaseURL: "https://blackjackapp-93f8b.firebaseio.com",
  projectId: "blackjackapp-93f8b",
  storageBucket: "blackjackapp-93f8b.appspot.com",
  messagingSenderId: "58254945293",
  appId: "1:58254945293:web:2e0850d4923edb0175b944"
};

// Initialize Firebase
if (firebaseApp.apps.length == 0) {
  firebaseApp.initializeApp(firebaseConfig);
}

function setupCreditListener(userID) {
  firebaseApp
    .database()
    .ref('users/' + userID)
    .on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        store.dispatch({
          type: 'LOAD_CREDIT',
          payload: { credit: snapshot.val().credit },
        });
      } else {
        store.dispatch({
          type: 'LOAD_CREDIT',
          payload: { credit: 100 },
        });
      }
    }); 
}

var shuffled = shuffleArray(sixDecks)

const initialState = {
  cards: shuffled,
  dealerHand:[],
  dealerShow:0,
  playerHand:[],
  playerCount:0,
  dealerCount:0,
  credit:100,
  bet:0,
  handState: '',
  bookSays:'',
  uid: ''
};

// Taken from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HIT':
      value = hitHelper(state.playerHand, state.cards, state.bet, state.dealerShow)
      return { ...state, playerHand: value.theHand, 
                        playerCount: value.count,
                        handState: value.status,
                        credit: state.credit + value.creditChange,
                        bookSays: value.advice};
    case 'STAND':
      value = standHelper(state.dealerHand, state.playerHand, state.cards, state.bet)
      return { ...state,  dealerHand: value.theHand, 
                          dealerCount: value.count,
                          handState: value.status,
                          credit: state.credit + value.creditChange,
                          bookSays: value.advice};
    case 'NEW_HAND':
      player = populateHand(state.playerHand, state.cards)
      dealer = populateHand(state.dealerHand, state.cards)
      advice = calcBookSays(player.theCount, dealer.show) 
      if(dealer.theCount == 21){
        return { ...state, playerHand: player.theHand, 
          dealerHand: dealer.theHand, 
          playerCount: player.theCount,
          dealerCount: dealer.theCount,
          dealerShow: dealer.show,
          handState: 'DEALER_BLACKJACK',
          credit: state.credit - state.bet}; 
      }
      else if(player.theCount == 21){
        return { ...state, playerHand: player.theHand, 
          dealerHand: dealer.theHand, 
          playerCount: player.theCount,
          dealerCount: dealer.theCount,
          dealerShow: dealer.show,
          handState: 'PLAYER_BLACKJACK',
          credit: state.credit + 1.5* state.bet}; 
      }
      else{
        return { ...state, playerHand: player.theHand, 
                          dealerHand: dealer.theHand, 
                          playerCount: player.theCount,
                          dealerCount: dealer.theCount,
                          dealerShow: dealer.show,
                          bookSays: advice.message,
                          handState: 'IN_PROGRESS'};   
        }  
    case 'DOUBLE_DOWN':
      value = doubleHelper(state.dealerHand, state.playerHand, state.cards, state.bet, state.dealerShow);
      return { ...state,  dealerHand: value.dHand, 
                          playerHand: value.pHand,
                          playerCount: value.pCount,
                          dealerCount: value.dCount,
                          handState: value.status,
                          credit: state.credit + value.creditChange,
                        bookSays: value.advice.message};
    case 'INCREASE_BET':
      return { ...state, bet: state.bet + action.payload.add};
    case 'ALL_IN':
      return { ...state, bet: state.credit}
    case 'CLEAR_BET':
      return { ...state, bet: 0}
    case 'LOAD_CREDIT':
      return{ ...state, credit: action.payload.credit, bet:0}
    case 'NEW_CARDS':
      return{ ...state, cards: action.payload.cards}
    case 'UID_UPDATE':
      return { ...state, uid: action.payload.uid}
  }

  return state;
};



const store = createStore(reducer, applyMiddleware(thunk));

let populateHand = (hand, cards) => {
  hand = []
  hand.push(cards.pop())
  let firstCard = calculateHand(hand)
  hand.push(cards.pop())
  return {theHand: hand, theCount: calculateHand(hand), show: firstCard};
}

calcBookSays = (player, dealer) => {
  playerCount = player
  dealerShows = dealer
  console.log(playerCount)
  console.log(dealerShows)
  if(playerCount>=17){
    console.log('Case 1')
    return {message: 'stand'}
  }
  else if(dealerShows<=6 && playerCount>13){
    console.log('Case 2')
    return {message: 'stand'}
  }
  else if(dealerShows<=6 && dealerShows>=4 && playerCount==12){
    console.log('Case 3')
    return {message: 'stand'}
  }
  else if(playerCount == 11 && dealerShows<11){
    console.log('Case 4')
    return {message: 'double down'}
  }
  else if(playerCount == 10 && dealerShows<10){
    console.log('Case 5')
    return {message: 'double down'}
  }
  else if(playerCount == 9 && dealerShows<=6 && dealerShows>=3) {
    console.log('Case 6')
    return {message: 'double down'}
  }
  else {
    console.log('Case 7')
    return {message: 'hit'}
  }
}

let hitHelper = (hitHand, cards, bet, dshow) => {
  hitHand.push(cards.pop())
  sum= calculateHand(hitHand)
  handStatus = 'IN_PROGRESS'
  change=0
  if(sum>21){
    handStatus = 'BUST'
    change = bet*-1
  }
  book = calcBookSays(sum,dshow)
  value = {theHand: hitHand, count: sum, status: handStatus, creditChange: change, advice: book.message }
  return value;
}

let standHelper = (dealerHand, playerHand, cards, bet) => {

  sumDealer= calculateHand(dealerHand)
  sumPlayer= calculateHand(playerHand)
  handStatus = 'IN_PROGRESS'
  change=0
  while(sumDealer<17){
    dealerHand.push(cards.pop())
    sumDealer= calculateHand(dealerHand)
  }
  if(sumDealer>21){
    handStatus = 'DEALER_BUST'
    change =  bet
  }
  else if (sumPlayer>sumDealer){
    handStatus = 'PLAYER_WIN'
    change =  bet
  }
  else if (sumPlayer==sumDealer){
    handStatus = 'PUSH'
    change =  0
  }
  else{
    handStatus = 'DEALER_WIN'
    change =  bet*-1
  }
  value = {theHand: dealerHand, count: sumDealer, status: handStatus, creditChange: change, advice: 'start a new hand' }
  return value;
}

let doubleHelper = (dealerHand, playerHand, cards, bet, dshow) => {
  sumDealer= calculateHand(dealerHand)
  sumPlayer= calculateHand(playerHand)
  handStatus = 'IN_PROGRESS'
  change=0

  playerHand.push(cards.pop())
  sumPlayer= calculateHand(playerHand)
  if(sumPlayer>21){
    handStatus = 'BUST'
    change = bet*-2
  book = calcBookSays(sumPlayer , dshow)
    value = {pHand: playerHand, dHand:dealerHand, pCount: sumPlayer, dCount: sumDealer,
      status: handStatus, creditChange: change, advice: book.message }
    return value;
  }

  while(sumDealer<17){
    dealerHand.push(cards.pop())
    sumDealer= calculateHand(dealerHand)
  }
  if(sumDealer>21){
    handStatus = 'DEALER_BUST'
    change =  2*bet
  }
  else if (sumPlayer>sumDealer){
    handStatus = 'PLAYER_WIN'
    change =  2*bet
  }
  else if (sumPlayer=sumDealer){
    handStatus = 'PUSH'
    change =  0
  }
  else{
    handStatus = 'DEALER_WIN'
    change =  bet*-2
  }
  book = calcBookSays(sumPlayer, dshow)
  value = {pHand: playerHand, dHand:dealerHand, pCount: sumPlayer, dCount: sumDealer,
     status: handStatus, creditChange: change, advice: book }
  return value;
}


let calculateHand = (hand) => {
  var sum=0
  let total = 0
  var ace = false
  var numAces = 0
  hand.map((item,index) => {
    if(item.value == "ACE") {
      sum+= 11
      ace = true
      numAces+=1
    }
    else if(item.value == "KING" | item.value =="QUEEN" | item.value == "JACK" | item.value == "10") sum+=10
    else if(item.value == "9") sum+=9
    else if(item.value == "8") sum+=8
    else if(item.value == "7") sum+=7
    else if(item.value == "6") sum+=6
    else if(item.value == "5") sum+=5
    else if(item.value == "4") sum+=4
    else if(item.value == "3") sum+=3
    else sum+=2
  })
  
  while(numAces>0 && sum>21){
    numAces-=1
    sum-=10
  }
  
  total=sum
  return total
}

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [token, setToken] = React.useState(null);
  var [uid, setuid] = React.useState(null);
  const [deckData, setDeckData] = React.useState([])

  useEffect(() => {
    checkForToken();
    checkForFirebaseCredential();
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        setuid(user.uid);
        console.log('We are authenticated now!', `Hi ${user.uid}`);
        store.dispatch({
          type: 'UID_UPDATE',
          payload: { uid: user.uid },
        });
        setupCreditListener(user.uid)
      }
    });
  }, []);

  async function checkForToken() {
    let token = await SecureStore.getItemAsync('token');
    setToken(token);
    setLoading(false);
  }

  async function checkForFirebaseCredential() {
    let credential = await SecureStore.getItemAsync('firebaseCredential');
    if (credential) {
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log('Auth failed and here the error' + JSON.stringify(error));
        });
    }
  }
 
  let saveTokenToSecureStorage = async (token, credential) => {
    SecureStore.setItemAsync('token', token);
    SecureStore.setItemAsync('firebaseCredential', credential);
    setToken(token);
  };

  let logIn = async () => {
    try {
      await Facebook.initializeAsync('304914207165997');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        let credential = firebaseApp.auth.FacebookAuthProvider.credential(
          token
        );
        firebaseApp
          .auth()
          .signInWithCredential(credential)
          .catch(error => {
            console.log(
              'Auth failed and here is the error ' + JSON.stringify(error)
            );
          });
        saveTokenToSecureStorage(token, credential);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  if (loading === true) {
    return <View/>;
  } else if (token === null) {
    return (
      <View style={styles.login}>
        <Text style = {styles.bL}>Welcome to BlackJack</Text>
        <Button  title="LogIn With Facebook" onPress={() => logIn()} />
      </View>
    );
  }
    

  return (
    <Provider store={store}>
      <BlackJack/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bL:{
    fontSize:24
  }
});