// screens/NewsListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font'

const NewsListScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de noticias
    axios.get('https://api-chincha-notifi.onrender.com/articles')
      .then(response => setNews(response.data))
      .catch(error => console.error(error));
  }, []);

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
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
          >
            <Text style={{fontFamily : "poppins-bold"}}>{item.id}</Text>
            <Text style={{fontFamily : "poppins-regular"}}>{item.title}</Text>
            <Text style={{fontFamily : "poppins-light"}}>{item.description}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NewsListScreen;
