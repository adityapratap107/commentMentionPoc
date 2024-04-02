import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { MentionInput, MentionSuggestionsProps } from 'react-native-controlled-mentions';
import { BASE_URL } from '../../utils/constants';
import styles from './styles';



const MentionableTextInput = ({ value, setValue, handleAddComment, userData }) => {
    const [data, setData] = useState<any>([]);
    
    useEffect(() => {
      const obj =  [{
        "address": {
          "city": "Gwenborough",
          "geo": [
            Object
          ],
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "zipcode": "92998-3874"
        },
        "company": {
          "bs": "harness real-time e-markets",
          "catchPhrase": "Multi-layered client-server neural-net",
          "name": "Romaguera-Crona"
        },
        "email": "Sincere@april.biz",
        "id": 2,
        "name": "Abc def ghi jkl",
        "phone": "1-770-736-8031 x56442",
        "username": "Bret",
        "website": "hildegard.org"
      },
      {
        "address": {
          "city": "Gwenborough",
          "geo": [
            Object
          ],
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "zipcode": "92998-3874"
        },
        "company": {
          "bs": "harness real-time e-markets",
          "catchPhrase": "Multi-layered client-server neural-net",
          "name": "Romaguera-Crona"
        },
        "email": "Sincere@april.biz",
        "id": 2,
        "name": "Abc def ghi jkl fhksfhkjsfdhskjf d",
        "phone": "1-770-736-8031 x56442",
        "username": "Bret",
        "website": "hildegard.org"
      },
    ];
        axios.get(BASE_URL).then(res => {
            setData(res.data);
            // setData(obj)
        })
    }, []);

    const renderSuggestions: FC<MentionSuggestionsProps> = ({keyword, onSuggestionPress}) => {
        if (keyword == null) {
          return null;
        }
      
        return (
         
          <View style={styles.suggestionsContainer} >
            <ScrollView automaticallyAdjustContentInsets 
            nestedScrollEnabled
              contentContainerStyle={{
                flexGrow:1, 
                // backgroundColor: 'green',
                }}
            >
              {data
                .filter(one => one?.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
                .map(one => (
                  <Pressable
                    key={one?.id}
                    onPress={() => onSuggestionPress(one)}
                    style={{padding: 12}}
                  >
                    <Text style={{color: 'black'}}>{one?.name}</Text>
                  </Pressable>
                ))
              }

            </ScrollView>

           </View>
        );
      };

    return (
      <View style={styles.inputOuterContainer}>
        <View style={styles.imageContainer}>
            <Image source={{uri: 'https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png'}} style={styles.image}/>
        </View>
        <MentionInput
          value={value}
          onChange={setValue}
          placeholderTextColor={'grey'}
          placeholder="Post your comment here.."
          style={styles.inputStyle}
          containerStyle={styles.inputContainerStyle}
          multiline
          partTypes={[
            {
              trigger: '@', // Should be a single character like '@' or '#'
              renderSuggestions,
              isInsertSpaceAfterMention: true,
              textStyle: {fontWeight: '600', color: '#18aaba'}, // The mention style in the input
            },
          ]}
        />
         <Pressable style={styles.postContainer} onPress={() => handleAddComment(data)} >
            <Text style={styles.postText}>POST</Text>
          </Pressable>
      </View>
    );
  };
  
  export default MentionableTextInput;
