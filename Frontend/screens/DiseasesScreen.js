import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const diseases = ['Cholera', 'Diarrhea'];

export default function DiseasesScreen({ navigation }) {
    const diseaseSelectHandler = (diseaseItem) => {
        navigation.navigate('QuestionsScreen', { diseaseItem });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SELECT A DISEASE</Text>
            <FlatList
                data={diseases}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.diseaseComponent}
                        onPress={() => diseaseSelectHandler(item)}
                    >
                        <Text style={styles.diseaseText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#303640',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 20,
    },
    diseaseComponent: {
        padding: 15,
        backgroundColor: '#5EA2DC',
        marginBottom: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    diseaseText: {
        fontSize: 20,
        color: 'white',
    },
});
