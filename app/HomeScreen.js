import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import ClimaAgora from "./ClimaAgora";
import ProximosSeteDias from "./Slide";



export default HomeScreen = () => {



  return (
    <LinearGradient
      colors={['#0A0C14', '#17243E', '#17243E']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>HOME</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}></Text>
          <ClimaAgora />
          <ProximosSeteDias />
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              router.push("/CategoryScreen");
            }}
          >
            <Text style={styles.buttonText}>Destinos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};



