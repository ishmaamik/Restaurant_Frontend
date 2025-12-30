"use client"
import { createMenuItem, fetchCategories, handleFileUpload, MenuItemFile } from "@/services/menu";
import { useEffect, useState } from "react";

export interface Category {
    types: 'SHAKES' | 'SIDES' | 'DESSERTS' | 'BURGERS'
}


export default function createMenu() {

    const [selectedCategory, setSelectedCategory] = useState<Category>()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const data = await fetchCategories()
            setCategories(data)
        }
        getCategories()
    }, [])

    const [menu, setMenu] = useState<MenuItemFile>({
        name: '',
        imageURL: '',
        price: '',
        category: '',
        active: true,
    })

    const handleCreateMenu = async () => {
        try {
            let imageUrl = menu.imageURL;

            if (menu.file) {
                imageUrl = await handleFileUpload(menu.file)
            }

            await createMenuItem({
                name: menu.name,
                imageURL: imageUrl,
                price: menu.price,
                category: menu.category,
                active: true,
            })
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

                <div className="grid grid-rows-1 gap-3 justify-left items-left ">

                    <span className=" grid grid-rows-2">
                        <label>Name</label>
                        <input type="text" className="rounded-xl h-10 w-90 bg-white focus:outline-none border border-gray-300 p-5" placeholder="e.g. Cheeseburger" value={menu.name} onChange={e => setMenu({ ...menu, name: e.target.value })} />
                    </span>

                </div>

                <div className="grid grid-rows-2 gap-6 justify-left items-left ">
                    <span className=" grid grid-rows-2">
                        <label>Price</label>
                        <input width={10} type="number" className="rounded-xl h-10 w-60 bg-white focus:outline-none border border-gray-300 p-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Tk. 0.00" value={menu.price} onChange={e => setMenu({ ...menu, price: +e.target.value })} />
                    </span>

                    <span className="grid grid-rows-2 gap-2">
                        <label>Category</label>
                        <div className="grid grid-cols-4 gap-2"> {/* ONE grid container for ALL categories */}
                            {categories?.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => [setMenu(
                                        (prev)=>({...prev, category: category})
                                    ), setSelectedCategory(category)]}
                                    className={`p-3 rounded-lg border ${selectedCategory === category
                                            ? 'bg-purple-600 text-white border-purple-600'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-purple-400'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </span>


                </div>

                <button onClick={handleCreateMenu} className="p-5 bg-purple-200 rounded-2xl">Submit</button>
            </div>


        </div>
    )

}




/*
<input width={10} type="text" className="rounded-xl h-10 w-60 bg-white focus:outline-none border border-gray-300 p-5" placeholder="e.g. Main dish, Side dish" value={menu.category} onChange={e => setMenu({ ...menu, category: e.target.value })} />
                        <div className="grid grid-cols-6">
                            {
                                
                            }
                            
                            <div className="rounded-2xl border bg-green-500 w-20 p-2">Main</div> 
                            <div className="rounded-2xl border bg-green-500 w-20 p-2">Side</div> 
                            <div className="rounded-2xl border bg-green-500 w-20 p-2">Dessert</div>
                        </div>
*/