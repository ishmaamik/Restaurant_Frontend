"use client"
import { createMenuItem, MenuItem } from "@/services/menu";
import { useState } from "react";


export default function createMenu(){

    const [menu, setMenu]= useState<MenuItem>({
        name: '',
        imageURL:'',
        price: 0,
        category: '',
        active: true
    })

    const handleCreateMenu=async()=>{
        try{
            await createMenuItem(menu)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="flex flex-col gap-10 p-10">

            <input width={10} type="text" placeholder="Name" value={menu.name} onChange={e=> setMenu({...menu, name: e.target.value})}/>

            <input width={10} type="text" placeholder="imageURL" value={menu.imageURL} onChange={e=> setMenu({...menu, imageURL: e.target.value})}/>

            <input width={10} type="number" placeholder="price" value={menu.price} onChange={e=> setMenu({...menu, price: +e.target.value})}/>
            
            <input width={10} type="text" placeholder="category" value={menu.category} onChange={e=> setMenu({...menu, category: e.target.value})}/>
            
            <button onClick={handleCreateMenu}>Submit</button>
        </div>
    )

}