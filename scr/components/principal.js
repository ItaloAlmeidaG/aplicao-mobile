/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/construcao';


export default function Principal({ navigation }) {
//fetch não consegui fazer a filtragem do API.
//meu plano inicial era colocar cada tema clicavel para a sua  respectiva redação

    const temasURL = 'https://app.estuda.com/apps/api/?acao=redacao_temas&inicio=1';
    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch(temasURL)
            .then((resp) => resp.json())
            .then((json) => setDados(json.redacao_temas))
            .finally(() => setCarregando(false));
    }, []
    );


    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Redações' }],
        });
    };

    return (

        <KeyboardAvoidingView >
            <View style={styles.bordaAcima} >
            <View >
                <Image style={styles.imagemAcima} source={require('../image/logo.png')}
                />
            </View>

            <View style={styles.bordaRedacao} >
                <Text style={styles.palavraRedacao}>REDAÇÕES</Text>
            </View>

            </View>
            <TouchableOpacity>
                <View style={styles.teste}>
                    {
                        carregando ? <ActivityIndicator /> : (
                            <FlatList
                                data={dados}
                                keyExtractor={({ id }) => id}
                                renderItem={({ item }) => (<Text> {item.id} - {item.titulo}</Text>)}
                            />
                        )
                    }
                </View>
            </TouchableOpacity>

            <View>
                    <TouchableOpacity style={styles.acessar1334}>

                        <Button
                            title="13334"
                            onPress={() => entrar()} />
                    </TouchableOpacity>
                </View>

        </KeyboardAvoidingView>
    );
}


