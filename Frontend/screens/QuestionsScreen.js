import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import questionData from  '../Data/QuestionData';
import PrimaryButton from "../components/PrimaryButton";

export default function QuestionScreen({ navigation, route })  {
  const { disease } = route.params;
  const questions = questionData[disease] || [];

  const [responses, setResponses] = useState({});

  const handleInputChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log(responses);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{disease} Outbreak Survey</Text>
      {questions.map((item) => (
        <View key={item.id}>
          <Text style={styles.question}>{item.question}</Text>
          <TextInput
            style={styles.input}
            placeholder={item.placeholder}
            keyboardType={item.type === "number" ? "numeric" : "default"}
            onChangeText={(value) => handleInputChange(item.id, value)}
          />
        </View>
      ))}
      <PrimaryButton 
        onPress={handleSubmit}>
        Submit
      </PrimaryButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303640',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
