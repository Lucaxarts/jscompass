//import 'textproject.dart';
//import 'ifeanyi.dart';

void main(List<String> args) {
  String compliment(String? word) {
    return "you're beautiful $word";
  }

  const herName = "sophia";
  print(compliment(herName));
  //implementing positional parameters
  String personAndPet(String name, pet) {
    return "hello $name ,and your little friend $pet";
  }

  final String personName = "lucas";
  final String petName = "roy";
  print(personAndPet(personName, petName));
  print(personAndPet("lucas", "jerry"));
  // print(Title.titleHandler(personName, personName, petName));
  print(titleHandler(
    "udoh",
    "jude",
  ));
  //print(youAreWonderful(name: "lulu"));

  // print(IfeanyiClass("ifeanyi"));
  print(toleranceLevel(value: 10));
  // print(youAreWonderful());
  // ignore: prefer_function_declarations_over_variables
  final multiply = (int a, b) {
    print(a * b);
  };
  print(multiply(1, 2));
  const people = ["chris", "tiffany", "pablo"];
  // ignore: avoid_function_literals_in_foreach_calls
  people.forEach((people) {
    print("you're wonderful $people");
  });
  applyMultiplier(12);
  print(applyMultiplier(11));
  print("multiplier used");
  print(primeChecker(value: 2));
  print("prime checker used");
}

String titleHandler(String firstname, lastName, [String? title]) {
  if (title != null) {
    return "hello,$title.$firstname $lastName";
  } else {
    return "hello,$firstname $lastName";
  }
}

bool toleranceLevel({required int value, int min = 0, max = 10}) {
  return min <= value && max >= value;
}

wonderful({required String? name, int numberPeople = 30}) {
  return "you're wonderful $name!,about $numberPeople people think so \n";
}

applyMultiplier(num value) => (int value1) => value * value1;
primeChecker({required int value}) {
  if (value % 2 != 0) {
    return "$value is a prime number";
  } else {
    return "$value is not a prime number";
  }
}

// int repeatTask(int times, int input, Function task) {
//   int result = task(input);
//   for (var i = 1; i < times; i++) {
//     result = task(result);
//   }
//   return result;

// final result=repeatTask(4, 2,( num input)){
//   return input*input;
// };
// print(result);
// }