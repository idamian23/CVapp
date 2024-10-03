import {Link, Stack, useRouter} from 'expo-router';
import {View, StyleSheet} from 'react-native';

function NavLinks() {
    const router = useRouter();
    const currentPath = router;
    console.warn(currentPath);
    return (
        <View style={styles.navContainer}>
            <View style={styles.linkContainer}>
                <Link style={styles.link} href="/">Profile</Link>
            </View>
            <View style={styles.linkContainer}>
                <Link style={styles.link} href="/portfolio">Portfolio</Link>
            </View>
            <View style={styles.linkContainer}>
                <Link style={styles.link} href="/contact">Contact</Link>
            </View>
        </View>
    );
}

export default function Layout() {

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#070707",  // Dark background for the header
                },
                headerTintColor: '#fff',  // White color for the header text
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                animation : "none", //cancel animation
                headerBackVisible: false,
                headerTitle: props => <NavLinks {...props} />,  // Custom navigation links as title
            }}>
            <Stack.Screen name="index" options={{title: 'Home'}}/>
            <Stack.Screen name="portfolio" options={{title: 'Portfolio'}}/>
            <Stack.Screen name="contact" options={{title: 'Contact'}}/>
        </Stack>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        paddingHorizontal: 20,  // Ensures spacing for the navigation links
    },
    linkContainer: {
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius: 20,
        backgroundColor: "#D9D9D9",
        alignItems:"center"
    },
    link: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

});
