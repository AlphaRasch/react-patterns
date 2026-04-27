type Response = {
  valid: boolean;
  promo?: {
    type: 'percent' | 'fixed';
    value: number;
    description: string;
  };
  message?: string;
}

export const fetchPromocode = (promocode: string): Promise<Response> => {
    return new Promise((resolve, reject) => {
        if (promocode === "TESTTEST") {
            resolve({
                valid: true,
                promo: {
                    type: "percent",
                    value: 10,
                    description: "Скидка на первый заказ"
                },
                message: "Промокод применен"
            })
        } else {
            reject("Cannot find a promocode")
        }
    })
}