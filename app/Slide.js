import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CardClima from './CardClima';
import Feather from '@expo/vector-icons/Feather';



export default function ProximosSeteDias() {
    return (
        <View style={styles.slide}>
            <Text style={styles.textSlide}>Previsão para os próximos 7 dias</Text>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <CardClima data={"Quinta-feira"} temperatura={"32"} />

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: '100%',
        padding: 10,
        alignItems: 'flex-start',
    },
    textSlide: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
