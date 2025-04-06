import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify your email</Text>
        <TextInput
          style={[styles.textInput, { width: Dimensions.get('window').width / 3 }]}
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button title="Verify" onPress={onVerifyPress} color="cyan" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.inputText}>Email</Text>

          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            onChangeText={(email) => setEmailAddress(email)}
          />
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
          {password.length < 8 && (
            <Text style={styles.warningMessage}>Password must be minimum of 8 characters!</Text>
          )}
          <Button title="Continue" onPress={onSignUpPress} color="cyan" />
          <View style={styles.button}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Already have an account?</Text>
            <Link asChild href="/(auth)/sign-in">
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign In</Text>
              </Pressable>
            </Link>
          </View>
        </View>
        <StatusBar style="light" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  bodyContainer: {
    gap: 5,
    width: Dimensions.get('window').width,
  },
  title: {
    color: 'gainsboro',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  inputText: {
    color: 'gainsboro',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  warningMessage: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  },
  buttonContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'darkgrey',
    padding: 10,
    backgroundColor: 'gainsboro',
  },
});
