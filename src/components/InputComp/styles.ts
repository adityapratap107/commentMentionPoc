import { Dimensions, StyleSheet } from "react-native";
import { actualDeviceWidth } from "../../utils/constants";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        marginTop: 4,
        paddingStart: 8,
        backgroundColor: 'white',
        width: actualDeviceWidth - 32,
    },
    textInputStyle: {
        flex: 1,
        color: '#9098B1',
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 0.5,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 18,
        height: 14,
        resizeMode: 'contain',
        margin: 10,
        alignItems: 'center',
    },
    icon: {
        height: 20,
        width: 20,
    },
    icon2: {
        height: 20,
        width: 20,
        marginRight: 16
    }
})

export default styles;