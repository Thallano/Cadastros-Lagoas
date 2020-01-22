import React, { useEffect, useState } from 'react';
import { StyleSheet, Image , View, Text , TextInput , TouchableOpacity } from 'react-native';
import MapView, { Marker , Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api';
//import { connect, disconnect}from '../services/socket';


function Main ({ navigation }) {
    const [selos, setSelos] = useState([]);
    const [currentRegion, setCurrentRegion ] = useState(null);
    const [ edital , setEdital] = useState('');
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            
            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

            }
        }

        loadInitialPosition();

    }, []);

/*function setupWebsocket(){
    const{ latitude, longitude } = currentRegion;

    connect(
        latitude,
        longitude,
        edital,
    );*/
}

    async function loadSelos(){
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                edital
            }
        });
        
        setSelos(response.data.selos);
       // setupWebsocket();
    }

    function handleRegionChanged(region){
              setCurrentRegion(region);
    }

    /*if (!currentRegion){
        return null;
    }*/

    return (
        <>
            <MapView 
                onRegionChangeComplete={handleRegionChanged}  
                initialRegion={currentRegion} 
                style = {styles.map} 
            >
                {selos.map(selo => (
                    <Marker 
                        key={selo._id}
                        coordinate = {{ 
                            longitude: selo.location.coordinates[0], 
                            latitude: selo.location.coordinates[1], 
                        }}
                        >
                            <Image 
                                style={styles.avatar} 
                                source={{ uri: 'https://avatars1.githubusercontent.com/u/20881531?s=460&v=4' }} 
                            />   
                                
                        <Callout onPress={() => {
                            navigation.navigate('Profile', { imovel : selo.imovel });
                        }}>
                            <View style={styles.callout}>
                                <Text style={styles.seloImovel}>{selo.imovel}</Text>
                                <Text style={styles.seloName}>{selo.name}</Text>
                                <Text style={styles.seloEdital}>{selo.edital}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.searchForm}>
                    <TextInput
                        style={styles.searchInput}    
                        placeholder="Buscar SELO por edital..." 
                        placeholderTextColor="#999"
                        autoCapitalize="words"        
                        autoCorrect={false} 
                        value={edital}
                        onChangeText={setEdital}   
                     />
                    <TouchableOpacity 
                        onPress={loadSelos} 
                        style={styles.loadButton}>
                         <MaterialIcons 
                            name="my-location" 
                            size={20} 
                            color="#FFF" />
                    </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    map: {
        flex: 1
       
    },

    avatar: {
        width: 54,
        height:54,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#8E4DFF',
    },

    callout: {
        width: 260,
        paddingLeft: 5,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#8E4DFF',
    },

    seloImovel: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    seloNome: {
        color: '#666',
        marginTop: 5,
    },

    seloEdital:{
        marginTop: 5,
    },
// Barra Styles
    searchForm: {
       position: 'absolute',
       top: 20,
       left:20,
       right: 20,
       zIndex: 5,
       flexDirection:'row',
       
    },

   searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color:'#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height:4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 15,
    },

})

export default Main;