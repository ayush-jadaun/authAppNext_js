import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MOGNO_URI!);
        const connection=mongoose.connection;

        connection.on("connected",()=>{

            console.log("mongo db connected succesffully ")
        })
        connection.on('error',(err)=>{
            console.log('MongoDb connection error. Please make sure MongoDb is running '+err)
            
        })

    }catch(error){
        console.log("Something went wrong with database connection ")
        console.log(error);

    }
}