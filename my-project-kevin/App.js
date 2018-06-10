import React from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView,TextInput,TouchableHighlight,TouchableWithoutFeedback,Alert,Button,StatusBar} from 'react-native';
export default class App extends React.Component {

  constructor(){
 
        super();
     
        this.state ={
            showEmailError:false,
            showPasswordError:false,
            email : "",
            password : "",
            loginDisabled : true
        }
        this.message = {
            email : "not correct format for email address",
            password : "please use at least 6 - 12 characters"
        }
  }
     
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
        this.state.showEmailError = true;
        this.setState({showEmailError: this.state.showEmailError});
        this.state.email= "not correct format for email address";
        this.setState({email: this.state.email});
    }
    else {
      this.state.showEmailError = false;
       this.setState({email: ''});
    }
    
    if(!this.state.showEmailError && !this.state.showPasswordError ){
        this.state.loginDisabled = false;
        this.setState({loginDisabled: false});
    }
    else{
        this.state.loginDisabled = true;
        this.setState({loginDisabled: true});
    }
  }

  ShowMaxAlert = (EnteredValue) =>{
      
    var TextLength = EnteredValue.length.toString() ;

    if(TextLength >12  || TextLength < 6){
        this.state.showPasswordError = true;
        //Alert.alert('Alert email'+ this.state.showPasswordError);
        this.state.password = "please use at least 6 - 12 characters";
        this.setState({password: this.state.password});
        this.setState({showPasswordError: this.state.showPasswordError});
    }
    else{
        this.state.showPasswordError = false;
       //s Alert.alert('Alert email'+ this.state.showPasswordError);
        this.setState({password: ''});
    }

    this.state.showEmailError = this
    if(!this.state.showEmailError && !this.state.showPasswordError ){
        this.state.loginDisabled = false;
        this.setState({loginDisabled: false});
    }
    else{
        this.state.loginDisabled = true;
        this.setState({loginDisabled: true});
    }
  }
     
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

               <View style={styles.loginContainer}>
                  <Image resizeMode="contain" style={styles.logo} source={require('./assets/images/logo.jpg')} />

                  <Text  style={styles.title}>
                      TECHNICAL TEST
                  </Text>
               </View>
               <View style={styles.formContainer}>
                <View style={styles2.container}>
                  <StatusBar barStyle="light-content"/>
                  <View style={styles.inputContainer}>
                    <Text  style={styles.label}>
                        Email
                    </Text>
                
                    <TextInput style = {styles2.input} 
                                autoCapitalize="none"
                                onChangeText={(text) => this.validate(text)}
                                autoCorrect={false} 
                                keyboardType='email-address' 
                                returnKeyType="next" 
                                placeholder='Input email address' 
                                underlineColorAndroid="transparent"
                                placeholderTextColor='rgba(225,225,225,0.7)'/>
                      <Text  style={styles.error}>
                         {this.state.email}
                      </Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text  style={styles.label}>
                        Password
                    </Text>
                    <TextInput style = {styles2.input}   
                                returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                                onChangeText={(text) => this.ShowMaxAlert(text)}
                                placeholder='Input password' 
                                secureTextEntry={true}
                                underlineColorAndroid="transparent"
                                placeholderTextColor='rgba(225,225,225,0.7)' 
                                />
                   
                       <Text  style={styles.error}>
                            {this.state.password}
                       </Text>
                   </View>
                <TouchableWithoutFeedback style={styles2.loginButton} onPress={onButtonPress}>
                      <Text  style={styles2.buttonText}>Sign In</Text>
                </TouchableWithoutFeedback> 
                </View>
               </View>
            </KeyboardAvoidingView>
    );
  }
}

showEmailMessage = () => {
    this.setState({
        showCancel: !this.state.showEmailError
    });
}

const onButtonPress = () => {
    Alert.alert('Success');
};

// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FAF8FF',
  },
  inputContainer: {
      height:100
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      width: 180,
      height: 180
  },
  title:{
      marginTop:10,
      color: "#341769",
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold'
  },
  label:{
    color: "#262626",
    textAlign: 'left',
    fontSize: 17
 },
 error:{
    color: "#e84423",
    textAlign: 'left',
    fontSize: 12,

 }
});


// define your styles
const styles2 = StyleSheet.create({
  container: {
   padding: 20
  },
  input:{
      height: 45,
      marginBottom: 10,
      color: '#262626',
      borderColor: '#714db2',
      borderRadius:5,
      borderWidth: 1,
      paddingLeft:10,
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 22
  }, 
  loginButton:{
     paddingTop:5,
     marginTop:30,
     backgroundColor:'#714db2',
     borderRadius:5,
     borderWidth: 1,
     borderColor: '#fff',
     height: 45
  }
 
});
