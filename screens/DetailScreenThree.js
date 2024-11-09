import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function DetailScreenThree() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PATHFINDER</Text>
            <Image 
                source={require('../assets/images/image4.jpg')}
                style={styles.image} 
                resizeMode="contain" 
            />
            <View style={styles.textWrapper}>
                <Text style={styles.descriptionText}>Data-Driven Health Insights</Text>
                <Text style={styles.subText}>
                    Access detailed analytics and insights about disease patterns, helping communities 
                    make informed health decisions.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Next</PrimaryButton>
                </View>
                <Pressable style={styles.skipButton}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </Pressable>    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        color: '#5EA2DC',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        marginBottom: 10, 
    },
    descriptionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subText: {
        textAlign: 'center',
        color: '#303640',
        lineHeight: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: '30%',
        marginLeft: 10,
        width: '90%',
    },
    
    buttonContainer: {
        width: '65%',
        marginRight: 25
    },

    skipButton: {
        width: '20%',
        paddingVertical: 15,
    },

    skipButtonText: {
        color: '#5EA2DC',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
