import { View, Image, StyleSheet, Text } from 'react-native';

export default function DetailScreenTwo() {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image 
                    source={require('../assets/images/image2.jpg')}
                    style={styles.image} 
                    resizeMode="contain" 
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.descriptionText}>Report Health Concerns Instantly</Text>
                <Text style={styles.subText}>
                    Contribute to community health by reporting symptoms and concerns.
                    Your reports help identify potential outbreaks early.
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
