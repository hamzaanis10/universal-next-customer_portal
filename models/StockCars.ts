import {FuelType} from "@/models/Master/FuelType";
import {BodyType} from "@/models/Master/BodyType";
import {Colors} from "@/models/Master/Colors";
import {CarCondition} from "@/models/Master/CarCondition";
import {DrivetrainType} from "@/models/Master/DrivetrainType";
import {Country} from "@/models/Master/Country";
import {Make} from "@/models/Master/Make";
import {SteeringType} from "@/models/Master/SteeringType";
import {Transmission} from "@/models/Master/Transmission";

export interface StockCars {
    stockId: number
    stockCode: string
    listingTitle: string
    modelId: number
    modelName: string
    makeId: number
    makeName: string
    conditionId: number
    conditionType: string
    bodyTypeId: number
    typeOfBody: string
    transmissionId: number
    transmissionName: string
    drivetrainId: number
    drivetrainType: string
    fuelTypeId: number
    typeOfFuel: string
    steeringTypeId: number
    typeOfSteering: string
    colorId: number
    colorName: string
    locationId: number
    locationName: string
    hotLocationId: number
    hotLocationName: string
    engineSize: number
    year: number
    noOfDoors: string
    noOfSeats: number
    lengthOfCar: number
    widthOfCar: number
    heightOfCar: number
    m3: number
    isReserved: boolean
    modelCode: string
    price: number
    auctionGrade: string
    engineNumber: string
    chasisNumber: string
    mileage: number
    slug: string
    description: string
    imageUrl: string
    isActive: boolean
    bodyType: BodyType
    color: Colors
    condition: CarCondition
    drivetrain: DrivetrainType
    fuelType: FuelType
    location: Country
    make: Make
    model: any
    steeringType: SteeringType
    transmission: Transmission
}
