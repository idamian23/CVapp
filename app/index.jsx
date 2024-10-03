import {Link} from 'expo-router';
import {Text, View, StyleSheet} from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
