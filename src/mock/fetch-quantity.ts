export const fetchQuantity = (): Promise<{ available: number }> => {
    const count = Math.random()

    return new Promise((resolve, reject) => {
        if (count >= 0.5) {
            resolve({
                available: count*100
            })
        } else if (count >= 0.2) {
            resolve({
                available: Math.ceil(count * 10)
            })
        } else {
            reject("Cannot find a product")
        }
    })
}