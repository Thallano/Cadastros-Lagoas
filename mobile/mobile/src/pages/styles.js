import { StyleSheet } from 'react-native';

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

export default styles;