import mongoose from "mongoose";

export const DBconnect = () => {
    mongoose.connect(process.env.MONGOURL)
    .then(() => {
        console.log("Mongodb connected")

    }).catch((error) => {
        console.log("Mongodb Error",error)
    })
}