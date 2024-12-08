const questionData = {
    Diarrhea: [
      {
        id: 1,
        question: "What is the main source of water in this area?",
        type: "radio",
        options: ['Borehole', 'River']
      },
      {
        id: 2,
        question: "How many cases of diarrhea have been reported recently?",
        placeholder: "Enter a number",
        type: "number",
      },
      {
        id: 3,
        question: "Are there any sanitation issues in this area? (Yes/No)",
        type: "radio",
        options: ['Yes', 'No']
      },
    ],
    Cholera: [
      {
        id: 1,
        question: "What is the main source of water in this area?",
        type: "radio",
        options: ['Borehole', 'River']
      },
      {
        id: 2,
        question: "How many cases of cholera have been reported recently?",
        placeholder: "Enter a number",
        type: "number",
      },
      {
        id: 3,
        question: "Is the drinking water treated before use?",
        type: "radio",
        options: ['Boiled', 'Chlorinated', 'Filtered']
      },
    ],
  };
  
  export default questionData;
  