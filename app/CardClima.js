import { View, Text, StyleSheet, Image } from 'react-native';



export default function CardClima(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.clima}>{props.temperatura} °C</Text>
            <Image
                style={styles.emoji}
                source={props.emoji}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: '16px',
        paddingHorizontal: '32px',
        paddingVertical: '16px',
        

    },
    data: {
        fontSize: '12px',
        color: "#ffffff"

    },
    clima: {
        fontSize: '24px',
        color: "#ffffff"

    },
    emoji: {
        width: '32px',
        height: '29px'

    }
})