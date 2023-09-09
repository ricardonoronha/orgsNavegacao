import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Produtores({ melhoresProdutores = false }) {
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores } = useTextos();
  const navegacao = useNavigation();
  const route = useRoute();

  const nomeCompra = route.params?.compra.nome;
  const timestamp = route.params?.compra.timestamp;

  const [exibirMensagem, setExibirMensagem] = useState(false);

  console.log(route.params?.compra);

  useEffect(() => {

    setExibirMensagem(!!nomeCompra);

    let timeout;

    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibirMensagem(false);
      }, 3000);
    }

    return ()=> clearTimeout(timeout);
    
  }, [timestamp]);

  const irParaProdutor = (produtor) => {

    console.log("produtor", produtor);
    navegacao.navigate("ProdutorScreen", produtor);
  };


  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {exibirMensagem && <Text style={estilos.nomeCompra}>{nomeCompra}, agradecemos pela preferência, volte sempre!!!</Text>}
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item} aoPressionar={() => irParaProdutor(item)} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  nomeCompra: {
    fontSize: 16,
    lineHeight: 26,
    backgroundColor: "#29B52D",
    color: "white",
    padding: 16,
    margin: 16,
    textAlign: "center"

  }
})
