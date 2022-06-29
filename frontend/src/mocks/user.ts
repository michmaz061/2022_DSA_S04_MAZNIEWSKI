export const userPageMock: UserPage = {
    user: {
        name: "Jan",
        surname: "Kowalski",
        email: "jan.kowalski@gmail.com",
        imageUrl: "https://www.thispersondoesnotexist.com/image",
        userId: 2137,
        username: "jan.kowalski",
        password: "qwerty"

    },
    purchaseHistory: {
        id: 1,
        userId: 2137,
        purchases: [
            {
                id: 1,
                date: "2020-01-01",
                book: {
                    id: 1,
                    isbn10: "0547928203",
                    isbn13: "9780547928203",
                    title: "The Two Towers: Being the Second Part of The Lord of the Rings",
                    imageUrl: "https://images.isbndb.com/covers/82/03/9780547928203.jpg",
                    author: "J.R.R. Tolkien",
                    price: 21.37
                }
            },

            {
                id: 2,
                date: "2022-11-25",
                book: {
                    id: 2,
                    isbn10: "1101967021",
                    isbn13: "9781101967027",
                    title: "Thrawn (Star Wars) (Star Wars: Thrawn)",
                    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91SxgwHMc0L.jpg",
                    author: "Timothy Zahn",
                    price: 10.00
                }
            },

            {
                id: 3,
                date: "2020-01-02",
                book: {
                    id: 1,
                    isbn10: "0547928203",
                    isbn13: "9780547928203",
                    title: "The Two Towers: Being the Second Part of The Lord of the Rings",
                    imageUrl: "https://images.isbndb.com/covers/82/03/9780547928203.jpg",
                    author: "J.R.R. Tolkien",
                    price: 21.37
                }
            }
            
        ],
        totalValue: 420.69,
        totalPurchases: 2
    },
    paymentMethods: [
        {
            id: 1,
            userId: 2137,
            cardNumber: "1234123412341234",
            cardHolder: "Jan Kowalski",
            cardExpiration: "2020-01-01",
            cardSecurityCode: "123",
            cardBrand: "Visa"
        }
    ]
}

export interface User {
    userId: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    imageUrl: string;
    bio?: string;
    password: string;
}

export interface Book {
    id: number;
    isbn10?: string;
    isbn13: string;
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl: string;
    author: string;
    price: number;
}

export interface Purchase {
    id: number;
    date: string;
    book: Book;
}

export interface PuchaseHistory {
    id: number;
    userId: number;
    purchases: Purchase[];
    totalValue: number;
    totalPurchases: number;
}

export interface PaymentMethod {
    id: number;
    userId: number;
    cardNumber?: string;
    cardHolder?: string;
    cardExpiration?: string;
    cardSecurityCode?: string;
    cardBrand?: string;
}

export interface UserPage {
    user: User;
    purchaseHistory: PuchaseHistory;
    paymentMethods: PaymentMethod[];
}
