import { Dimensions } from "react-native";

export const BASE_URL = "https://jsonplaceholder.typicode.com/users";
export const IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Plain_Disc_60%25_grey_or_30%25_black.svg/460px-Plain_Disc_60%25_grey_or_30%25_black.svg.png'
export const PART_TYPES = [
    {
      trigger: '@', // Should be a single character like '@' or '#'
      isInsertSpaceAfterMention: true,
      textStyle: {fontWeight: '600', color: '#18aaba'}, // The mention style in the input
    },
  ]

  export function isEmptyTextField(text) {
    return text?.trim() === "";
  }

  export const _validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

export const {width: actualDeviceWidth, height: actualDeviceHeight} = Dimensions.get('window');   
