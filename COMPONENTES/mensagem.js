// Importando os recursos necessários
import React from 'react';
import {Text} from 'react-native'
import { isPropertySignature } from 'typescript';


// Criando o primeiro componente funcional

function Mensagem({umRecado}){
    return (
        <Text>{umRecado}</Text>
    )
}

//Exportando o componente
export default Mensagem;  


// Criando o primeiro componente funcional

/*function Mensagem(props){
    return (
        <Text>{props.umRecado}</Text>
    )
}*/