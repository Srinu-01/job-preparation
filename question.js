const questions = [
    {
      question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
      options: ["4 years", "8 years", "10 years", "None of these"],
      correct: "4 years",
      explanation:
        "Let the ages of children be x, (x + 3), (x + 6), (x + 9) and (x + 12) years. Then, x + (x + 3) + (x + 6) + (x + 9) + (x + 12) = 50\n5x = 20, x = 4.\nAge of the youngest child = x = 4 years.",
    },
    {
      question: 'A father said to his son, "I was as old as you are at the present at the time of your birth". If the father\'s age is 38 years now, the son\'s age five years back was:',
      options: ["14 years", "19 years", "33 years", "38 years"],
      correct: "14 years",
      explanation:
        "Let the son's present age be x years. Then, (38 - x) = x\n2x = 38.\nx = 19.\nSon's age 5 years back (19 - 5) = 14 years.",
    },
    {
      question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
      options: ["7", "8", "9", "10", "11"],
      correct: "11",
      explanation:
        "Let C's age be x years. Then, B's age = 2x years. A's age = (2x + 2) years.\n(2x + 2) + 2x + x = 27\n5x = 25\nx = 5.\nHence, B's age = 2x = 10 years.",
    },
    {
      question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
      options: ["24", "27", "40", "Cannot be determined", "None of these"],
      correct: "24",
      explanation:
        "Let the present ages of Sameer and Anand be 5x years and 4x years respectively.\n9(5x + 3) = 11(4x + 3)\n45x + 27 = 44x + 33\n45x - 44x = 33 - 27\nx = 6.\nAnand's present age = 4x = 24 years.",
    },
    {
      question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
      options: ["14 years", "18 years", "20 years", "22 years"],
      correct: "22 years",
      explanation:
        "Let the son's present age be x years. Then, man's present age = (x + 24) years.\n(x + 24) + 2 = 2(x + 2)\nx + 26 = 2x + 4\nx = 22.",
    },
    {
      question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
      options: ["16 years", "18 years", "20 years", "Cannot be determined", "None of these"],
      correct: "16 years",
      explanation:
        "Let the ages of Kunal and Sagar 6 years ago be 6x and 5x years respectively.\n10(6x + 10) = 11(5x + 10)\n5x = 10\nx = 2.\nSagar's present age = (5x + 6) = 16 years.",
    },
    {
      question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
      options: ["12 years", "14 years", "18 years", "20 years"],
      correct: "20 years",
      explanation:
        "Let the present ages of son and father be x and (60 - x) years respectively.\n(60 - x) - 6 = 5(x - 6)\n54 - x = 5x - 30\n6x = 84\nx = 14.\nSon's age after 6 years = (x + 6) = 20 years.",
    },
    {
      question: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?",
      options: ["12 years", "15 years", "19 and half", "21 years"],
      correct: "15 years",
      explanation:
        "Let the present ages of Arun and Deepak be 4x years and 3x years respectively.\n4x + 6 = 26\n4x = 20\nx = 5.\nDeepak's age = 3x = 15 years.",
    },
    {
      question: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
      options: ["16 years", "18 years", "28 years", "24.5 years", "None of these"],
      correct: "24.5 years",
      explanation:
        "Let Rahul's age be x years. Then, Sachin's age = (x - 7) years.\n9x - 63 = 7x\n2x = 63\nx = 31.5\nHence, Sachin's age = (x - 7) = 24.5 years.",
    },
    {
      question: "What is Sonia's present age?",
      options: [
        "I. Sonia's present age is five times Deepak's present age.",
        "II. Five years ago her age was twenty-five times Deepak's age at that time.",
        "I alone sufficient while II alone not sufficient to answer",
        "II alone sufficient while I alone not sufficient to answer",
        "Both I and II are necessary to answer",
      ],
      correct: "Both I and II are necessary to answer",
      explanation:
        "I. S = 5D D = S / 5\nII. S - 5 = 25 (D - 5) S = 25D - 120\nUsing (i) in (ii), we get S =\n25 * S / 5 - 120\n4S = 120.\nS = 30.\nThus, I and II both together give the answer.",
    },
  ];
  
