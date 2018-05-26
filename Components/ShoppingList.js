import React from 'react';
import { StyleSheet, Text, View,TextInput, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemRow from './ItemRow';

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      itemName: '',
      items: [{key : 'item1'}], 
    };    
  }

  handlePress(){
    if(this.state.itemName != ''){
      this.addItemToList();
    }
    
  } 

  addItemToList(){
    this.setState({items: [...this.state.items, {key: this.state.itemName, bought: false}], itemName: ''}) 
  }

  removeItemFromList(item){
    var items = [...this.state.items]
    let index = items.indexOf(item);
    items.splice(index, 1);
    this.setState({ items : items });
    // return this.state.items;s
  }

  itemsBought(item){    
    if(!item.bought){
      this.setState({items: [...this.state.items, {key: this.state.itemName, bought: true}]})
    }    
  }

  getItemList() {
    return this.state.items
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>My shopping list</Text>
        <View style={{flexDirection: 'row', width: 300, paddingTop: 20}}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder= ''
              onChangeText={(text) => this.setState({itemName: text})}
              value={this.state.itemName}
            />
          </View>
          <View styles = {styles.buttonView}>
              <Button
              title="Add Item"         
              buttonStyle={styles.addButtonStyle}
              containerStyle={{ marginTop: 20 }}
              onPress = {() => this.handlePress()}
              />
          </View>
        </View>
        <View>        
          <FlatList
            style = {styles.listItems}
            data={this.state.items}
            renderItem={({item}) => <ItemRow item={item} onRemove={this.removeItemFromList.bind(this)} items={this.getItemList()} onTick={this.itemsBought.bind(this)}/>} 
          />          
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 130, 
    // flexDirection: 'row', 
  },  
  buttonView: {
    flex: 2,
    width: 200,
    height:40,
    margin: 200
  },
  textInputView: {
    flex: 8,
    width: 30,
    height: 40,
  },
  addButtonStyle : {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  textInput: {
    height: 40,
    color: 'green',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  listItems: {
    paddingTop: 20,    
  }
  
});
