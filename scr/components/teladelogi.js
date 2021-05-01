//tela de login (como nao tem banco de dados, qualquer info poderá ser acessada.)

/* eslint-disable prettier/prettier */

//imports do sistema
import React, { useState } from 'react';
import { Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/construcao';

//export do component
export default function Welcome({ navigation }) {

    //setar para quando o usuario digitar qualquer senha/email, retornar no email
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    //transição de tela
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Principal' }],
        });
    };
    //inicio

    return (


        <KeyboardAvoidingView style={styles.background}>

            <View >
                <Image style={styles.imagem} source={require('../image/logo.png')}
                />
            </View>

            <View>

                <TouchableOpacity style={styles.conta}>
                    <Text>  Usuário novo ?</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.container}>
                <TextInput style={styles.imput}
                    placeholder="Email"
                    onChargeText={value => setEmail(value)}
                    keyboardType="email-address"
                />
                <TextInput style={styles.imput}
                    placeholder="Senha"
                    onChargeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
            </View>


            <View>
                <TouchableOpacity style={styles.styleacess}>

                    <Button
                        title="acessar"
                        onPress={() => entrar()} />

                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    );
}


