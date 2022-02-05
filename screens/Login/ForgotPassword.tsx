import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {TextInput, StyleSheet, Pressable, Text, View, Alert, Image} from "react-native";

export default function ForgotPassword({back}) {
    const [email, onEmailChange] = useState("");
    return (
        <View>
            <View style={styles.backButton}>
                <Text style={styles.inputLabel} onPress={back}>Forgot Password</Text>
            </View>
            <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                    <View style={styles.inputContainer}>
                        <View style={styles.centerForgotDescription}>
                            <Image source={require('../../assets/images/exclamation.png')} style={styles.logo}/>
                            <Text style={styles.forgotFont}>ForgotPassword</Text>
                            <Text style={styles.inputLabel}>Enter Your Email Address</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onEmailChange}
                            value={email}
                            placeholder="   Email Address"
                        />
                    </View>
                    <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Reset Password is currently on Fix')}>
                        <Text style={styles.buttonLabel}>
                            Reset Password
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    transparent: {
        width: "100%",
        display: "flex",
        padding: 50,
        paddingTop: 100,
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 15,
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
        fontSize: 18,
        marginBottom: 10,
    },
    inputContainer: {
        marginLeft: -10,
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
    },
    backButton: {
        backgroundColor: "#F3F1F1",
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 10,
    },
    forgotFont: {
        fontSize: 28,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "700",
    },
    centerForgotDescription: {
        display: "flex",
        alignItems: "center"
    }
});
