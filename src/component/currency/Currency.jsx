import React, {useState, useEffect} from "react";
import axios from "axios";


const Currency = () => {
    const [currency, setCurrency] = useState('USD');

    const apiKey = 'e4b5879685971a50de43a31d';

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await axios.get(
                    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`
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
            {currency.conversion_rates['USD']}
        </div>
    );
}


export default Currency;