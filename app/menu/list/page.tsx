'use client'
import { getAllMenuItems, MenuItem } from '@/services/menu/index';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
export default function Menu() {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([])

    const fetchMenuItems = async () => {
        const res = await getAllMenuItems();
        setMenuItems(res)
        console.log(res)
    }

    useEffect(() => {
        fetchMenuItems()
    }, [])

    return (
        <div className=" grid grid-rows-6 p-20 bg-green-10">
            {
                menuItems.map((item, index) => {
                    
                    const fromLeft= index%2==0
                    
                    return (

                        <motion.div

                            transition={{ease:'easeIn', duration:0.5}}
                            whileInView={{opacity:1, x:0}}  //after animation ends, it will exactly be where it is intended in the classname
                            //animate={{opacity:1, x:0}} for animations above and below screens too
                            initial={{opacity:0, x: fromLeft ? -60 : 60}}
                            viewport={{ once: true }}   //persists if appears once
                            key={item.menuId} 
                            className={`flex ${index % 2 == 0 ? `justify-start` : `justify-end`}`}
                        >
                            <div className={`${fromLeft ?  `pl-40` : 'pr-40'} relative p-4 w-100 bg-green-50 rounded-xl shadow`}>
                                <p className='text-3xl'>{item.name}</p>
                                <motion.img width={200} initial={{opacity:0, x: fromLeft ? -60 : 60}} whileInView={{opacity:1, x:0}} transition={{duration:2, ease:'easeIn'}} viewport={{ once: true }} src={item.imageURL || null} alt={item.name} className='absolute rounded-xl'/>
                                <p className='text-xl pt-50'>{item.price}</p>
                                <p>{item.category}</p>
                            </div>
                        </motion.div>
                    )
                })

            }
        </div>
    )
}