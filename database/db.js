const mongoose = require('mongoose');

const connectToDb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://oluseyelam:oluseyelam2024@cluster0.eonco.mongodb.net/');
        console.log('Successfully connected to Database');
    }catch(e){
        console.log('Connection failed', e);
        process.exit(1)
    }
}

module.exports= connectToDb;