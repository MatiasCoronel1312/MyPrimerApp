import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ( {

    modalContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: '#2E2E2E',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 15, // para android
        marginHorizontal: 10,
    },           
    modalTitle : {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff'
    },
    modalDetailContainer : {
        paddingVertical: 20,
    },
    modalDetailText : {
        fontSize: 14,
        color: '#ffffff'
    },
    selectTask : {
        textAlign: 'center',
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
        
    },
    modalButtonContainer : {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },



});