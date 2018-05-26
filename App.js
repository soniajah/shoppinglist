import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Welcome from './Components/Welcome';
import ShoppingList from './Components/ShoppingList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShoppingListPage: false 
    };    
  }

  goToPage(){
    this.setState({ShoppingListPage: true})
  }

  render() {
    if(!this.state.ShoppingListPage){
      return (
        <Welcome pageState={this.goToPage.bind(this)}/>
      );
    }
    else{
      return(<ShoppingList/>);
    }
    
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 130, 
//     // flexDirection: 'row', 
//   },  
//   buttonView: {
//     flex: 2,
//     width: 200,
//     height:40,
//     margin: 200
//   },
//   textInputView: {
//     flex: 8,
//     width: 30,
//     height: 40,
//   },
//   addButtonStyle : {
//     backgroundColor: "rgba(92, 99,216, 1)",
//     width: 300,
//     height: 45,
//     borderColor: "transparent",
//     borderWidth: 0,
//     borderRadius: 5
//   },
//   textInput: {
//     height: 40,
//     color: 'green',
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10
//   },
//   listItems: {
//     paddingTop: 20,    
//   }
  
// });
