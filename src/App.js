import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/99774430?v=4';
const urlToMyGithub = 'https://github.com/Suellen-Kathlen';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link....');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel='Suellen'
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text style={[style.defaultText, style.name, { color: 'red' }]}>Suellen Kathlen Teixeira</Text>
                <Text style={[style.defaultText, style.nickname]}>Suellen-Kathlen</Text>
                <Text style={[style.defaultText, style.description]}>Estudante em Análise e Desenvolvimento de Sistemas. Inglês, noções de HTML, CSS, JavaScript, Python, SQL, GIT.</Text>


                <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
    },
    content: {
        alignItems: 'flex-start',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    nickname: {
        fontSize: 16,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        marginTop: 25,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        width: 150,
        color: 'white',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});