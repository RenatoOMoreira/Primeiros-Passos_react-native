//importando os recursos necessários
import React, {Component} from "react";
import {View} from 'react-native';
//Importando o arquivo de Styles
import folhaEstilos from './Styles/estilosComp';

//Criando um componente

class ElemensStyle extends Component{
    //Renderizar a view 
    render(){
        return(
            <View style = {folhaEstilos.container}>
                <View style ={folhaEstilos.cxVermelha}/>
                <View style ={folhaEstilos.cxAzul}/>
                <View style ={folhaEstilos.cxVerde}/>
                <View style ={folhaEstilos.cxPreta}/>
            </View>
        )
    }
}

//Exportando o component
export default ElemensStyle;