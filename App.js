import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enterGoalText, setEnterGoalText] = useState('');
    const [courseGoals, setCourseGoal] = useState([]);

    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler() {
        // console.log(enterGoalText);
        setCourseGoal(
            currentCourseGoal => [
                ...courseGoals,
                enterGoalText,
            ]
        );
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'Reactnative course goal'}
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                />
                <Button  title={'Add Goals'} onPress={addGoalHandler} />
            </View>

            <View style={styles.goalsContainer}>
                <Text>
                    List of goals...
                </Text>
            </View>

            <View>
                {courseGoals.map((goal, index) => (
                    <Text key={index}>
                        {goal}
                    </Text>
                ))}
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