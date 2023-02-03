import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { StyleSheet,  View, ActivityIndicator, FlatList } from 'react-native'
import {Container , Header, Icon , Item ,Input , Text} from 'native-base'
import ProductList from './ProductList';
import SearchProducts from './SearchedProducts';
import Banner from '../../shared/Banner';
import CategoryFilter from './categoryFilter'
const data= require('./products.json');
const categories=require('./094 categories.json');
 
const MyProductContainer = ()=>{
    const [products, setProducts]=useState([]);
    const [productsFilter , setProductsFilter] = useState([]);
    const [focus , setFcous]=useState();
    const [category, setCategory]=useState([]);
    const [active, setActive]=useState();
    const [initialstate, setInitialstate]=useStat([]);


    
    useEffect(() => {
        setProducts(data);
        setProductsFilter(data);
        setFcous(false);
        setCategory(categories)
        setActive(-1)
        setInitialstate(data)

        return () => {
            setProducts([])
            setProductsFilter([])
            setFcous()
            setCategory()
            setActive()
            setInitialstate()
        }
    }, [])

    const searchProduct =(text)=>{
        setProductsFilter(
            products.filter((i) => i.name.toLowerCase().match(text))
        )
    }
    const openList = ()=>{
        setFcous(true);
    }
    const onBlur = ()=>{
        setFcous(false); 
    }

    return(
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input  placeholder="Search"
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                    />
                    { focus ==true ?(
                    <Icon onPress={onBlur} name="ios-close"/>
                    ) : null
                    }

                </Item>
            </Header>
            {focus == true ? (
                <SearchProducts
                products_s={ productsFilter }
                />
            ) : (
                <View style ={styles.container}>
                    <View>
                        <Banner />
                    </View>
                    <View>
                        <CategoryFilter />
                    </View>
                <View style={styles.listcontainer}>
                <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <ProductList 
                        key={item.id}
                        item={item}/>}
                keyExtractor={item => item.name}
                />
                </View>
                </View>

            )}
        
        </Container>

    )
}
const styles= StyleSheet.create({
    container:{
        flexWrap :'wrap',
        backgroundColor: "gainsboro",
    },
    listcontainer:{
        width: "100%",
        flex: 1,
        flexDirection :'row',
        alignItems : 'flex-start',
        flexWrap : 'wrap',
        backgroundColor : 'gainsboro',
    }

})

export default MyProductContainer;