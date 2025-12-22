
export interface MenuItem {
    menuId?: number,
    name: string,
    price: string | number ,
    imageURL?: string,
    active: boolean,
    category: string,
    file?: File
}

export const getAllMenuItems = async (): Promise<MenuItem[]> => {
    const res = await fetch('http://localhost:8080/api/menus/all', {cache: 'no-store'});
    const data = await res.json();
    return data;
}

export const createMenuItem= async (menu: MenuItem) =>{
    const res= await fetch('http://localhost:8080/api/menus', {
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(menu)
    })
}