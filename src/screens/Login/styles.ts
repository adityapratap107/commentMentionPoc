import { Dimensions, StyleSheet } from "react-native";
import { actualDeviceWidth } from "../../utils/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems :'center',
    },
    innerContainer: {
        marginTop: 112,
    },
    logo: {
        height: 72,
        width: 72
    },
    headingView: {
        marginTop: 16,
    },
    headingText: {
        color: '#223263',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontWeight: '800'
    },
    subHeadingText: {
        textAlign: 'center',
        marginTop: 8,
        color: '#9098B1',
        fontSize: 12,
        lineHeight: 22,
        letterSpacing: 0.5
    },
    formView: {
        marginTop: 28,
    },
    buttonView: {
        marginTop: 16,
        alignItems: 'center'
    },
    forgotPasswordView: {
        marginTop: 28,
        alignItems: 'center',
    },
    blueBoldText: {
        color: '#40BFFF',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.5,
        top: 3

    },
    footerview: {
        marginTop: 8,
        top: 3
    },
    accountText: {
        color: '#9098B1',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: 0.5
    },
    errorMessageView: {
        width: actualDeviceWidth - 32
    },
    errorMessage: {
        color: '#FB7181',
        marginTop: 6,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.5,
        fontWeight: '700'
    }
})

export default styles;