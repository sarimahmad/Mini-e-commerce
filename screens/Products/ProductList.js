
import React from 'react';
import { StyleSheet, SafeAreaView,Text, View,  TouchableOpacity, Dimensions } from 'react-native';

import ProductCart from './ProductCart'


var   widht   = Dimensions.get("window").width;

const ProductList=(props)=>{
    const { item } = props;
    return(
        <SafeAreaView>
        <TouchableOpacity style={{width: '50%' }}>
        
            <View style={{width: widht / 2}}>
                
                
                <ProductCart {...item} />
               
            </View>
             </TouchableOpacity>
             </SafeAreaView>


    )
}


export default ProductList;
 