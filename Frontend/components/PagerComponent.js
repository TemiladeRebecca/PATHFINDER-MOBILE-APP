import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import PrimaryButton from './PrimaryButton';
import DetailScreenOne from '../screens/DetailScreenOne';
import DetailScreenTwo from '../screens/DetailScreenTwo';
import DetailScreenThree from '../screens/DetailScreenThree';

export default function PagerComponent({ navigation }) {
    const [currentPage, setCurrentPage] = useState(0);

    const goToGettingStarted = () => {
        navigation.navigate('GettingStarted');
    };

    return (
        <View style={styles.container}>
            <PagerView
                style={styles.viewPager}
                initialPage={0}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
            >
                <View key="1" style={styles.page}>
                    <DetailScreenOne />
                </View>
                <View key="2" style={styles.page}>
                    <DetailScreenTwo />
                </View>
                <View key="3" style={styles.page}>
                    <DetailScreenThree />
                </View>
            </PagerView>

            <View style={styles.paginationContainer}>
                {[0, 1, 2].map((page) => (
                    <View
                        key={page}
                        style={[
                            styles.dot,
                            currentPage === page && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
            <View style={styles.button}>
                {currentPage === 2 && 
                <PrimaryButton onPress={goToGettingStarted}>continue</PrimaryButton> }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewPager: {
        flex: 1,
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 60
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#5EA2DC',
    },
    button: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        width: 120
    }
});
