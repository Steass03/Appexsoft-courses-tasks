function show_info(vehicle) {
    console.log("Mark: ".concat(vehicle.mark, ",<\n>Model: ").concat(vehicle.model, ",<\n>year: ").concat(vehicle.year));
    if ("weight" in vehicle) {
        console.log("Weight: ".concat(vehicle.weight));
    }
    if ("max_speed" in vehicle) {
        console.log("Max speed: ".concat(vehicle.max_speed));
    }
    if ("frame" in vehicle) {
        console.log("Frame type: ".concat(vehicle.frame));
    }
}
var My_car = {
    mark: "Subaru",
    model: "Legacy",
    year: 2008,
    max_speed: 200,
    weight: 1800,
};
var My_bike = {
    mark: "Yamaha",
    model: "mt 15 v2",
    year: 2020,
    max_speed: 135,
    weight: 141,
};
var My_bicycle = {
    mark: "Treck",
    model: "MARLIN 6 ",
    year: 2022,
    frame: "aluminium",
    weight: 15,
};
show_info(My_car);
show_info(My_bike);
show_info(My_bicycle);
