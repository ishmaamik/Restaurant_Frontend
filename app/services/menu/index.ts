
export interface MenuItem {
    menuId?: number,
    name: string,
    price: string | number ,
    imageURL?: string
    active: boolean,
    category: string,
    file?: File
}

export interface MenuItemFile extends MenuItem{
    file?: File
}

export const getAllMenuItems = async (): Promise<MenuItem[]> => {
    const res = await fetch('http://localhost:8080/api/menus/all', {cache: 'no-store'});
    const data = await res.json();
    return data;
}

export const createMenuItem= async (menu: MenuItem) =>{
    const res= await fetch('http://localhost:8080/api/menus', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(menu)
    })
}

export const handleFileUpload = async(file: File): Promise<string> =>{
    const formData= new FormData();
    formData.append('file', file)

    const res= await fetch('http://localhost:8080/api/menus/upload-menu-image', {
        method:'POST',
        body: formData
    })

    if(!res.ok){
        throw new Error('Uploading image failed')
    }

    const data= await res.json();
    return data.url
}

export const fetchCategories= async()=>{
    try{
        const res= await fetch('http://localhost:8080/api/menus/get-categories',{
            method:'GET'
        })
        if(!res.ok){
        throw new Error('Fetching categories failed')
    }

    const data= await res.json()
    return data
    }
    catch(error){
        console.log(error)
    }
}