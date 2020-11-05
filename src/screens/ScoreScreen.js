import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScoreScreen = ({ route }) => {

    const { playedCat, totalscore } = route.params

    const [categoriesPlayed, setCategoriesPlayed] = useState([])

    useEffect(() => {
        setCategoriesPlayed(...categoriesPlayed, { category: playedCat, score: totalscore })
    }, [])
//כאשר עוברים מדף לדף הSTATE נמחק.. לבדוק מה קורה שם
    return (
        <View>
            <Text>Score Table</Text>
            <Text>categoryChange={categoriesPlayed.category}</Text>
            <Text>totalscore={categoriesPlayed.score}</Text>
        </View>
    )
}

export default ScoreScreen

const styles = StyleSheet.create({})
