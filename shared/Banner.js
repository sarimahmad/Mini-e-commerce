import { SwipeRow } from 'native-base';
import React, {useState, useEffect} from 'react'
import {Image, ScrollView, StyleSheet ,Dimensions , View} from "react-native"
import Swiper from 'react-native-swiper';


var widht = Dimensions.get('window').width;

const Banner = ()=>{
    const [bannerData, setBannerData]=useState([]);
    
    useEffect(()=>{
        setBannerData([ 'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=814&q=80',
                        'https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80',
                        'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
                     ])

        return ()=>{
            setBannerData([])
        }  

    },[])
    return(
        <ScrollView>
        <View style={styles.container}>
            <View stylr={styles.swiper}>
                <Swiper 
                style={{height: widht / 2}}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                {bannerData.map((item)=>{
                    return(
                        <Image
                        key={item}
                        style={styles.imagebanner}
                        resizeMode="contain"
                        source={{uri: item}}
                        />
                    )
                })}
                </Swiper>
                <View style={{height: 0}}></View>
            </View>
        </View>
        </ScrollView>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gainsboro',
    },
    swiper:{
        width: widht,
        alignItems: 'center',
        marginTop: 10,
    },
    imagebanner:{
        height: widht / 2,
        width: widht - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    }
})

export default Banner;


