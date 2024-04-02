import React, { useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native'
import InputComponent from '../../components/InputComp/InputComponent';
import { actualDeviceWidth } from '../../utils/constants';
import styles from './styles';
const DATA = [
    {
        id: 1,
        name: 'Nike Shoes'
    },
    {
        id: 2,
        name: 'Nike Air Vapormax 360'
    },
    {
        id: 3,
        name: 'Nike Air Max 270 React ENG'
    },
    {
        id: 4,
        name: 'Nike Air VaporMax Flyknit 3'
    },
]

const ProductScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false);
  
    const handleInputChange = (text) => {
        setSearchTerm(text);
                const filteredSuggestions = DATA.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase())
                );
                console.log('filteredSuggestions', filteredSuggestions);
                setSuggestions(filteredSuggestions);
    };

  
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'}/>
    <View style={styles.searchContainer}>

    <InputComponent
          placeholderValue={'Search Product'}
            inputStyle={{borderColor: searchFocus ? '#40BFFF' : '#EBF0FF', width: searchTerm.length > 0 ? actualDeviceWidth / 1.3 :  actualDeviceWidth / 1.4}}
          placeholderTextColor={'#9098B1'}
          autoCapitalize={'none'}
          secureTextEntry={false}
          value={searchTerm}
          returnKeyType={'next'}
          onChangeText={handleInputChange}
          onFocus={() => {
            setSearchFocus(true);
          }}
          blurOnSubmit={false}
          imgPath={require('../../assets/images/Search.png')}
          rightIconPath={require('../../assets/images/Cross.png')}
          isClearIcon={searchTerm.length > 0}
          onRightIconPress={() => {
            setSearchTerm('')
          }}
        />

        {
            searchTerm.length > 0 ? (
                <Pressable style={styles.micIconView}>
                    <Image source={require('../../assets/images/Mic.png')} style={styles.icons} />
                 </Pressable>
            ) : (
                <View style={styles.loveBellIconsView}>
                <Pressable style={styles.iconView}>
                <Image source={require('../../assets/images/love.png')} style={styles.icons} />
            </Pressable>
            <Pressable style={styles.iconView}>
                <Image source={require('../../assets/images/Group.png')} resizeMode={'center'} style={styles.icons} />
            </Pressable>
            </View>

            )
        }
       


    </View>

        {searchTerm && suggestions?.length > 0 ? (
            <>
                <View style={styles.line}/>
            <FlatList
            style={{marginLeft: 16}}
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                console.log('items', item)
                return(
                    <View style={{marginTop: 32}}>
                        <Text style={styles.suggestionText}>{item?.name}</Text> 
                    </View>
                )
            }}
        />
        </>

        ) : null}

        <View style={styles.line}/>
      
    </SafeAreaView>
  )
}

export default ProductScreen
