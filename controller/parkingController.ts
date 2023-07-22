
import Parking,{ParkingModel, Contact, Address, ParkingFacilities} from "../model/parking";

interface CreateParkingInput{
    
    name:string;
    location: string;
    capacity: number;
    availableSlots: number;
    hourlyRate: number;
    securityGuard: boolean;
    isOpen: boolean;
    contact: Contact;
    address: Address;
    facilities: ParkingFacilities;

} 

//for above created interface Use as inut for create route
//Createt a new parking Lot

//For a lot we use above defined format as input type and execute a promise which takes in type of ParkingModel and creates parking lot based on input type 
export async function createParking(
    input: CreateParkingInput   //input is being validated with ParkingInput type object
):
Promise<ParkingModel>{

    const parking =  new Parking(input);
    await parking.save();
    return parking;
    
}