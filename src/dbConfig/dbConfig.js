import mongoose from "mongoose";

export async function connect(){

    try{

        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;

        // IN CASE THE CONNECTION IS SUCESSFUL
        connection.on('connected', () => {
            console.log("Connected Sucessfully");
        });


        // IN CASE OF ANY ERROR CAUSED DURING CONNECTION 
        connection.on('error', (err) => {
            console.log("MongoDB connection Error",err);
            process.exit();
        })

    }catch(err){
        console.log("Something went wrong")
        console.log(err)
    }
}