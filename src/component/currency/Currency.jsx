import React, {useState, useEffect} from "react";
import axios from "axios";


const Currency = () => {
    const [currency, setCurrency] = useState('USD');

    const apiKey = 'e4b5879685971a50de43a31d';

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await axios.get(
                    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
                );
                setCurrency(response.data);
            } catch (error) {
                console.error('Error curr date', error);
            }
        };

        if (currency && apiKey) {
            fetchCurrencyData();
        }
    }, [currency, apiKey]);

    return (
        <div>
            <h1>Currency</h1>
            <p>USD: {currency.conversion_rates && currency.conversion_rates.UAH}</p>
        </div>
    );
}


export default Currency;