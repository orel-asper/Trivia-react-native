import React, { useState } from 'react';
import { Card} from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import PopModal from './Modal';
import Answers from './Answers';

const Cards = ({ options, question, answer, scoreBoard, id, filterAnswer }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [answerCheck, setAnswerCheck] = useState([]);

  const onClickAnswer = () => {
    setModalVisible(!modalVisible);
  };

  const checkAnswer = (a,id) => {
    a == answer
      ? (setAnswerCheck({ text: 'Correct!!!', color: '#0ead69' ,id}), scoreBoard(true))
      : (setAnswerCheck({ text: 'Try Again..', color: '#d64045'}), scoreBoard(false))
  }


  return (
    <>
      <Card containerStyle={{ borderRadius: 40, backgroundColor: '#a2d2ff' }} key={id}>
        <Card.Title style={{ fontSize: 20, color: '#4C1E4F' }}>{question}</Card.Title>
        <Card.Divider style={{ height: 1 }} />
        <View>
          <View containerStyle={{ padding: 0, borderRadius: 40 }}>
            {options.map((a) => {
              return (
                <Answers
                title={a} 
                checkAnswer={checkAnswer} 
                answerCheck={answerCheck}
                onClickAnswer={onClickAnswer} 
                id={id}
                key={a}
                answer={answer}
                />
              );}
            )}
          </View>
        </View>
        <PopModal
          answerCheck={answerCheck}
          onClickAnswer={onClickAnswer}
          modalVisible={modalVisible}
          filterAnswer={filterAnswer}
        />
      </Card>
    </>
  );
};

export default Cards;

const styles = StyleSheet.create({});
