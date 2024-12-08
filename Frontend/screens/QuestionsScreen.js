import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import questionData from "../Data/QuestionData";
import PrimaryButton from "../components/PrimaryButton";

export default function QuestionScreen({ navigation, route }) {
  const { diseaseItem } = route.params;
  const questions = questionData[diseaseItem] || [];

  const [responses, setResponses] = useState({});

  const handleInputChange = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log(responses);
    navigation.goBack();
  };

  const handleOptionSelect = (id, option) => {
    setResponses((prev) => ({ ...prev, [id]: option }));
    console.log(responses);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{diseaseItem} Outbreak Survey</Text>
      {questions.map((item) => (
        <View key={item.id} style={styles.questionContainer}>
          <Text style={styles.question}>{item.question}</Text>
          {item.type === "radio" ? (
            <View style={styles.radioGroup}>
              {item.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.radioOption,
                    responses[item.id] === option && styles.radioOptionSelected,
                  ]}
                  onPress={() => handleOptionSelect(item.id, option)}
                >
                  <Text style={styles.radioText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <TextInput
              style={styles.input}
              placeholder={item.placeholder}
              keyboardType={item.type === "number" ? "numeric" : "default"}
              onChangeText={(value) => handleInputChange(item.id, value)}
            />
          )}
        </View>
      ))}
      <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#303640",
    marginBottom: 20,
    marginTop: 50,
    textAlign: "center",
  },
  questionContainer: {
    marginBottom: 20,
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
  },
  radioGroup: {
    flexDirection: "column",
  },
  radioOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#f9f9f9",
  },
  radioOptionSelected: {
    backgroundColor: "#cce5ff",
    borderColor: "#007bff",
  },
  radioText: {
    fontSize: 16,
  },
});