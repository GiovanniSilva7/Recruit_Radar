import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    justifyContent: 'center',
  },
  content:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  genderOptions: {
    marginVertical: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  genderText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000',
  },
  buttonContinue: {
    backgroundColor: '#0262A6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  textButtonContinue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
