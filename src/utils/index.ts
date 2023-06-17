

export const totalPage = (limit:number, totalCount:number):number => {
    return Math.ceil(totalCount/limit)
}

export const pageArrays = (totalPages:number) => {
    const pageArray = []
    for (let i = 1; i < totalPages+1; i++) {
        pageArray.push(i)
    }
    return pageArray
}
