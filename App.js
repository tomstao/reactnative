import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Another text.</Text>
            </View>
            <Text style={
                styles.textStyles
            }>Hello! World!</Text>
            <Button onPress={() => {
            }} title={'Hello'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyles: {
        margin: 16,
        borderWidth: 1.5,
        borderColor: 'red',
        padding: 16,
    }
});
