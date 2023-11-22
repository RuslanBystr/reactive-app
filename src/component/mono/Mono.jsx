import React, { useState, useEffect } from "react";
import axios from "axios";
import Block from "../block/Block";

const Mono = (props) => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCardBalance = async (apiKey) => {
    try {
      const response = await axios.get(
        "https://api.monobank.ua/personal/client-info",
        {
          headers: {
            "X-Token": apiKey,
          },
        }
      );
      setClientData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Помилка при виконанні запиту до Monobank API:", error);
      throw error;
    }
  };

  useEffect(() => {
    // Ваш API ключ Monobank
    const apiKey = "umfK5-xfPq5DlyIKlHZDPzwqQFb5G40uVa8yO69LY_YE";

    const fetchData = async () => {
      try {
        await getCardBalance(apiKey);
      } catch (error) {
        // Обробка помилок
      }
    };

    // Робимо перший запит при завантаженні компонента
    fetchData();

    // Встановлюємо інтервал на 5 хвилин (300000 мілісекунд) для подальших запитів
    const intervalId = setInterval(fetchData, 3000);

    // Повертаємо функцію для очищення інтервалу при розмонтуванні компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="content">
      <Block child={
        <div>
          <h1>Hello</h1>
          {loading ? (
            "Loading"
          ) : clientData && clientData.accounts[0] ? (
            <div>
              {clientData.accounts[0].maskerPan}
            </div>
          ) :(
            "Wtf"
          )
          }
        </div>
      }/>
      <Block child={
        <div>
          <h1>Hello</h1>
        </div>
      }/>
      <Block child={
        <div>
          <h1>Hello</h1>
        </div>
      }/>
    </div>
  );
};

export default Mono;
