import { View, Text, ScrollView, Button, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const AddOrder = () => {

  const [hasPermision, sethHasPermision] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  const askForCameraPermision = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      sethHasPermision(status == 'granted')
    })()
  }

  useEffect(() => {
    askForCameraPermision();
  }, []);

  // What happens when ew scan code

  const handleBarCodeScaner = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log('Type:' + type + '\nData: ' + data);
  }

  // Check permission and return the screens
  if (hasPermision === null) {
    return (
      <View style={styles.container}>
        <Text>Yêu cầu sử dụng camera</Text>
      </View>
    )
  }

  if (hasPermision === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Không thể truy cập camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermision} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#2F85F8' />
      <View style={styles.circleShape}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="md-chevron-back-sharp" size={28} style={{ color: 'white' }} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Tạo hóa đơn</Text>
        </View>
      </View>
      <View style={styles.barCodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScaner}
          style={{ height: 600, width: 400 }}
        />
      </View>
      <Text>{text}</Text>
      {scanned && <Button title={'Scanner Again?'} onPress={() => setScanned(false)} color='tomato' />}
      <ScrollView style={{ width: '100%', backgroundColor: '#fff' }}>
        <View style={styles.products}>
          <View style={styles.imageProducts}>
            <ImageBackground
              source={{
                uri: 'https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg',
              }}
              style={{ height: 65, width: 65 }}
            />
            <Text style={{ paddingLeft: 20, fontSize: 15 }}>My tom</Text>
          </View>
          <View style={styles.priceProducts}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, paddingStart: 50 }}>20.000</Text>
              <View style={{ flexDirection: 'row', marginTop: 2 }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='minus-circle-outline' color={'#2F85F8'} size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 2 }}>2</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='plus-circle-outline' size={30} color={'#2F85F8'} style={{ marginLeft: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.buttonCT, { paddingStart: 20 }]}>
        <Text style={styles.text}>40.000đ</Text>
        <Text style={[styles.text, { paddingStart: '50%' }]}>Tiếp tục</Text>
      </TouchableOpacity>
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
  circleShape: {
    width: '100%',
    height: 80,
    backgroundColor: '#2F85F8',
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 20
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingStart: '25%'
  },
  barCodeBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'tomato',
    marginTop: 30
  },
  buttonCT: {
    width: '90%',
    height: 55,
    borderRadius: 15,
    backgroundColor: '#2F85F8',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  products: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1
  },
  imageProducts: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
  },
  priceProducts: {
    alignContent: 'center',
    marginLeft: 50,
    width: 200
  }
})

export default AddOrder