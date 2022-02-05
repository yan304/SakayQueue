import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TextInput, StyleSheet, Pressable, Text, View, Alert   } from "react-native";

export default function InputLogin({register, forgot}) {
    const [username, onUsernameChange] = useState("");
    const [password, onPasswordChange] = useState("");
    return (
        <View style={styles.mainTransparent}>
            <View style={styles.transparent}>
                <Text style={styles.text}>
                    Welcome Back!
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onUsernameChange}
                        value={username}
                        placeholder="   Username"
                    />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onPasswordChange}
                        value={password}
                        placeholder="   Password"
                    />
                </View>
                <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.buttonLabel}>
                        Log In
                    </Text>
                </Pressable>
                <View style={styles.forgotStyles}>
                    <Text style={styles.register} onPress={forgot}>
                        Forgot Password
                    </Text>
                </View>
                <View style={styles.registerStyles}>
                    <Text style={styles.normalText} onPress={register}>
                        No Account?
                        <Text style={styles.register}>
                            &thinsp; Register
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 45,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 70,
        marginTop: -150
    },
    transparent: {
        width: "80%",
        display: "flex",
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFFc0"
    },
    mainTransparent: {
        display: "flex",
        marginTop: 300,
        alignItems: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 80,
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
    input: {
        height: 40,
        margin: 12,
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        padding: 10,
    },
    inputLabel: {
        textAlign: "left",
        marginLeft: 15,
        fontSize: 20
    },
    inputContainer: {
        marginLeft: -10
    },
    register: {
        fontSize: 15,
        fontWeight: "700",
        color: "#177FF4"
    },
    normalText: {
        fontSize: 15,
        color: "black",
        marginBottom: 170,
    },
    registerStyles: {
        display: "flex",
        alignItems: "center"
    },
    forgotStyles: {
        display: "flex",
        alignItems: "center",
        marginBottom: 70
    }
});
