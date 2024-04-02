import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 16,
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: width - 32,
        shadowColor: '#40BFFF',
        shadowOffset: {height: 5, width: 0},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 16
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 25,
        letterSpacing: 0.5
    }
})

export default styles;