
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

interface ChartsParkingOutput{

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


//or updation logic , get the parking by id and define its intput as= CreateParkingInpupt
//then update using findIdandUpdate
//Promise takes in id and input as ParkingModel and thsi promise cant be returning an object with null value,therefore typecast promise as either to  updateParking object or set null if id not found

export async function updateParking(
    id:string,
    input:CreateParkingInput
):
Promise< ParkingModel | null>{

    //new variable set to true=>promise is allowed to return the updated object
    const parking = await Parking.findByIdAndUpdate(id,input, {new:true});
    //additional check for returned parking object
    // return parking===null ? null:parking;
    return parking
}

export async function deleteParking(
    id:string
):Promise<boolean>{

    const deleted = await Parking.findByIdAndDelete(id);
    // '!!' takes care of not able to find object or to avoid returning null as if null returns false
    return !!deleted;
}

// Read a parking lot by ID
export async function getParking(id: string): Promise<ParkingModel | null> {
    const parking = await Parking.findById(id);
    return parking;
  }

export async function renderChartByAvailableSlots():Promise<ChartsParkingOutput>{
    return Parking;
}