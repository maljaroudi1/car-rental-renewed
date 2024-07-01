import { all_routes } from "../router/all_routes";

const routes = all_routes;
const carData = [


    {

        carID: "1",
        carName: "Toyota Camry TRD/XSE", // For Searching
        CarTypeFeatureText: "Toyota", // For sorting
        carImgOne: "assets/cars/toyota/Sedan/camry/ToyotaCamry.png",
        carImgTwo: "assets/cars/toyota/Sedan/camry/ToyotaCamrySide.png",
        carImgAlt: "Toyota",
        carImgIconNumber: "2",
        carTransmission: "Auto", // For sorting
        carMilage: '10K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "305HP",
        carType: "Sedan", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
         carPassangerCapacitySorting: 'five',// For sorting
        carPricePerDay:'160', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-danger', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Featured', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "2",
        carName: "Toyota Corolloa XSE", // For Searching
        CarTypeFeatureText: "Toyota", // For sorting
        carImgOne: "assets/cars/toyota/Sedan/corolloa/ToyotaCorolla.png",
        carImgTwo: "assets/cars/toyota/Sedan/corolloa/ToyotaCorollaSide.png",
        carImgAlt: "Toyota",
        carImgIconNumber: "2",
        carTransmission: "Auto", // For sorting
        carMilage: '5K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "169HP",
        carType: "Sedan", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
        carPassangerCapacitySorting: 'five',// For sorting
        carPricePerDay:'85', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range and organize from greatest to least}
        carLocation: 'Washington',  // For sorting
        // carFeatureTextColor: 'bg-danger', // bg-warning(yellow) or bg-danger(red)
        // carFeatureText: 'Featured', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "3",
        carName: "Toyota Crown Platnium", // For Searching
        CarTypeFeatureText: "Toyota", // For sorting
        carImgOne: "assets/cars/toyota/Sedan/crown/ToyotaCrownPlatnium.png",
        carImgTwo: "assets/cars/toyota/Sedan/crown/ToyotaCrownPlatniumSide.png",
        carImgAlt: "Toyota",
        carImgIconNumber: "2",
        carTransmission: "Auto", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "301HP",
        carType: "Sedan", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
        carPassangerCapacitySorting: 'five',// For sorting
        carPricePerDay:'220', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "4",
        carName: "Toyota GR Supra MT", // For Searching
        CarTypeFeatureText: "Toyota", // For sorting
        carImgOne: "assets/cars/toyota/coupe/supra/supra.png",
        carImgTwo: "assets/cars/toyota/coupe/supra/supra-side.png",
        carImgAlt: "Toyota",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1KM',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "382HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons', // For sorting
        carPassangerCapacitySorting: 'two',// For sorting
        carPricePerDay:'440', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "5",
        carName: "Toyota GR86 Premium MT", // For Searching
        CarTypeFeatureText: "Toyota", // For sorting
        carImgOne: "assets/cars/toyota/coupe/gr86/GR86.png",
        carImgTwo: "assets/cars/toyota/coupe/gr86/GR86-side.png",
        carImgAlt: "Toyota",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "228HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
        carPassangerCapacitySorting: 'five',// For sorting
        carPricePerDay:'140', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "6",
        carName: "Nissan GTR R35", // For Searching
        CarTypeFeatureText: "Nissan", // For sorting
        carImgOne: "assets/cars/nissan/coupe/r35gtr/GTR-R35.png",
        carImgTwo: "assets/cars/nissan/coupe/r35gtr/GTR-R35Side.png",
        carImgAlt: "Nissan",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "565HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons', // For sorting
        carPassangerCapacitySorting: 'two',// For sorting
        carPricePerDay:'1500', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "7",
        carName: "Nissan Nismo-Z 9MT", // For Searching
        CarTypeFeatureText: "Nissan", // For sorting
        carImgOne: "assets/cars/nissan/coupe/nismo-z/Nismoz.png",
        carImgTwo: "assets/cars/nissan/coupe/nismo-z/Nismoz-side.png",
        carImgAlt: "Nissan",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "400HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons',
        carPassangerCapacitySorting: 'two',// For sorting
        carPricePerDay:'400', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "8",
        carName: "Honda Civic SI", // For Searching
        CarTypeFeatureText: "Honda", // For sorting
        carImgOne: "assets/cars/honda/sedan/civicSI/si.png",
        carImgTwo: "assets/cars/honda/sedan/civicSI/siSide.png",
        carImgAlt: "Honda",
        carImgIconNumber: "2",
        carTransmission: "Auto", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "200HP",
        carType: "Sedan", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
        carPassangerCapacitySorting: 'five',
        carPricePerDay:'125', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "9",
        carName: "Honda Civic Type-R", // For Searching
        CarTypeFeatureText: "Honda", // For sorting
        carImgOne: "assets/cars/honda/sedan/civictyper/typeR.png",
        carImgTwo: "assets/cars/honda/sedan/civictyper/typeRSide.png",
        carImgAlt: "Honda",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "315HP",
        carType: "Sedan", // For sorting
        carPassangerCapacity: '5 persons', // For sorting
        carPassangerCapacitySorting: 'five',
        carPricePerDay:'250', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "10",
        carName: "Porche 911 Turbo-S", // For Searching
        CarTypeFeatureText: "Porche", // For sorting
        carImgOne: "assets/cars/porche/porche911turboS/porcheturbo.png",
        carImgTwo: "assets/cars/porche/porche911turboS/porcheTurboSide.png",
        carImgAlt: "Porche",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "640HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons', // For sorting
        carPassangerCapacitySorting: 'two',
        carPricePerDay:'2000', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "11",
        carName: "Porche GT3-RS", // For Searching
        CarTypeFeatureText: "Porche", // For sorting
        carImgOne: "assets/cars/porche/porcheGT3-RS/porcheGT3-RS.png",
        carImgTwo: "assets/cars/porche/porcheGT3-RS/porcheGT3-RS-side.png",
        carImgAlt: "Porche",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "518HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons', // For sorting
        carPassangerCapacitySorting: 'two',
        carPricePerDay:'3500', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "12",
        carName: "BMW M4 CS", // For Searching
        CarTypeFeatureText: "BMW", // For sorting
        carImgOne: "assets/cars/BMW/coupe/bmwm4/bmwm4.png",
        carImgTwo: "assets/cars/BMW/coupe/bmwm4/bmwm4side.png",
        carImgAlt: "BMW",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '1K',
        carFuelType: "Petrol", // For sorting
        carYear: "2024",
        carHP: "551HP",
        carType: "Sport", // For sorting
        carPassangerCapacity: '2 persons',
        carPassangerCapacitySorting: 'two',
        carPricePerDay:'1500', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
    {

        carID: "12",
        carName: "LaFerrari", // For Searching
        CarTypeFeatureText: "Ferrari", // For sorting
        carImgOne: "assets/cars/ferrari/laferrari.png",
        carImgTwo: "assets/cars/ferrari/laferrariside.png",
        carImgAlt: "Ferrari",
        carImgIconNumber: "2",
        carTransmission: "Manuel", // For sorting
        carMilage: '10KM',
        carFuelType: "Hybrid", // For sorting
        carYear: "2013",
        carHP: "952HP",
        carType: "SuperSport", // For sorting
        carPassangerCapacity: '2 persons', // For sorting
        carPassangerCapacitySorting: 'two',
        carPricePerDay:'5000', // For sorting  example: if(carPricePerDay <= 100){Show cars in that price range}
        carLocation: 'Washington',  // For sorting
        carFeatureTextColor: 'bg-warning', // bg-warning(yellow) or bg-danger(red)
        carFeatureText: 'Top Rated', // Featured or Top Rated
        customLink: routes.listingDetails
    },
]

export default carData;