export const loadButton = (number) => {
    return (
        {
            type: 'LOAD_BUTTON',
            payload: number
        }
    )
}

export const del = (number) => {
    return(
        {
            type: 'DEL',
            payload: number
        }
    )
}

// export const fac = (number) => {
//     return(
//         {
//             type: 'FAC',
//             payload: number
//         }
//     )
// }

export const clear = (number) => {
    return(
        {
            type: 'CLEAR',
            payload: number
        }
    )
}

export const ans = (number) => {
    return(
        {
            type: 'ANS',
            payload: number
        }
    )
}