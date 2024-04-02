import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import InputComponent from '../../components/InputComp/InputComponent';
import ButtonComp from '../../components/ButtonComp/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmptyTextField, _validateEmail } from '../../utils/constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [focusInputs, setFocusInputs] = useState({
    email: false,
    password: false
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateLogin = () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/
    setEmailError('');
    setPasswordError('');
    if (isEmptyTextField(email)) {
        setEmailError('Email should not be empty');
        // emailRef.current?.focus();
        setFocusInputs({
            ...focusInputs,
            email: true,
        })
        return;
    } else if (_validateEmail(email.trim()) !== true) {
        setEmailError('Email should be valid');
        // emailRef.current?.focus();
        setFocusInputs({
            ...focusInputs,
            email: true,
        })
        return;
    } else if (isEmptyTextField(password)) {
        setPasswordError('Password should not be empty');
        // passwordRef.current?.focus();
        setFocusInputs({
            email: false,
            password: true
        })
        return;
    } else if (!regex.test(password)) {
        setPasswordError('Password should be more than 6 characters and contain at least one uppercase letter, one number, and one special character');
        // passwordRef.current?.focus();
        setFocusInputs({
            email: false,
            password: true
        })
        return;
    } else {
        setFocusInputs({
            email: false,
            password: false
        })
        return;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView onKeyboardDidHide={() => {
          setEmailFocus(false);
          setPasswordFocus(false);
        }} showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps={'handled'}
        automaticallyAdjustKeyboardInsets contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.innerContainer}>
        <Image
            style={styles.logo}
            source={{
            uri: 'data:image/png;base64,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',
            }}
        />
      </View>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Welcome to Lafyuu</Text>
        <Text style={styles.subHeadingText}>Sign in to continue</Text>
      </View>
      <View style={styles.formView}>
        <InputComponent
          inputRef={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholderValue={'Your Email'}
          keyboardType={'email-address'}
          inputStyle={{borderColor:focusInputs.email ? '#FB7181' : emailFocus ? '#40BFFF' : '#EBF0FF'}}
          placeholderTextColor={'#9098B1'}
          autoCapitalize={'none'}
          secureTextEntry={false}
          value={email}
          returnKeyType={'next'}
          onChangeText={value => {
            setEmail(value);
          }}
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
          blurOnSubmit={false}
          imgPath={require('../../assets/images/Message.png')}
        />
        {
            emailError?.length > 0  ? (
                <View style={styles.errorMessageView}>
                <Text style={styles.errorMessage}>{emailError}</Text>
                </View>
            ) : null
        }

        <InputComponent
          inputRef={passwordRef}
          placeholderValue={'Password'}
          inputStyle={{borderColor:focusInputs.password ? '#FB7181' : passwordFocus ? '#40BFFF' : '#EBF0FF', marginTop: 8}}
          secureTextEntry={true}
          placeholderTextColor={'#9098B1'}
          autoCapitalize={'none'}
          onChangeText={value => {
            setPassword(value);
          }}
          imgPath={require('../../assets/images/Password.png')}
          returnKeyType={'done'}
          onFocus={() => {
                setPasswordFocus(true);
                setEmailFocus(false);
            }}
          value={password}
          onSubmitEditing={() => {
            setPasswordFocus(false);
            validateLogin();
          }}

          
        />
        {
            passwordError?.length > 0  ? (
                <View style={styles.errorMessageView}>
                    <Text style={[styles.errorMessage]}>{passwordError}</Text>

                </View>
            ) : null
        }

        <View style={styles.buttonView}>
            <ButtonComp title={'Sign In'} onButtonPress={validateLogin} />
        </View>
        <View style={styles.forgotPasswordView}>
          <Pressable>
            <Text style={styles.blueBoldText}>Forgot Password?</Text>
          </Pressable>
            <View style={styles.footerview}>
                <Text style={styles.accountText}>Don’t have a account?
                  <Pressable>
                    <Text style={styles.blueBoldText}> Register</Text>
                  </Pressable>
                </Text>
            </View>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
