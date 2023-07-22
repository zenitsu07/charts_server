import mongoose from "mongoose";

export const Connection = async (username:string ,password:string) => {

//create url variable
    const URL =  process.env.DB_URL|| `mongodb+srv://${username}:${password}@cluster0.00zke3c.mongodb.net/?retryWrites=true&w=majority`;

    //try to connect with this url to db using COnnect(URL, }useNewUrlParser:true})
    try{
        await mongoose.connect(URL);
         console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error in connnecting to database",error);
    }

}