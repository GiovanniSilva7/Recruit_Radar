import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../../style/cadastro_steps/CadastroEmprego';
import Header from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from '@react-navigation/stack';

const CadastroEmprego = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleSelection = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextStep = () => {
        if (selectedOption) {
            navigation.navigate('CadastroCargo');
        } else {
            alert("Por favor, selecione uma opção.");
        }
    };

    return (
        <View style={styles.container}>
            <Header showRightIcon={true} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    Você está procurando emprego?
                </Text>
                <Text style={styles.subTitle}>
                    Recrutadores irão ver sua resposta.
                </Text>

                <View style={styles.radioContainer}>
                    <TouchableOpacity style={styles.radioOption} onPress={() => handleSelection('sim')}>
                        <View style={styles.radioCircle}>
                            {selectedOption === 'sim' && <View style={styles.selectedRb} />}
                        </View>
                        <Text style={styles.radioText}>Sim, estou em busca de novas oportunidades profissionais.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.radioOption} onPress={() => handleSelection('nao')}>
                        <View style={styles.radioCircle}>
                            {selectedOption === 'nao' && <View style={styles.selectedRb} />}
                        </View>
                        <Text style={styles.radioText}>Não, mas estou aberto(a) a considerar se surgir a oportunidade certa.</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonSend} onPress={handleNextStep}>
                    <Text style={styles.textButtonSend}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CadastroEmprego;
