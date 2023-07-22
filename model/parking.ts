import {Schema,model,Document} from "mongoose";

//create interfacecs for different parts fo the schema to have  an appropriate specification of the Mongoose model
export interface Contact {
    email: string;
    phone: string;
}

export interface Address {
    street: string;
    city: string;
    country: string;

}

export interface ParkingFacilities{
    type:string[];
    default: string[];
}

export interface ParkingModel extends Document{
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

 const ParkingSchema = new Schema<ParkingModel>({
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    availableSlots: {
      type: Number,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
    securityGuard: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    contact: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    facilities: {
      type: [String],
      default: [],
    },
  
  });
  
  const Parking = model<ParkingModel>("Parking", ParkingSchema);
  
  export default Parking;