import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { SignupInitialValue, SignupValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'

const Signup = () => {
    const handleSignup = (values) => {
        console.log(values);

    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                <Text style={{fontSize: 22, fontWeight: '700', marginBottom: 20}}>Signup with your mobile number</Text>
                <Formik
                    initialValues={SignupInitialValue}
                    validationSchema={SignupValidationSchema}
                    onSubmit={handleSignup} >
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
                                    placeholder={'Mobile Number'}
                                    onChangeText={handleChange('number')}
                                    onBlur={handleBlur('number')}
                                    value={values.number}
                                    touched={touched.number}
                                    errors={errors.number}
                                    maxLength={10}
                                    keyboardType='numeric'
                                />
                                <CustomButton 
                                buttonTitle={"Sign up"} 
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
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})