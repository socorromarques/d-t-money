import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";



interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;

}
export function Transactions() {
    const [transaction, setTransaction] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const Response= await fetch('http://localhost:3333/transactions')
        const data = await Response.json();

        setTransaction(data);

    }

    useEffect(() => {
        loadTransactions()
    }, []);

    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                  <tbody>
                    {transaction.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                              <td width="50%">{transaction.description}</td>
                        <td>
                            <PriceHighlight variant = {transaction.type}>
                                {transaction.price}</PriceHighlight>
                        </td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    
                        )
                    })}
                    
                  </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}