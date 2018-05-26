import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        bought : false     
    };    
  } 

  boughtItems(){
      this.setState({bought: true})
  }

  render() {
    var containerStyle = this.state.bought ? styles.containerBought : styles.container
    var textStyle = this.state.bought ? styles.textBought : styles.text
    return (
        <View style={containerStyle}>            
            <Text style={textStyle}>{this.props.items.indexOf(this.props.item) + 1} . {this.props.item.key}</Text>
            <View style={styles.buttonViewX}>
               <View style={{paddingBottom: 22, top: -5, position: 'relative', height: 25}}>
               <Button        
                    title="X"    
                    onPress = {() => this.props.onRemove(this.props.item)}      
                /> 
                </View>   
            </View> 
            <View style={styles.buttonViewV}>
                <Button        
                    title="V"    
                    onPress = {() => this.boughtItems()}      
                />    
            </View> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:40,
        width:300,
        padding: 10,
    },
    containerBought: {
        flexDirection: 'row',
        height:40,
        width:300,
        backgroundColor:"#96D8AD",
        padding: 10,
    },
    buttonViewX: {
        flex: 1,
        paddingRight: 1,
        marginBottom: 50,
        height: 25,
        position: 'relative',

    }, 
    buttonViewV: {
        flex: 1,
        paddingRight: 1,
    },  
  text: {
      color: 'grey',
      fontWeight: 'bold',    
      flex:8
    },
    textBought: {
        color: 'white',
        fontWeight: 'bold',    
        flex:8
      },   
});
