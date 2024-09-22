import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    photoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    frame: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F0F0F5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    cameraIcon: {
        width: 40,
        height: 40,
        tintColor: '#737380',
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        right: -5,
        backgroundColor: '#000',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0262A6',
    },
    infoContainer: {
        marginVertical: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: '#000',
    },
    infoText: {
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#0262A6',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    nextButton: {
        backgroundColor: '#0262A6',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0262A6',
    },
    tabbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#F0F0F5',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
    tabText: {
        fontSize: 12,
        color: '#737380',
        textAlign: 'center',
        marginTop: 5,
    },
    profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});
