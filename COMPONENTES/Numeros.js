//Importando os recursos necessários
import React, { Component } from "react";
import { View, Text, Button } from "react-native";

//Criando um component de classe

class Numeros extends Component {

    //1ª parte - Construir a classe
    constructor() {
        super()
        this.state = {
            numero: 0
        }
    }
    //2ª parte - Construir um manipulador de estado original
    alteraNum = (novoValor) => {
        this.setState({ numero: novoValor })
    }
    //3ª parte - Renderizar a view
    render() {
        return (
            <View>
                <Text>Valor do state atual: {this.state.numero}</Text>
                <Button title="Alterar state - SOMA" onPress={() => {
                    this.alteraNum(this.state.numero +1)
                }
                }
                />
                <Button title="Alterar state - Subtração" onPress={() => {
                    if (this.state.numero > 0)
                        this.alteraNum(this.state.numero -1)
                }
                
                }
                />

            </View>
        )
    }
}

//Exportando 

export default Numeros;