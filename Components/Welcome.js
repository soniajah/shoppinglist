import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }
  changePage(){
    this.props.pageState()
  }
  
  render() {
      return (        
        <View style={styles.container}>
          <Text style={{fontSize:25, fontWeight: 'bold'}}>Welcome to My shopping list</Text>
          <Button
          title="Enter"         
          buttonStyle={styles.addButtonStyle}
          containerStyle={{ marginTop: 20 }}
          onPress = {() => this.changePage()}
          /> 
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
    // paddingTop: 130, 
    // flexDirection: 'row', 
  },  
  addButtonStyle : {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },    
});
