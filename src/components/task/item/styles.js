import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ( {

    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: '#151515',
        borderRadius: 10,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5, // para android
        justifyContent: 'center',
        marginVertical: 5,
    },
    listItemContainerOKey: {
        paddingVertical: 20,
        backgroundColor: '#2EC4B6',
        borderRadius: 10,
        shadowColor: "#fff",
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



});