/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/construcao';
export default function redacoes() {

//2- plano era colocar botoes clicaveis para direcionar diretamente a url do tema
// como por exemplo o  primeiro tema "13334" porem, a url do tema=13334 e infelizmente nao foi possivel :(
    const temasURL = 'https://app.estuda.com/apps/api/?acao=redacao_tema_envios&tema=13334&inicio=1';
    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch(temasURL)
            .then((resp) => resp.json())
            .then((json) => setDados(json.redacao_tema_envios))
            .finally(() => setCarregando(false));
    }, []
    );

    return (

        <KeyboardAvoidingView >
            <View style={styles.bordaAcima13334} >

                <View >
                    <Image style={styles.imagemAcima} source={require('../image/logo.png')}
                    />

                </View>

                <View style={styles.bordaRedacao13334} >
                    <Text style={styles.palavraRedacao}>REDAÇÕES</Text>
                </View>

            </View>
                <View style={styles.texto13334}>
                    {
                        carregando ? <ActivityIndicator /> : (
                            <FlatList
                                data={dados}
                                keyExtractor={({ rde_id }) => rde_id}
                                renderItem={({ item }) => (<Text> {item.rde_pagina}</Text>)}
                            />
                        )
                    }
                </View>
        </KeyboardAvoidingView>
    );
}
