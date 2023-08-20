interface Car {
  mark: string;
  model: string;
  year: number;
  max_speed: number;
  weight: number;
}
interface Bike {
  mark: string;
  model: string;
  year: number;
  max_speed: number;
  weight: number;
}
interface Bicycle {
  mark: string;
  model: string;
  year: number;
  frame: string;
  weight: number;
}

function show_info(vehicle: Car | Bike | Bicycle) {
  console.log(
    `Mark: ${vehicle.mark},<\n>Model: ${vehicle.model},<\n>year: ${vehicle.year}`
  );
  if ("weight" in vehicle) {
    console.log(`Weight: ${vehicle.weight}`);
  }
  if ("max_speed" in vehicle) {
    console.log(`Max speed: ${vehicle.max_speed}`);
  }
  if ("frame" in vehicle) {
    console.log(`Frame type: ${vehicle.frame}`);
  }
}
const My_car: Car = {
  mark: "Subaru",
  model: "Legacy",
  year: 2008,
  max_speed: 200,
  weight: 1800,
};
const My_bike: Bike = {
  mark: "Yamaha",
  model: "mt 15 v2",
  year: 2020,
  max_speed: 135,
  weight: 141,
};
const My_bicycle: Bicycle = {
  mark: "Treck",
  model: "MARLIN 6 ",
  year: 2022,
  frame: "aluminium",
  weight: 15,
};

show_info(My_car);
show_info(My_bike);
show_info(My_bicycle);
