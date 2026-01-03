export type SignupData = {
    username: string,
    email: string,
    password: string
}

export const handleSignup = async (req: SignupData) => {
    try {
        const res = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            body: JSON.stringify(req),
            headers:{
                'Content-type':'application/json'   
                //needed because http needs to know what type is my data
            }
        })

        if (!res.ok) throw new Error('Error registering user!')
    }
    catch (error) {
        console.log(error)
    }
}