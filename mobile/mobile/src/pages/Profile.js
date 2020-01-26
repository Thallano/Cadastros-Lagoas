import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function Profile({ navigation }){
 
 const selagemUsername = navigation.getParam('imovel');

 
 return <WebView style={{flex: 1}} source={{ uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=https://semplan.teresina.pi.gov.br/wp-content/uploads/sites/39/2020/01/${selagemUsername}.pdf` }}/>

}
export default Profile;