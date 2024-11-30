#JavaScript Toy Problems

This repository contains solutions to various JavaScript toy problems, designed to practice basic programming skills and logical thinking. Each challenge solves a specific problem with clear input and output expectations.


---

##Table of Contents

1. [Challenge 1: Student Grade Generator](challenge1)


2. [Challenge 2: Speed Detector](challenge2)


3. [Challenge 3: Net Salary Calculator](challenge3)


4. [How to Run](howToRun)


5. [Contributing](contributing)


6. [License](licence)




---

##Challenge 1: Student Grade Generator

Problem Statement

Write a function that prompts the user to input student marks. The input should be a number between 0 and 100. The output should correspond to the correct grade based on the following criteria:

A: 79 and above

B: 60 to 79

C: 50 to 59

D: 40 to 49

E: Below 40


Example

Input:

console.log(outputGrade(85));

Output:

A


---

##Challenge 2: Speed Detector

Problem Statement

Write a program that takes the speed of a car as input (e.g., 80). If the speed is less than 70, the program should print "Ok". Otherwise:

For every 5 km/s above the speed limit (70), the program should issue 1 demerit point.

If the driver gets more than 12 points, the function should print "License suspended".


Example

Input:

console.log(checkSpeed(80));

Output:

Points: 2

Input:

console.log(checkSpeed(135));

Output:

License suspended


---

##Challenge 3: Net Salary Calculator

Problem Statement

Write a program that calculates an individual's Net Salary based on their gross salary and benefits. The program should:

Calculate deductions like PAYE (tax), NHIF, and NSSF.

Output the net salary after deducting the above.


Example

Input:

console.log(netSalaryCalculator(50000, 10000));

Output:

Net Salary: <calculated value>


---

#How to Run

1. Clone the repository:

git clone <repository-url>


2. Navigate to the project directory:

cd <repository-directory>


3. Run any challenge file using Node.js:

node challenge1.js

Replace challenge1.js with the relevant challenge file name.




---

##Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.


---

##License

This project is open-source and available under the MIT License.


---

Feel free to adjust this structure based on your specific project details. Let me know if you'd like assistance with any section!