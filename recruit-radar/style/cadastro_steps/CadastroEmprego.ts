import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
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
    radioContainer: {
        marginBottom: 20,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#0262A6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#0262A6',
    },
    radioText: {
        fontSize: 16,
        color: '#000000',
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
        fontSize: 18,
        fontWeight: 'bold',
    },
});
