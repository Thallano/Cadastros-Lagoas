import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function Profile({ navigation }){
 //const seloUsername = navigation.getParam('seloUsername');
    
 return <WebView style={{flex: 1}} source={{ uri: `https://drive.google.com/open?id=11wk1dp8J2ubPyi26nFtXIheLlFXah0RR`}} />
}

export default Profile;