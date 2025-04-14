import { createContext, useEffect, useState } from "react";


interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;

}
interface TransactionsContextType {
    transactions: Transaction[]
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps) {
     const [transactions, setTransaction] = useState<Transaction[]>([]);
    
        async function loadTransactions() {
            const Response= await fetch('http://localhost:3333/transactions')
            const data = await Response.json();
    
            setTransaction(data);
    
        }
    
        useEffect(() => {
            loadTransactions()
        }, []);
    

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}
