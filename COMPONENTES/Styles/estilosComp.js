
import {StyleSheet} from 'react-native'

//criar as estruturas de ESTILO
const folhaEstilos = StyleSheet.create({
    // Primeiro conjunto de estilos
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        height: '100%' 
    },

    //Segundo conjunto de ESTILOS
    cxVermelha:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        margin: 5
    },

    //Terceiro conjunto de ESTILOS
    cxAzul:{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        margin: 5
    },

     //Quarto conjunto de ESTILOS
    cxPreta:{
        width: 100,
        height: 100,
        backgroundColor: 'black',
        margin: 5
    },

     //Quinto conjunto de ESTILOS
    cxVerde:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        margin: 5
    }

})

export default folhaEstilos;