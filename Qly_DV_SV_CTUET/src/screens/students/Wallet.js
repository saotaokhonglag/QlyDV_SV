import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Wallet = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='#2F85F8' />
            <View style={styles.circleShape}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="md-chevron-back-sharp" size={28} style={{ color: 'white' }} />
                    </TouchableOpacity>

                    <View style={{ paddingLeft: 10, fontSize: '18' }}>
                        <Text style={styles.text}>Ví</Text>
                    </View>
                    <TouchableOpacity style={{ paddingStart: '40%' }}>
                        <AntDesign name="setting" size={28} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <View>
                    </View>
                </View>
                <Text style={styles.money}>0đ</Text>
            </View>
            <View style={styles.Wallet}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <MaterialCommunityIcons name="wallet-plus" size={45} style={{ marginBottom: 10, color: 'black' }} />
                    <Text style={{ color: '#2F85F8', fontSize: 18 }}>Nạp Tiền</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.history}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Giao dịch gần nhất</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        fontFamily: 'sans-serif'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingStart: 20

    },
    circleShape: {
        width: '100%',
        height: '20%',
        borderRadius: 110 / 2,
        backgroundColor: '#2F85F8',
        marginTop: -50,
        justifyContent: 'center',

    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        paddingLeft: '35%'
    },
    money: {
        color: '#FCF4F4FF',
        fontSize: 20,
        paddingLeft: '10%'
    },
    Wallet: {
        width: '90%',
        height: 100,
        borderRadius: 40 / 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        marginTop: -45,
        borderWidth: 0.5,
        justifyContent: 'center',
     
    },
    history:{
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingLeft: 10, 
        marginTop: 30
    }
})


export default Wallet