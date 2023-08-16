const stud_info = {
  name: "Stas",
  age: 20,
  group: "appexoft web dev",
};
const Print_Stud_Data = (obj) => {
  document.write(
    `<h3>Task 10</h3><p>Name: ${obj.name}</p><p>Age:${obj.age}</p><p>Group:${obj.group}</p>`
  );
};
Print_Stud_Data(stud_info);
