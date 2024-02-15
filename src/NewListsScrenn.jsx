// screens/NewsListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font'

const NewsListScreen = () => {

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
      const loadFonts = async () => {
          await Font.loadAsync({
              'poppins-regular': require('./fonts/Poppins-Regular.ttf'),
              'poppins-bold': require('./fonts/Poppins-Bold.ttf'),
              'poppins-light': require('./fonts/Poppins-Light.ttf'),
          })
          setFontLoaded(true)
          }
      loadFonts();
  }, [])

  if (!fontLoaded) {
      return <View />;
  }

  return (
    <View>
      <Text style={{fontFamily : "poppins-bold"}}>aeaea</Text>
            <Text style={{fontFamily : "poppins-regular"}}>sgwsgwsgwsg</Text>
            <Text style={{fontFamily : "poppins-light"}}>sfdfsdfsdfdsfsdfdssss</Text>

    </View>
  );
};

export default NewsListScreen;
