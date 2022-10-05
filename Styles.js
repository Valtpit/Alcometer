import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerLight: {
        flex: 1,
        alignItems: "baseline",
        backgroundColor: "#ffffff",
        padding: 25,
        color: "#f27a72"
    },
    containerDark: {
        flex: 1,
        alignItems: "baseline",
        backgroundColor: "#3c3940",
        padding: 25,
        color: "#fff"
    },
    headingLight: {
        alignSelf: "center",
        color: "#bb92f0",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20
    },
    headingDark: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20
    },
    textLight: {
        paddingTop: 10,
        color: "#bb92f0",
        fontWeight: "bold",
    },
    textDark: {
        paddingTop: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    labelDark: {
        color: "#fff",
        fontWeight: "bold",
    },
    labelLight: {
        color: "#bb92f0",
        fontWeight: "bold",
    },
    textInput: {
        backgroundColor: "#e0dcdc",
        borderRadius: 5,
        width: "100%",
        paddingLeft: 5,
        alignSelf: "center",
    },
    padding: {
        paddingTop: 15,
    },
    button: {
        alignSelf: "center",
        backgroundColor: "#bb92f0",
        width: "80%",
        paddingVertical: 30,
        borderRadius: 5,
        borderWidth: 1,
    },
    buttonText: {
        alignSelf: "center",
        color: "#000",
        fontWeight: "bold",
    }
});