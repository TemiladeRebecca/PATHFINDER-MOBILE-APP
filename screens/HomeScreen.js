import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.textContainer}>PATHFINDER</Text>
            <View style={styles.button}>
                <PrimaryButton onPress={() => navigation.navigate('DetailOne')}>Continue</PrimaryButton>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },

    textContainer: {
        marginTop: '40%',
        color: '#5EA2DC',
        fontWeight: 'bold',
        fontSize: 40
    }, 

    button: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: '40%'
    }
})