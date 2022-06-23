export interface Coverage {
    id: string,
    type: string,
    description: string,
    price: number,
    name: string
}

export interface Client {
    id: string,
    dni: string,
    license: string,
    phone: string
}

export interface Detail {
    model: string,
    total: number,
    brand: string,
    year: string
}

export interface RimacState {
    client: Client;
    coverage: Coverage[];
    detail: Detail
}