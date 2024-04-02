import {Image, Pressable, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';

interface TextInputProps {
  placeholderValue: string;
  keyboardType: string;
  autoCapitalize: string;
  onChangeText: (param: any) => void;
  inputStyle?: ViewStyle;
  placeholderTextColor: string;
  value: string;
  secureTextEntry?: boolean;
  inputRef: object;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
  returnKeyType?: string;
  imgPath?: string;
  blurOnSubmit?: boolean;
  isClearIcon?: boolean;
  rightIconPath?: string;
  onRightIconPress?: () => void;
}

const InputComponent = ({
  placeholderValue,
  keyboardType,
  autoCapitalize,
  onChangeText,
  inputStyle,
  placeholderTextColor,
  value,
  secureTextEntry,
  imgPath,
  inputRef,
  onFocus,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
  isClearIcon,
  rightIconPath,
  onRightIconPress
}: TextInputProps) => {
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      <Image source={imgPath} style={styles.icon} />
      <TextInput
        ref={inputRef}
        style={[styles.textInputStyle]}
        placeholder={placeholderValue}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        onChangeText={value => {
          onChangeText(value);
        }}
        value={value}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
      />
      {
        isClearIcon ? (
          <Pressable onPress={onRightIconPress}>
            <Image source={rightIconPath} style={styles.icon2} />
          </Pressable>
        ) : null
      }
    </View>
  );
};

export default InputComponent;
