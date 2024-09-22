import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      fontFamily: 'Lora-Bold',
      backgroundColor: '#FFFFFF',
      padding: 16,
      width: '100%',
      height: '100%',
      flex: 1,
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      backIcon: {
        width: 35,
        height: 35,
        tintColor: '#0262A6',
      },
      rightIcon: {
        width: 35,
        height: 35,
        tintColor: '#0262A6', 
      },
}
);