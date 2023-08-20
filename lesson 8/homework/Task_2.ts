interface User {
  [key: string | number]: string | number;
}

const Student: User = {
  name: "Stas",
  age: 20,
  hobbie: "games",
  car: "Subaru",
};

function printInfo(Student: User) {
  console.log(
    Student.name,
    " ",
    Student.age,
    " ",
    Student.hobbie,
    " ",
    Student.car
  );
}

printInfo(Student);
