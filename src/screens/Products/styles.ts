import { Dimensions, StyleSheet } from "react-native";
import { actualDeviceWidth } from "../../utils/constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems :'center',
    },
    searchContainer: {
        marginTop: 17,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    line: {
        height: 1,
        width: actualDeviceWidth,
        backgroundColor: '#EBF0FF',
        marginTop: 17
    },
    suggestionText: {
        color: '#9098B1'
    },
    icons: {
        height: 24,
        width: 24,
    },
    iconView: {
        marginLeft: 16
    },
    micIconView: {
        marginRight: 16
    },
    loveBellIconsView: {
        flexDirection: 'row',
        marginRight: 16
    }
})

export default styles;