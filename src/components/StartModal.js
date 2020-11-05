import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { View, Text, StyleSheet, Picker } from 'react-native';



const StartModal = ({ visible, toggleOverlay, getTrivia, categoryChange, categories, changeCategory }) => {
    const [value, setValue] = useState(10)

    return (
        <View >
            <Overlay isVisible={visible} overlayStyle={styles.Wrapper}>
                <>
                    <Text style={styles.Text} >TRIVIA</Text>
                    <Text style={styles.ChooseText} >Choose your category:</Text>
                    <View style={styles.container}>
                        <Picker
                            style={styles.Picker}
                            selectedValue={categoryChange}
                            onValueChange={(category) => changeCategory(category)}>
                            {categories.map(c => <Picker.Item label={c.label} value={c.value} key={c.value} />)}
                        </Picker>
                        <Text style={styles.ChooseText} >Number of questions:   {value}</Text>
                        <View style={styles.ChooseNumber}>
                            <Button
                                buttonStyle={styles.ButtonNumber}
                                titleStyle={styles.TextNumber}
                                title='10'
                                onPress={() => setValue(10)} />
                            <Button
                            
                                buttonStyle={styles.ButtonNumber}
                                titleStyle={styles.TextNumber}
                                title='20'
                                onPress={() => setValue(20)} />
                            <Button
                                buttonStyle={styles.ButtonNumber}
                                titleStyle={styles.TextNumber}
                                title='30'
                                onPress={() => setValue(30)} />
                            <Button
                                buttonStyle={styles.ButtonNumber}
                                titleStyle={styles.TextNumber}
                                title='40'
                                onPress={() => setValue(40)} />
                        </View>
                    </View>
                    <View>
                        <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Let's Get Started" onPress={() => {
                            getTrivia(value), toggleOverlay()
                        }} />
                    </View>
                </>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: '#fff1e6',
        width: 370,
        height: 705,
        borderRadius: 30,
        borderColor: '#bcd4e6',
        borderStyle: 'solid',
        shadowColor: '#FDC9AE',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
        borderWidth: 5,
    },
    Picker: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: "gray",
        fontFamily: "Ebrima",
    },
    button: {
        backgroundColor: '#ffb4a2',
        borderRadius: 30,
        padding: 10,
        margin: 10,
        marginTop: 100,
        fontSize: 40
    },
    buttonText: {
        fontSize: 40,
        fontFamily: "Times New Roman",
    },
    Text: {
        textAlign: 'center',
        fontSize: 60,
        marginTop: 10,
        color: '#00b4d8',
        fontFamily: "Times New Roman",
    },
    ChooseText: {
        fontSize: 20,
        marginTop: 30,
        fontFamily: "Times New Roman",

    },
    ChooseNumber: {
        textAlign: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    ButtonNumber: {
        borderRadius: 25,
        marginTop: 20,
        paddingHorizontal: 10
    },
    TextNumber: {
        fontSize: 25
    }
})

export default StartModal;