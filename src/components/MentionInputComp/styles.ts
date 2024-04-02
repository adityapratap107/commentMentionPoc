import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputOuterContainer: {
        borderRadius: 30,
        paddingVertical: Platform.OS === 'android' ? 6 : 12,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
    },
    inputStyle: {
        paddingHorizontal: 16,
        fontSize: 15,
        padding: 6,
        color: 'black',
    },
    inputContainerStyle: {
        maxWidth: '78%',
        minWidth: '78%',
        // backgroundColor: 'lightgrey',

    },
    postContainer: {
        justifyContent: 'flex-end',
        bottom: Platform.OS === 'ios' ? 6 : 10,
    },
    postText: {
        fontWeight: '700',
        color: '#393d3a'
    },
    imageContainer: {
        left: 10,
        justifyContent: 'flex-end',
        bottom: Platform.OS === 'android' ? 4 : 0,
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30,
    },
    suggestionsContainer: {
        backgroundColor: 'white',
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 30,
        right: 10,
        shadowColor: '#000',
        shadowOffset: {height: 1, width:1},
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 8,
        width: 300,
        borderRadius: 8,
        maxHeight: 226,
        zIndex: 1,
    }
})
export default styles;