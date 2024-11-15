import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GettingStartedScreen({navigation}) {
    const loginHandler = () => {
        navigation.navigate('LoginPage');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>WELCOME TO PATHFINDER!</Text>
            <Pressable 
                onPress={loginHandler}
                style={styles.button}>
                <Text style={styles.buttonText}>Getting Started</Text>
            </Pressable>
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#5EA2DC',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
