import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: 'contain',
    },
    photoContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    frame: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#F0F0F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraIcon: {
        width: 50,
        height: 50,
        tintColor: '#737380',
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#000',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    addPhotoText: {
        marginTop: 10,
        fontSize: 16,
        color: '#737380',
        textAlign: 'center',
    },
    buttonSend: {
        backgroundColor: '#0262A6',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20,
        alignItems: 'center',
    },
    textButtonSend: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    skipButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    textSkipButton: {
        color: '#737380',
        fontSize: 16,
    },
    profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});
