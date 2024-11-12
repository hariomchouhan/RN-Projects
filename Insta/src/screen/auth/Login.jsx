import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { loginInitialValue, loginValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'

const Login = () => {
    const handleLogin = (values) => {
        console.log(values);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                <Image style={{ alignSelf: 'center', marginBottom: 20 }} source={require('../../assets/Instagram.png')} />
                <Formik
                    initialValues={loginInitialValue}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin} >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        touched,
                        errors,
                        isValid
                    }) => {
                        return (
                            <View>
                                <InputBox
                                    placeholder={'Username'}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    touched={touched.username}
                                    errors={errors.username}
                                />
                                <InputBox
                                    placeholder={'Password'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    touched={touched.password}
                                    errors={errors.password}
                                    secureTextEntry={true}
                                />
                                <CustomButton 
                                buttonTitle={"Login"} 
                                onPress={handleSubmit}
                                disabled={!isValid}
                                />
                            </View>
                        )
                    }}
                </Formik>
            </View>
            <View style={{ flex: 0.2, marginBottom: 20, justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})