import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'Your first goal'}
                    style={styles.textInput}
                />
                <Button  title={'Add Goals'} />
            </View>

            <View style={styles.goalsContainer}>
                <Text>
                    List of goals...
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },

    goalsContainer: {
        flex: 4,
    }
})