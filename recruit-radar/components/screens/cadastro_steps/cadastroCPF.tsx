import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../../style/cadastro_steps/cadastroCPF';
import Header from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';


const cadastroCPF = () => {
    const [CPF, setCPF] = useState('');
    const [Bithday, setBithday] = useState('');
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const formatCPF = (value: string) => {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return value;
    };
    const formatBithday = (value: string) => {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        //value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return value;
    };
    const handleCEP = (text: string) => {
        const formattedCPF = formatCPF(text);
        setCPF(formattedCPF);
    }
    const handleBithday = (text: string) => {
        const formattedBithday = formatBithday(text);
        setBithday(formattedBithday);
    }

    const handleGender = () => {
          navigation.navigate('cadastroGender');
        
    }



    return (
        <View style={styles.container}>
            <Header showRightIcon={true} />
            <View style={styles.contentContainer}>
                <View style={styles.titlePrimaryContainer}>

                </View>
                <View style={styles.text1ContainerCPF}>
                    <Text style={styles.text1CPF}>
                        Adicione seu CPF
                    </Text>
                </View>

                <Text style={styles.label}>Digite seu CPF</Text>
                <TextInput
                    style={styles.inputCPF}
                    placeholder="000.000.000-00"
                    value={CPF}
                    onChangeText={handleCEP}
                    keyboardType="numeric"
                    maxLength={14}
                />

                  <View style={styles.text2ContainerBithday}>
                    <Text style={styles.text2Bithday}>
                        Adicione sua data de nascimento
                    </Text>
                </View>

                <Text style={styles.label}>Data de nascimento</Text>
                <TextInput
                    style={styles.inputBithday}
                    placeholder="00/00/0000"
                    value={Bithday}
                    onChangeText={handleBithday}
                    keyboardType="numeric"
                    maxLength={10}
                />

                <TouchableOpacity style={styles.buttonSend} onPress={handleGender}>
                    <Text style={styles.textButtonSend}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default cadastroCPF;
