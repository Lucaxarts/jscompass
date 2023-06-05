void main() {
  String b = '2 + 3 + 4';
  double result = calculator(b);
  print(result);
}

double calculator(String expression) {
  double result = double.parse(expression);
  return result;
}









// import 'dart:math';

// void main(List<String> args) {
//   repeatTAsk(4, 2, );
// }

// int task(int input) {
//   int num = pow(input, input) as int;
//   // int value = num * num;
//   return num;
// }

// repeatTAsk(int times, int input, Function task) {
//   for (int i = 0; i < times; i++) {
//     for (int j = 1; i < (times * 2); j * 2) {
//       print(task(j));
//     }
//   }
// }























// // // mport 'package:textproject/textproject.dart' as textproject;

// // void main(List<String> arguments) {
// //   Student hello = Student('Udoh', 'Jude');
// //   print(hello.titleHandler());
// // }

// // class Title {
// //   final String firstName;
// //   final String lastName;
// //   final String? title;
// //   Title({required this.firstName, required this.lastName, this.title});
// //   String titleHandler() {
// //     return "$firstName,$lastName";
// //   }
// // }

// // class Student extends Title {
// //   final String studentName;
// //   final String studentLastName;
// //   Student(this.studentName, this.studentLastName)
// //       : super(
// //           firstName: studentName,
// //           lastName: studentLastName,
// //         );
// //   @override
// //   String titleHandler() {
// //     return 'This is $studentLastName $studentName from Uniport';
// //   }
// // }
