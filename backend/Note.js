import { Router } from "express";
import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title :{String, require},
    content :{String, require}
})

const Note = mongoose.noteSchema;

const noteRouter = Router();

noteRouter.post("/addNote", async (req, res)=>{
    try{
        const notes = {title, content} = req.body;

        const existNote = await Note.findOne({title})
            if(!existNote){

                const newNotes = new Note({
                    title,
                    content
                })
            }

            await newNotes.save()
            res.status(200).json("Note added successfull")
            console.log('Note added')

            
    }
    catch(error){
        res.status(500).json("Internal server error")
        console.log("Internal server error");
        
    }
    
})

noteRouter.get('/getNote', async (req, res)=>{
    try{
        const notes = await Note.find()
        res.status(200).json("Successfully recieved notes")
    }
    catch(error){
        res.status(500).json("internal server error")
        console.log("internal server error");
        
    }
})