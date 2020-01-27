import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Image , View, Text , TextInput , TouchableOpacity } from 'react-native';
import MapView, { Marker , Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'
import api from '../services/api';


function Main ({ navigation }) {
    const [selos, setSelos] = useState([]);
    const [currentRegion, setCurrentRegion ] = useState(null);
    //const [ filtro, setFiltro] = useState('');
    const [ edital, setEdital] = useState('');
    const [ imovel , setImovel] = useState('');


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

    function loadMenu ( ){
        navigation.navigate('Cadastro');
    
    };

    async function loadSelos(){
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                edital,
                imovel
                
            }
        });
        
        
        setSelos(response.data.selos);
       
    }

    function handleRegionChanged(region){
              setCurrentRegion(region);
    }
   
        
   if(!currentRegion){
       return null;
   }
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
                           <Text style={styles.seloMarker}>{selo.imovel}</Text>
                            <Image 
                                style={styles.avatar}                                                             
                                source={require('./Logo_Lagoas.png') } 
                                
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
                        placeholder="Buscar SELOS por Edital..." 
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
                            name="map" 
                            size={25} 
                            color="#FFF" />
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity 
                        onPress={loadMenu}
                        style={styles.menuButton}>  
                        <MaterialIcons 
                            name="assignment" 
                            size={25} 
                            color="#FFF" />
                    </TouchableOpacity>                    
                        
            </View>
            <View style={styles.searchForm2}>
                    <TextInput
                        style={styles.searchInput}    
                        placeholder="Buscar SELO..." 
                        placeholderTextColor="#999"
                        autoCapitalize="words"        
                        autoCorrect={false} 
                        value={imovel}
                        onChangeText={setImovel}
                    />
                    <TouchableOpacity 
                        onPress={loadSelos} 
                        style={styles.loadButton}>
                          
                         <MaterialIcons 
                            name="loyalty" 
                            size={25} 
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
        width: 55,
        height: 55,
        borderRadius: 1,
        borderWidth: 2,
        borderColor: '#00AFEF',
    },

    callout: {
        width: 260,
        paddingLeft: 5,
        /*borderRadius: 10,
        borderWidth: 3,
        borderColor: '#00AFEF',*/
    },

    seloImovel: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    seloMarker: {
        color: '#666',
        fontWeight: 'bold',
              
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

    searchForm2: {
        position: 'absolute',
        top: 90,
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
        backgroundColor: '#00AFEF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 15,
    },

    menuButton: {
        width: 50,
        height: 50,
        backgroundColor: '#00AFEF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 15,
               
    },

    container: {
        position: 'absolute',
        top: 20,
        left:20,
        right: 20,
        zIndex: 5,
        flexDirection:'row',
     },

})

export default Main; 