"use client"
import { createMenuItem, MenuItem } from "@/services/menu";
import { useState } from "react";


export default function createMenu() {

    const [menu, setMenu] = useState<MenuItem>({
        name: '',
        imageURL: '',
        price: '$' + 0.00,
        category: '',
        active: true,
    })

    const handleCreateMenu = async () => {
        try {
            await createMenuItem(menu)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen  flex justify-center items-center" style={{ backgroundImage: "url('/foodbg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >

            <div className=" rounded-xl  flex flex-col  gap-10 font-semibold bg-gray-100 w-160 h-160  shadow-2xl p-5  " >

                <div className="w-150 h-30 bg-blue-100 opacity-100 rounded-2xl flex justify-center items-center ">

                    <label className="cursor-pointer text-lg font-semibold">
                        Click to choose Image
                        <input
                            type="file"
                            className="hidden"
                            onChange={e => {
                                if (e.target.files && e.target.files[0]) {
                                    setMenu({ ...menu, file: e.target.files[0] }); // temporarily store the file
                                }
                            }}
                        />
                    </label>
                </div>

                <div className="grid grid-rows-2 gap-3 justify-left items-left ">

                    <span className=" grid grid-rows-2">
                        <label>Name</label>
                        <input type="text" className="rounded-xl h-10 w-90 bg-white focus:outline-none border border-gray-300 p-5" placeholder="e.g. Cheeseburger" value={menu.name} onChange={e => setMenu({ ...menu, name: e.target.value })} />
                    </span>

                    <span className=" grid grid-rows-2">
                        <label>Image</label>
                        <input width={10} type="text" className="rounded-xl h-10 w-90 bg-white focus:outline-none border border-gray-300 p-5" placeholder="imageURL" value={menu.imageURL} onChange={e => setMenu({ ...menu, imageURL: e.target.value })} />
                    </span>

                </div>

                <div className="grid grid-cols-2 justify-left items-left ">
                    <span className=" grid grid-rows-2">
                        <label>Price</label>
                        <input width={10} type="number" className="rounded-xl h-10 w-60 bg-white focus:outline-none border border-gray-300 p-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="$ 0.00" value={menu.price} onChange={e => setMenu({ ...menu, price: +e.target.value })} />
                    </span>

                    <span className=" grid grid-rows-2">
                        <label>Category</label>
                        <input width={10} type="text" className="rounded-xl h-10 w-60 bg-white focus:outline-none border border-gray-300 p-5" placeholder="category" value={menu.category} onChange={e => setMenu({ ...menu, category: e.target.value })} />
                    </span>
                    
                    
                </div>
                    
                <button onClick={handleCreateMenu} className="p-5 bg-purple-200 rounded-2xl">Submit</button>
            </div>


        </div>
    )

}