
import e from "express";
import { title } from "node:process";
import React, { useState } from "react";

const App = async () => {

    const [note, setNote] = useState();

        const res = await fetch("http://localhost:5000", {

            if(res) {
                console.log("Notes:", res);
                setNote(res)
            }

        })

        const handleSubmit (e){
            e.preventDefault()

            note ={
                title,
                content
            }

            const res = await fetch("http://localhost:5000",{

                method:POST ,
                
                
            })
        }

        

    return (
        
        <div>
            <div>
                <input type="text"} />
                <button onSubmit={handleSubmit}>Add Note</button>
            </div>
        </div>
    )
}