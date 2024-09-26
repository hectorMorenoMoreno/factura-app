import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15
        }
    },
    company:{
        name: 'New Age',
        fiscalNumber: 3123123
    },
    items: [
        {
            id: 1,
            product:'Cpu Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product:'Teclado',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product:'Monitor Asus',
            price: 3299,
            quantity: 1
        }
    ],
    total: 0
}