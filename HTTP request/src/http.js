export async function updateUserPlaces(places){

    const resposne = await fetch('http://localhost:3000/user-places', {
        method:'PUT',
        body: JSON.stringify({places}),
        header: {
            'Content-Type': 'application/json'
        }

    })

    const resData = await resposne.json()

    if(!resposne.ok){
        throw new Error('Failed to update user data')
    }

    return resData.message

}