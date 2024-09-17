import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../../style/DadosPessoaisStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import Header from '../componentsScreen/Header';
import Navbar from "../componentsScreen/Navbar";


const DadosPessoais = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const handleCapturePhoto = () => {
        // Função para capturar foto (pode usar o ImagePicker aqui)
    };

    const handleSave = () => {
        // Função para salvar as informações
    };

    const handleNextStep = () => {
        //navigation.navigate(''); // Alterar para a próxima tela
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.contentContainer}>
                {/* Foto de Perfil */}
                <View style={styles.photoContainer}>
                    <View style={styles.frame}>
                        {photoUri ? (
                            <Image source={{ uri: photoUri }} style={styles.profilePhoto} />
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
                    <Text style={styles.userName}>Vanessa Silva</Text>
                </View>

                {/* Informações do usuário */}
                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Image source={require('../../../assets/calendar_icon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>25 abr 2001</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={require('../../../assets/cpf_icon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>375.584.123-45</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={require('../../../assets/email_icon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>vanessa.silva2001@hotmail.com</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={require('../../../assets/phone_icon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>(11) 99566-8475</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={require('../../../assets/location_icon.png')} style={styles.icon} />
                        <Text style={styles.infoText}>Rua Frei João, 29 - Vila Nair, São Paulo - SP</Text>
                    </View>
                </View>

                {/* Botões */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Navbar />
        </View>
    );
};

export default DadosPessoais;
