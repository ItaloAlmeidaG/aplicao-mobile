/* eslint-disable prettier/prettier */
//import para encaminhar
import { StyleSheet } from 'react-native';


//tela de login

//visual fundo
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2E1DB',
  },

  //logo
  imagem: {
    justifyContent: 'center',
    width: 280,
    height: '29%',
  },

  //corpo dos itens
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  //borda do usuario/senha
  imput: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  //borda do acesso
  styleacess: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  //usuário novo
  conta: {
    color: '#35AAFF',
    left: '28%',
    marginTop: -25,
    width: '30%',
    height: 20,
    backgroundColor: '#35AAFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  //tela principal

  //baner do background parte superior
  bordaAcima: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2E1DB',
    borderRadius:33,
    height: '30%',
    marginTop: -20,
  },

  //logo acima
  imagemAcima:{
    marginTop: 0,
    right: '20%',
    width: 210,
    height: 50,
  },

  //palavra redação
  palavraRedacao: {
    color: '#9ACD32',
    fontSize: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowRadius: 3,
    textTransform:'capitalize',
    fontWeight: 'bold',

  },
  //borda redação
  bordaRedacao:{
    marginTop:20,
    backgroundColor: '#35AAFF',
    width: '110%',
    alignItems: 'center',
    borderRadius: 10,
  },

  acessar1334:{
    marginTop:30,
    backgroundColor: '#35AAFF',
    width: '20%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
//fetch
teste:{
  marginTop:30,
  alignItems: 'center',
  justifyContent: 'center',
},
  //borda redação
  bordaRedacao13334:{
    marginTop:20,
    backgroundColor: '#35AAFF',
    width: '110%',
    alignItems: 'center',
    borderRadius: 10,
  },
  bordaAcima13334: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2E1DB',
    borderRadius:33,
    height: '20%',
    marginTop: -20,
  },
texto13334:{
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default styles;
