import React from 'react';
import { 
    Text,View,StyleSheet,SafeAreaView,Dimensions,Image,Button
 } from 'react-native';

var  width  = Dimensions.get("window").width;

const ProductCart=(props)=>{
    const { name  , price ,image , countInStock }=props;
    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.image}
             resizeMode="contain"
             source={{uri : image ? image : 'https://image.shutterstock.com/image-vector/blank-white-frame-realistic-icon-600w-1909350925.jpg'}}
            />
            <View style={styles.Cart}/>
            <Text style={styles.title}>
                {name.lenght > 15 ? name.substring(0, 15 - 3) 
                        + '...' : name}
            </Text>
            <Text style={styles.price}>
                RS {price}
            </Text>
            { countInStock > 0 ? (
                <View style={{ marginBottom : 60}}>
                    <Button title={'ADD'}
                    color={'green'}/>
                </View>
            ) : <Text style={{ marginTop: 20}}> Currently Unavailable</Text>}
        </View>
        </SafeAreaView>
    )}
const styles = StyleSheet.create({
    container:{
        width: width / 2 - 15,
        height: width / 1.7,
        padding: 10,
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 2,
        marginLeft: 10,
        alignItems:'center',
        elevation: 8,
        backgroundColor:'white'
    },
    image:{
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor:'transparent',
        position:'absolute',
        marginTop: 45,
        top: -45
    },
    Cart:{
        marginBottom: 10,
        height: width / 2 - 20 - 45,
        backgroundColor:'transparent',
        width: width / 2 - 20 - 10
    },
    title:{
        fontWeight:'bold',
        fontSize: 14,
        textAlign:'center',
    },
    price:{
        fontSize: 20,
        color:'orange',
        marginTop: 10
    },
})
export default ProductCart; 