import React from "react"
import {View,StyleSheet, Dimensions} from "react-native";
import {Content ,Left , Body , ListItem , Thumbnail , Text } from 'native-base';

var widht = Dimensions.get("window").width;
const SearchProducts =(props)=>{
    const {products_s } = props;
    return(

        <Content style={{width : widht}}>
            { products_s.lenght > 0 ? (
            products_s.map((item)=>(
                    <ListItem
                    onpress ={navigate} 
                    key={item._id}
                    avatar
                    >
                        <Left>
                            <Thumbnail
                            source={{uri : item.image ? item.image : 'https://image.shutterstock.com/image-vector/blank-white-frame-realistic-icon-600w-1909350925.jpg'
                                    }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name} </Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
            ))
            ) : (
                <View style={styles.center}>
                    <Text style={{alignSelf: 'center'}}>
                    No Products match the selected Criteria 
                    </Text>
                </View>
                 
                
            )}
        </Content>
    );};


const styles=StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default SearchProducts;