import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, Pressable, Text, View, Alert   } from "react-native";

export default function Login({login, register}) {
    return (
        <ImageBackground source={require('../../assets/images/Login.png')} resizeMode="cover" style={styles.image} blurRadius={1}>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <Image source={require('../../assets/images/bus-logo.png')} style={styles.logo}/>
                    <Text style={styles.text}>
                        Sakay Queue
                    </Text>
                    <Pressable style={styles.buttonStyle} onPress={login}>
                        <Text style={styles.buttonLabel}>
                            Log In
                        </Text>
                    </Pressable>
                    <Text style={styles.normalText} onPress={register}>
                        No Account?
                        <Text style={styles.register}>
                            &thinsp; Register
                        </Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontSize: 33,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    transparent: {
        width: "80%",
        display: "flex",
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFFc0"
    },
    mainTransparent: {
        display: "flex",
        marginTop: 300,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: -30
    },
    register: {
        fontSize: 20,
        fontWeight: "700",
        color: "#177FF4"
    },
    normalText: {
        fontSize: 20,
        color: "black",
        marginBottom: 170,
    },
    buttonStyle: {
        width: "80%",
        display: "flex",
        marginTop: 100,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#177FF4",
    },
    buttonLabel: {
        padding: 8,
        fontSize: 20,
        color: "white",
        fontWeight: "700",
    },
});
