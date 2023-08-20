const Students = [
  { Name: "Ivan", avgMark: 10 },
  { Name: "Petro", avgMark: 9 },
  { Name: "Stas", avgMark: 12 },
];

for (const stud of Students) {
  stud.avgMark++;
  console.log(stud.Name, " : ", stud.avgMark);
}
