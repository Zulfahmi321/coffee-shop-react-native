import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useState } from 'react'
import bg1 from '../../assets/img/bg1.png'
import bg2 from '../../assets/img/bg2.png'

import styles from './styles'

const Landing = () => {
  const [page, setPage] = useState('landing')
  return (
    <View style={styles.container}>
      {page === 'landing' ?
        <ImageBackground source={bg1} style={styles.imgBg}>
          <View style={styles.bgClr}>
            <Text style={styles.title}>Coffee for Everyone</Text>
            <View style={styles.btnContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText} onPress={() => setPage("welcome")}>Get started</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground >
        :
        <ImageBackground source={bg2} style={styles.imgBg}>
          <View style={styles.bgClrWel}>
            <View>
              <Text style={styles.title}>Welcome!</Text>
              <Text style={styles.body}>Get a cup of coffee for free every sunday morning</Text>
            </View>
            <View style={styles.btnContainer}>
              <Pressable style={styles.buttonCreate}>
                <Text style={styles.buttonTextCreate}>Create New Account</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground >
      }
    </View >
  )
}

export default Landing