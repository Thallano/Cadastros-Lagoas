import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function Profile({ navigation }){
 
 const selagemUsername = navigation.getParam('imovel');

 //return <WebView style={{flex: 1}} source={{ uri: `https://drive.google.com/open?id=11wk1dp8J2ubPyi26nFtXIheLlFXah0RR`}} />
 //return <WebView style={{flex: 1}} source={{ uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=https://semplan.teresina.pi.gov.br/wp-content/uploads/sites/39/2020/01/JAMH117.pdf`}} />
 
 console.log(selagemUsername)
 return <WebView style={{flex: 1}} source={{ uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=https://semplan.teresina.pi.gov.br/wp-content/uploads/sites/39/2020/01/${selagemUsername}.pdf` }}/>

}
export default Profile;