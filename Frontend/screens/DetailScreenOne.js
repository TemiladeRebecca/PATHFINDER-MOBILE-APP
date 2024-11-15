import { View, Image, StyleSheet, Text } from 'react-native';

export default function DetailScreenOne() {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image 
                    source={require('../assets/images/image1.jpg')}
                    style={styles.image} 
                    resizeMode="contain" 
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.descriptionText}>Track Disease Outbreak in Real Time</Text>
                <Text style={styles.subText}>
                    Monitor and track diarrheal disease outbreaks across Nigeria
                    using advanced social media analysis and community reporting.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    image: {
        width: 500, 
        height: 320,
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
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
        lineHeight: 20,
    },
});
