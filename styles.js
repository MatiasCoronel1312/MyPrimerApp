import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 40,
    },
    input: {
        width: '80%',
        borderBottomWidth : 1,
        borderBottomColor: '#2E2E2E',
        color:'#ffffff',

    },
    listContainer: {
        marginHorizontal: 20,
    },
    listTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#151515',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 15, // para android
        justifyContent: 'center',
        marginVertical: 5,
    },
    listItem: {
        fontSize: 16,
        color: '#ffffff',
        paddingHorizontal: 10,
    },
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