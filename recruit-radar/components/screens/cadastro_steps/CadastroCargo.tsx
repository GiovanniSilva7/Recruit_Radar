import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox'; // Importando o CheckBox correto

import { styles } from '../../../style/cadastro_steps/CadastroCargo';
import Header from "../componentsScreen/Header";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from '@react-navigation/stack';

const CadastroCargo = () => {
    const [jobs, setJobs] = useState<string[]>(['Product Owner']); // Cargos adicionados
    const [locations, setLocations] = useState<string[]>(['São Paulo', 'Brasília']); // Localizações adicionadas
    const [newJob, setNewJob] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [remoteWork, setRemoteWork] = useState(false);

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    // Função para adicionar cargo
    const addJob = () => {
        if (newJob && jobs.length < 5) {
            setJobs([...jobs, newJob]);
            setNewJob('');
        }
    };

    // Função para adicionar localidade
    const addLocation = () => {
        if (newLocation && locations.length < 5) {
            setLocations([...locations, newLocation]);
            setNewLocation('');
        }
    };

    const handleNextStep = () => {
        // Validação e navegação
        if (jobs.length > 0 && locations.length > 0) {
            navigation.navigate('CadastroFoto');
        } else {
            alert("Por favor, adicione pelo menos um cargo e uma localidade.");
        }
    };

    return (
        <View style={styles.container}>
            <Header showRightIcon={true} />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>Que tipo de emprego você está procurando?</Text>
                <Text style={styles.subTitle}>Selecione até 5 cargos e localidades.</Text>

                {/* Cargos */}
                <Text style={styles.label}>Cargos*</Text>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="+ Adicionar cargo"
                        value={newJob}
                        onChangeText={setNewJob}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addJob}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tagsContainer}>
                    {jobs.map((item, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{item}</Text>
                        </View>
                    ))}
                </View>

                {/* Localidades */}
                <Text style={styles.label}>Localidade da vaga*</Text>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="+ Adicionar localidade"
                        value={newLocation}
                        onChangeText={setNewLocation}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addLocation}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tagsContainer}>
                    {locations.map((item, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{item}</Text>
                        </View>
                    ))}
                </View>

                {/* Checkbox para trabalho remoto */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={remoteWork}
                        onValueChange={setRemoteWork}
                    />
                    <Text style={styles.checkboxLabel}>Buscando trabalho remoto</Text>
                </View>

                {/* Botão de avançar */}
                <TouchableOpacity style={styles.buttonSend} onPress={handleNextStep}>
                    <Text style={styles.textButtonSend}>Avançar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default CadastroCargo;
