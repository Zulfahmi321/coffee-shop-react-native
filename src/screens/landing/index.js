import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bg1 from '../../assets/img/bg1.png'

import styles from './styles'

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg1} style={styles.imgBg}>
        <View style={styles.bgClr}>
          <Text style={styles.title}>Coffee for Everyone</Text>
          <View style={styles.btnContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={() => navigation.navigate('welcome')}>Get started</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground >
    </View >
  )
}

export default Landing