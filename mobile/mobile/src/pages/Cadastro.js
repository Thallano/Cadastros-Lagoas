import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';



function Cadastro(){
 
  //  const selagemUsername = navigation.getParam('imovel');
   
    
    return <WebView style={{flex: 1}} source={{ uri: 'http://192.168.0.115:3000' }}/>
   
   }


export default Cadastro;