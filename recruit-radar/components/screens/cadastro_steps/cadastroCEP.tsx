import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../../style/cadastro_steps/cadastroCEP';
import Header from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';


const cadastroCEP = () => {
    const [CEP, setCEP] = useState('');
    const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
    const formatCEP = (value: string) => {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');

        return value;
    }
    const handleCEP = (text: string) => {
        const formattedCEP = formatCEP(text);
        setCEP(formattedCEP);
    }

    const handleCPF = () => {
        navigator.navigate('cadastroCPF');
    }



    return (
        <View style={styles.container}>
            <Header showRightIcon={true} />
            <View style={styles.contentContainer}>
                <View style={styles.titlePrimaryContainer}>

                </View>
                <View style={styles.text1PasswordEmail}>
                    <Text style={styles.text1Password}>
                        Adicione seu CEP
                    </Text>
                </View>

                <Text style={styles.label}>Digite seu CEP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="00000-000"
                    value={CEP}
                    onChangeText={handleCEP}
                    keyboardType="numeric"
                    maxLength={9}
                />

                <TouchableOpacity style={styles.buttonSend} onPress={handleCPF}>
                    <Text style={styles.textButtonSend}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default cadastroCEP;
