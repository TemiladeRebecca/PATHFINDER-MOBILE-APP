import { Pressable, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function PrimaryButton({children, onPress}) {
    return(
       <View style={styles.buttonOuterContainer}>
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.buttontextContainer}>{children}</Text>
                    <Icon name="arrow-forward" size={25} color="white" style={styles.icon} />
                </View>    
        </Pressable>
       </View> 
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden'
    },

    buttonInnerContainer: {
        paddingVertical: 13,
        backgroundColor: '#5EA2DC',
        borderRadius: 8,
        elevation: 4
    },
    
    buttontextContainer: {
        color: 'white',
        fontSize: 18,
        padding: 2
    },

    pressed: {
        opacity: 0.75
    },

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
})