import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    contentContainer: {
        paddingBottom: 30, // para permitir scroll até o final
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 16,
        color: '#737380',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    addButton: {
        backgroundColor: '#0262A6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Para que os itens quebrem a linha
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 10,
        marginBottom: 10,
        width: 170, // Largura atualizada
        height: 31, // Altura atualizada
        justifyContent: 'center', // Centralizar texto verticalmente
    },
    tagText: {
        color: '#000',
        textAlign: 'center', // Centralizar texto horizontalmente
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
    buttonSend: {
        backgroundColor: '#0262A6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    textButtonSend: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
