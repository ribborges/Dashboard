export interface getUserResponse {
    id: string,
    _id: string,
    __v: number,
    name: string,
    email: string,
    password: string,
    city: string,
    state: string,
    country: string,
    occupation: string,
    phonenumber: string,
    transactions: Array<string>,
    role: string,
    createdAt: string,
    updatedAt: string;
}

export interface getProductResponse {
    id: string,
    _id: string,
    __v: number,
    name: string,
    price: number,
    description: string,
    category: string,
    rating: number,
    supply: number,
    stat: productStat,
    createdAt: string,
    updatedAt: string;
}

export interface productStat {
    id: string,
    _id: string,
    __v: number,
    productId: string,
    yearlySalesTotal: number,
    yearlyTotalSoldUnits: number,
    year: number,
    monthlyData: string,
    dailyData: string,
    createdAt: string,
    updatedAt: string;
}

export interface getTransactionsResponse {
    id: string,
    _id: string,
    __v: number,
    userId: string,
    cost: string,
    products: Array<{ ObjectId: string }>,
    createdAt: string,
    updatedAt: string;
}