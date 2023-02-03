import React from "react"
import { Image,StyleSheet, SafeAreaView, View } from "react-native"


const Header= ()=>{
    return(
        <SafeAreaView style={styles.header}>
            <Image
            source={require('../assets/logo2.webp')}
            resizeMode="contain"
            style={{ height : 50}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        width : '10%',
        flexDirection:'row',
        alignContent: 'center',
        justifyContent : 'center',
        padding : 5,
    }
    

})


export default Header; 