import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, SectionList, StatusBar, Text, View } from 'react-native';
import { isMentionPartType, parseValue, Part, PartType, replaceMentionValues } from 'react-native-controlled-mentions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MentionableTextInput from '../../components/MentionInputComp';
import { IMG_URL, PART_TYPES } from '../../utils/constants';
import styles from './styles';

const Comments = ({navigation}) => {
  const [comment, setComment] = useState<any>('');
  const [comments, setComments] = useState<any>([]);
  const [userData, setUserData] = useState<any>([]);
  const [myComment, setMyComment] = useState('');
  const scrollRef = useRef<any>(null);
  const handleInputChange = (text) => {
    setComment(text);
  };
  
  const handleAddComment = (data) => {
    if (comment.trim() !== '') {
      setMyComment(comment)
      setUserData(data);
      console.log('comment: ',comment);
      setComments([...comments, comment]);
      setComment('');
      scrollRef.current.scrollToEnd();

    }
  };

  const renderPart = (
    part: Part,
    index: number,
  ) => {
    // Just plain text
    console.log('parthere', part);
    if (!part.partType) {
      return(
        
        <Text style={{color: 'black' }} key={index}>{part.text}</Text>
      ) ;
    }
  
    // Mention type part
    if (isMentionPartType(part.partType)) {
      return (
        <Text
          key={`${index}-${part.data?.trigger}`}
          style={part.partType.textStyle}
          onPress={() => {
            console.log('Pressed', part.data)
            navigation.navigate('Profile', {
              name: part.data?.name
            })
          }}
        >
          {part.text}
        </Text>

      );
    }
  
    // Other styled part types
    return (
      <Text
        key={`${index}-pattern`}
        style={part.partType.textStyle}
      >
        {part.text}
      </Text>
    );
  };
  
  const renderValue: FC = (
    value: string,
    partTypes: PartType[],
  ) => {
    console.log('value', value);
    const {parts} = parseValue(value, partTypes);
    console.log('parts:', parts);
    return (
        
    <View style={{paddingHorizontal: 10}}>
      <Text style={{color: 'black'}}>{parts.map(renderPart)}</Text>
      </View>
    );
  };


  return (
    <>
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={styles.commentHeadingView}>
          <Text style={styles.commentHeadingText}>Comments</Text>
        </View>
       
        
        <KeyboardAwareScrollView 
        extraHeight={0}
        onMomentumScrollBegin={() => {
          Keyboard.dismiss();
        }}
        keyboardShouldPersistTaps={'handled'}
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={styles.scrollViewContainerStyle}
         >

        <View style={{ marginBottom: 50,}}>
         

        <FlatList
            data={comments}
            style={styles.flatlistStyle}
            keyExtractor={(item, index) => index.toString()}
            onMomentumScrollBegin={() => {
              Keyboard.dismiss();
            }}
            ref={scrollRef}
            renderItem={({ item }) => {
              console.log('ITEM', item);
              return(

                <View style={styles.commentOuterView}>
                   <View style={styles.imageView}>
                      <Image source={{uri: IMG_URL}} style={styles.image}/>
                    </View>
                    <View style={styles.myNameView}>
                      <Text style={styles.myNameText}>Me</Text>
                    </View>
                    {renderValue(item, PART_TYPES)}
                </View>
                )
            }}
          />


        </View>
            <View style={styles.commentContainer}>
                <MentionableTextInput
                  value={comment}
                  setValue={handleInputChange}
                  handleAddComment={handleAddComment}
                  />
            </View>

          </KeyboardAwareScrollView>

      </SafeAreaView>
    </>

  )
}

export default Comments;
