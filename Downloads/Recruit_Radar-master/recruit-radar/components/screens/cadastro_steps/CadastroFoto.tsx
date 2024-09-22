import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../../style/cadastro_steps/CadastroStylesFoto';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import Header from '../componentsScreen/Header';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CadastroFoto = () => {
    const [photoUri, setPhotoUri] = useState<string | null>(null); // Estado para armazenar a URI da foto capturada
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleNextStep = () => {
        navigation.navigate('Jobs'); // Navega para a próxima tela
    };

    const handleSkipStep = () => {
        navigation.navigate('Jobs'); // Navega para a próxima tela ao pular
    };

    // Função para capturar a foto
    const handleCapturePhoto = () => {
        const options = {
            mediaType: 'photo',
            saveToPhotos: true, // Salvar no rolo da câmera
            cameraType: 'back',
        };

        launchCamera(options, (response) => {
            if (response.assets && response.assets.length > 0) {
                setPhotoUri(response.assets[0].uri); // Define a URI da foto capturada
            }
        });
    };

    return (
        <View style={styles.container}>
            <Header showRightIcon={true} />
            

            <View style={styles.photoContainer}>
                <View style={styles.frame}>
                    {photoUri ? (
                        <Image source={{ uri: photoUri }} style={styles.profilePhoto} /> // Exibe a foto capturada
                    ) : (
                        <Image
                            source={require('../../../assets/simbolo-de-interface-de-camera-fotografica-para-botao.png')} // Ícone da câmera
                            style={styles.cameraIcon}
                        />
                    )}
                    <TouchableOpacity style={styles.addButton} onPress={handleCapturePhoto}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.addPhotoText}>Adicionar foto de Perfil?</Text>
            </View>

            <TouchableOpacity style={styles.buttonSend} onPress={handleNextStep}>
                <Text style={styles.textButtonSend}>Avançar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipButton} onPress={handleSkipStep}>
                <Text style={styles.textSkipButton}>Pular</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CadastroFoto;
