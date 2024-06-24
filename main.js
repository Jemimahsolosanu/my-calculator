// let result= document.getElementById("display");
function clearResult(){
  document.getElementById("display").value=""
}

let Calculation='';

function applyNum(num){
  Calculation+=num;
  updateDisplay();
}

function applyOperator(operator) {
  Calculation+=operator;
  updateDisplay();
}

function calculate(){
  const result= eval(Calculation);
  Calculation=result;
  updateDisplay();
}

function clearResult(){
  Calculation='';
  updateDisplay();
}

function updateDisplay()
{
  document.getElementById('display').value=Calculation;
}











// Function ShowInput(){
//   document.getElementById("button").value=""
// }

//       import java.util.Scanner;

// public class Calculator {
//     private static Scanner scanner = new Scanner(System.in);

//     public static void main(String[] args) {
//         double num1 = showInput("Enter first number: ");
//         char operator = showInput("Enter an operator (+, -, *, /): ").charAt(0);
//         double num2 = showInput("Enter second number: ");

//         double result = calculate(num1, operator, num2);
        
//         if (result != Double.MIN_VALUE) {
//             System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
//         }

//         scanner.close();
//     }

//     public static String showInput(String prompt) {
//         System.out.print(prompt);
//         return scanner.next();
//     }

//     public static double calculate(double num1, char operator, double num2) {
//         switch (operator) {
//             case '+':
//                 return num1 + num2;
//             case '-':
//                 return num1 - num2;
//             case '*':
//                 return num1 * num2;
//             case '/':
//                 if (num2 != 0) {
//                     return num1 / num2;
//                 } else {
//                     System.out.println("Error: Division by zero!");
//                     return Double.MIN_VALUE;
//                 }
//             default:
//                 System.out.println("Error: Invalid operator!");
//                 return Double.MIN_VALUE;
//         }
//     }
// }