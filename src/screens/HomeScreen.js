import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import axios from 'react-native-axios';
import { v4 as uuidv4 } from 'react-native-uuid';
import Cards from '../components/Cards';
import { Header, Button } from 'react-native-elements';
import base64 from 'react-native-base64';
import StartModal from '../components/StartModal';

const HomeScreen = ({ navigation }) => {

    const [fleshcard, setFleshcard] = useState([])
    const [totalscore, setTotalscore] = useState(0)
    const [categories, setCategories] = useState([])
    const [categoryChange, setCategoryChange] = useState(9)
    const [visible, setVisible] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible), setTotalscore(0)
    };

    const changeCategory = (category) => {
        setCategoryChange(category)
    }

    const scoreBoard = (score) => {
        score ? setTotalscore(totalscore + 5) : setTotalscore(totalscore - 2)
    }

    useEffect(() => {
        axios.get(`https://opentdb.com/api_category.php`)
            .then(res => {
                setCategories(
                    res.data.trivia_categories.map(category => {
                        return {
                            id: category.id,
                            label: category.name,
                            value: category.id,
                        }
                    })
                )
            })
    }, [])


    const getTrivia = (value) => {
        axios
            .get(`https://opentdb.com/api.php?amount=${value}&encode=base64`, {
                params: {
                    category: categoryChange,
                }
            })
            .then((res) => {
                setFleshcard(
                    res.data.results.map((questions) => {
                        const answer = base64.decode(questions.correct_answer);
                        const options = [
                            ...questions.incorrect_answers.map((option) =>
                                base64.decode(option)), answer,]
                        const question = questions.question;
                        return {
                            id: uuidv4(),
                            question: base64.decode(question),
                            answers: options,
                            options: options.sort(),
                            correctAnswer: answer,
                        }
                    })
                )
            })
    }

    const filterAnswer = (id) => {
        id !== null ? setFleshcard(fleshcard.filter(item => item.id !== id)) : null
    }

    return (
        <View style={{ flex: 1 }}>
            <StartModal visible={visible} toggleOverlay={toggleOverlay} changeCategory={changeCategory} getTrivia={getTrivia} categoryChange={categoryChange} categories={categories}></StartModal>
            <StatusBar translucent backgroundColor={'black'} />
            <View style={styles.scoreAndModal}>
                <Text style={styles.score}>
                    score :{totalscore}
                </Text>
                <Button title='Go Back' buttonStyle={styles.button} titleStyle={styles.buttonText} onPress={toggleOverlay} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View>
                    {fleshcard.map((questions) => {
                        return (
                            <Cards
                                filterAnswer={filterAnswer}
                                key={questions.id}
                                id={questions.id}
                                options={questions.options}
                                question={questions.question}
                                answer={questions.correctAnswer}
                                scoreBoard={scoreBoard}

                            />
                        );
                    })}
                    <Button buttonStyle={styles.scoreButton} titleStyle={styles.buttonText} title="Score Board" onPress={() => navigation.navigate('ScoreScreen', { playedCat: categories[categoryChange - 9].label, totalscore })} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f8f9fa',
    },
    scoreAndModal: {
        backgroundColor: '#f8f9fa',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    score: {
        borderColor: '#4C1E4F',
        borderBottomWidth: 1,
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Ebrima',
        borderRadius: 60,
        width: 130,
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#ffedd8',
        width: 120,
        height: 40,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 60
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
    },
    scoreButton: {
        margin: 10,
        borderRadius: 60,
        backgroundColor: '#e5989b'

    }

});

export default HomeScreen;
