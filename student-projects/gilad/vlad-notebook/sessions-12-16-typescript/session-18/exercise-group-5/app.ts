// const Car = {
// 	model: "Audi",
// 	licensePlate: "0123456789",
// 	fuel: 0,
// 	engine: false,
// };

const carList = [
	{
		model: "Audi",
		licensePlate: "0123456789",
		fuel: 100,
		engine: false,
	},
	{
		model: "BMW",
		licensePlate: "0123456789",
		fuel: 75,
		engine: true,
	},
	{
		model: "Seat",
		licensePlate: "12210902",
		fuel: 0,
		engine: false,
	},
];

function app() {
	// create a new car
	// get car license plate
	// refuel car
	// turn engine on
	// turn engine off

	console.log(getCarsByModel("Audi"));

	refuelCarsByModel("Audi", 100);
}

function getCarsByModel(model: string) {
	const carsList = carList.filter(function (car) {
		return car.model === model;
	});

	return carsList;
}

function getCarByLicensePlate(licensePlate: string) {}

function refuelCarsByModel(model: string, fuel: number) {
	const carsByModel = getCarsByModel(model);
	for (let index = 0; index < carsByModel.length; index++) {
		carsByModel[index].fuel = fuel;
	}
}

function turnEngineOn() {}

function turnEngineOff() {}

app();
