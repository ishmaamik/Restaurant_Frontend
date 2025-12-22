'use client'
import { getAllMenuItems, MenuItem } from '@/services/menu/index';
import { useEffect, useState } from 'react';

export default function Menu(){

    const [menuItems, setMenuItems]= useState<MenuItem[]>([])

    const fetchMenuItems= async()=>{
        const res= await getAllMenuItems();
        setMenuItems(res)
        console.log(res)
    }

    useEffect(()=>{
        fetchMenuItems()
    }, [])

    return(
        <div className="gap-6 grid grid-cols-6">
            {
                menuItems.map(item=> (
                    <div key={item.menuId}>
                        <p>{item.name}</p>
                        <img width={100} src={item.imageURL || null} alt={item.name}/>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                    </div>
                ))
            }
        </div>
    )
}