import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#410061',
        backgroundColor: 'red',
    },
    text: {
        fontSize: 40,
        color: 'white',
        fontWeight: '800'
    },
    headerView: {
        marginTop: 64,
    },
    innerview: {
        marginTop: 64,
        width: '90%'
    },
    formText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center'
    },
    textinput: {
        backgroundColor: 'white',
        paddingVertical: 12,
        marginTop: 16,
        borderRadius: 24,
    },
    passwordView: {
        marginTop: 32,
        width: '90%'
    },
    forgotText: {
        color: 'pink',
        textAlign: 'center',
        fontWeight: '800'
    },
    LoginBtn: {
        paddingVertical: 12,
        backgroundColor: 'lightgrey',
        width: 260,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        borderRadius: 24
    },
    loginText: {
        fontSize: 20,
        fontWeight: '600'
    }
});


export default styles;