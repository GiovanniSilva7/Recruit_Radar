import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',  // Fundo escurecido ao abrir o modal
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.7,  // Define a largura da barra lateral (70% da tela)
    height: height,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  closeSidebar: {
    alignSelf: 'flex-end',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: {
    fontSize: 16,
    color: '#007bff',
    paddingVertical: 10,
  },
});
