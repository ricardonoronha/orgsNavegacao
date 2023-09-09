
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import useTextos from "../../hooks/useTextos";
import Topo from "../../componentes/Topo";
// imports
import topoImg from "../../assets/produtores/topo.png";
import Cesta from "./componentes/Cesta";


export default function Produtor() {
    const route = useRoute();
    const { tituloProdutor, tituloCestas } = useTextos();
    const { nome, imagem, cestas } = route.params
    console.log(route.params);

    // const imagem = topoImg;
    // const nome = "Ricardo";
    // const cestas = [];

    const TopoLista = () => {
        return <>
            <Topo titulo={tituloProdutor} altura={150} imagem={topoImg} />
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage} />
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>
                <Text style={estilos.cestas}>{tituloCestas}</Text>
            </View>
        </>
    };

    return <FlatList
        data={cestas}
        ListHeaderComponent={TopoLista}
        renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />} />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
