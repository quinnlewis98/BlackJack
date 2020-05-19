import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Cards from './Cards.js';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    hit: itemkey => {
      dispatch( (dispatch, getState) => {

        dispatch({ type: 'HIT', payload: {} });
      })
    },
    stand: itemkey => {
      dispatch( (dispatch, getState) => {

        dispatch({ type: 'STAND', payload: {} });
      })
    },
    double: todo => {
      dispatch((dispatch, getState) => {

        dispatch({ type: 'DOUBLE_DOWN', payload: {} });
      })
    },

    newGame: todo => {
        dispatch((dispatch, getState) => {
  
          dispatch({ type: 'NEW_HAND', payload: {} });
        })
      },
    add10: todo => {
        dispatch((dispatch, getState) => {
  
          dispatch({ type: 'INCREASE_BET', payload: { add: 10 } });
        })
    },
    add25: todo => {
      dispatch((dispatch, getState) => {

        dispatch({ type: 'INCREASE_BET', payload: { add: 25 } });
      })
    },
    allIn: todo => {
      dispatch((dispatch, getState) => {

        dispatch({ type: 'ALL_IN', payload: {} });
      })
    },
    clearBet: todo => {
        dispatch((dispatch, getState) => {
  
          dispatch({ type: 'CLEAR_BET', payload: {} });
        })
      },
  };
}

function mapStateToProps(state) {
  return {
    dealer: state.dealerHand,
    player: state.playerHand,
    dealerCount: state.dealerCount,
    playerCount: state.playerCount,
    status: state.handState,
    credit: state.credit,
    bet: state.bet,
    cards: state.cards,
    dealerShow: state.dealerShow,
    bookSays: state.bookSays,
    uid: state.uid
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlackJack);


function BlackJack(props) {


  return (
    
    <View style={styles.container}>
      <Text style={styles.topHeader}></Text>
      <View style= {styles.hands}>
        <Text style={styles.header}>Dealer Hand</Text>
        <View style = {styles.cardView} >
        {props.dealer.map((item, index) => {
          if (props.dealer && index === 1 && props.status ==='IN_PROGRESS') {
            return <Cards whichCard ={item.ID} hidden={true} key={index}/>
          }
          else {
            return <Cards whichCard ={item.ID} hidden={false} key={index}/>
          }
        })}
        </View>
      </View>

      <View style= {styles.container2}>
        <Text>Bet and start a new game!</Text>
        <Text>Hit, Stand, or Double Down when game is in progress</Text>
        <Text>The Dealer will hit when at 16 or below. </Text>
        <Text>Try to get 21 without going over!</Text>
      </View>
      <View style = {styles.container2}> 
        <Text style = {styles.currentStatus}>Current Hand: {props.status}</Text>
        <Text style = {styles.currentStatus}>The book says: {props.bookSays}</Text>
      </View>

      <View style= {styles.hands}>
        <Text style={styles.header}>Players Hand</Text>
      <Text style={styles.header}>You have {props.playerCount}</Text>
        <View style = {styles.cardView} >
        {props.player.map((item, index) => {
            return <Cards whichCard ={item.ID} hidden={false} key={index}/>
        })}
        </View>
      </View>

      <View style={styles.controlButtons}>
        <Button onPress={() => {
            if (props.status == 'IN_PROGRESS') {
              console.log("HIT")
              props.hit();
            }
          }} title = "HIT" color = 'blue'  />

        <Button onPress={() => {
            if (props.status == 'IN_PROGRESS') {
              console.log("STAND")
              props.stand();
            }
          }} title = "STAND" color = 'blue'  />

        <Button onPress={() => {
            if (props.status == 'IN_PROGRESS') {
              console.log("DOUBLE")
              props.double();
            }
          }} title = "DOUBLE DOWN" color = 'blue' />
      </View>
      <View style= {styles.ButtonContainer}>
        <View style= {styles.LeftContainer}>
          <Button onPress={() => {
            if (props.status!='IN_PROGRESS' && props.credit>=props.bet) {
              console.log("New Hand Started")
              props.newGame();
              }
            }} title = "New Hand" color = 'yellow'  />
          <Text style={styles.header}>Credit: {props.credit}</Text>
          <Text style={styles.header}>Current Bet: {props.bet}</Text>

        </View>
        <View style= {styles.RightContainer}>

        <Button onPress={() => {
            if (props.status!='IN_PROGRESS') {
              console.log("Clear Bet")
              props.clearBet();
            }
          }} title = 'Clear Bet' color = 'yellow'  />

        <Button onPress={() => {
            if (props.status!='IN_PROGRESS') {
              console.log("Increase Bet by 10")
              props.add10({ add: 10});
            }
          }} title = 'Add 10' color = 'yellow'  /> 

        <Button onPress={() => {
            if (props.status!='IN_PROGRESS') {
              console.log("Increase Bet by 25")
              props.add25({ add: 25});
            }
          }} title = 'Add 25' color = 'yellow'  />

          <Button onPress={() => {
            if (props.status!='IN_PROGRESS') {
              console.log("ALL-IN")
              props.allIn();
            }
          }} title = "All in " color = 'yellow'  />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10%',

  },
  container1:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1.5,
    width:'100%',
    borderBottomColor: 'black',
    borderWidth: 1,
  },
  container2:{
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex:1.5,
    width:'100%',
    borderBottomColor: 'black',
    borderWidth: 1,
  },
  hands: {
    justifyContent:"flex-start",
    alignItems: 'center',
    flex:4,
    width: '100%',
    

  }, 
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topHeader:{
  },
  header: {
    fontSize: 20,
    color: 'red',
  },
  currentStatus:{
    fontSize: 18
  },
  LeftContainer: {
    flex:1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  RightContainer:{
    flex: 1, 
    flexDirection: 'column',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor:'black',
    justifyContent: 'space-around'
  },
  controlButtons: {
    flex: 1,
    height: 30,
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: "center",
    borderWidth: 2,
    borderColor:'black'
    
  },
  
});