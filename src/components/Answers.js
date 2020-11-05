import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Answers = ({ title, checkAnswer, onClickAnswer, id ,answer}) => {

    const [color, setColor] = useState('rgba(255, 255, 255, 0.4)')

    return (
        <View >
            <TouchableOpacity style={{ ...styles.answer, backgroundColor: color }} onPress={() => { checkAnswer(title, id), onClickAnswer(), setColor(title==answer?'#74c69d':'#ff6b6b') }}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Answers

const styles = StyleSheet.create({
    answer: {
        alignItems: 'center',
        padding: 4,
        borderRadius: 20,
        margin: 2
    },
    title: {
        fontSize: 20,
        textAlign: "center",
    }
})
