import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,  
  },
    container: {
      flex: 1,
      alignItems: "center",
    },
    header: {
      width: "100%",
      padding: 20,
      backgroundColor: "#2C3E50",
      alignItems: "center",
      marginBottom: 20,
    },
    main:{
        height: '75%',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: "5%",
      color: "#2C3E50",
    },

    touchableOpacity: {
      backgroundColor: "white",   
      padding: 20,                
      alignItems: "center",       
      borderRadius: 20,          
      marginTop: 40,             
      width: "90%",              
      borderWidth: 2,           
      borderColor: "black",  
  
    },
    buttonText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold"
    },
  });
  
  