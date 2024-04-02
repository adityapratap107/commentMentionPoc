import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    commentHeadingView: {
        alignItems: 'center',
    },
    commentHeadingText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'grey'
    },
    commentContainer: {
        position: 'absolute',
        bottom: 12,
        marginLeft: 16,

    },
    flatlistStyle: {
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 16
        // backgroundColor: 'green'

    },
    commentOuterView: {
        flexDirection: 'row',
        marginTop: 16,
        width: Dimensions.get('screen').width / 1.3,
    },
    commentText: {
        marginTop: 16,
        flex: 1
    },
    comment: {
        fontSize: 15,
    },
    imageView: {
        marginRight: 10,
        bottom: 6
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 30,
    },
    myNameView: {
        justifyContent: 'flex-start',
        // top: 14,
        marginRight: 6
    },
    myNameText: {
        fontWeight: 'bold',
        color: 'black'
    },
    scrollViewContainerStyle: {
        flexGrow: 1,
        height: '100%',
        marginBottom: 20
        // backgroundColor: 'red'
    }
});


export default styles;