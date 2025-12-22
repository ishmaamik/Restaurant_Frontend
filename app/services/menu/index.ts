
export interface MenuItem {
    menuId: number,
    name: string,
    price: number,
    imageURL?: string,
    active: boolean,
    category: string
}

export const getAllMenuItems = async (): Promise<MenuItem[]> => {
    const res = await fetch('http://localhost:8080/api/menus/all', {cache: 'no-store'});
    const data = await res.json();
    return data;
}
