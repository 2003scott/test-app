// screens/NewsDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const NewsDetailScreen = ({ route }) => {
  const { newsId } = route.params;
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener detalles de una noticia específica
    axios.get(`https://api-chincha-notifi.onrender.com/article/${newsId}`)
      .then(response => setNewsDetail(response.data))
      .catch(error => console.error(error));
  }, [newsId]);

  if (!newsDetail) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View>
      <Text>{newsDetail.title}</Text>
      <Text>{newsDetail.description}</Text>
    </View>
  );
};

export default NewsDetailScreen;
