import React, {useState, useEffect} from "react";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Оновлюємо стан з поточним часом кожну секунду
        setCurrentTime(new Date());
      }, 1000); // Оновлення кожну секунду
  
      // При завершенні компонента, зупиняємо інтервал
      return () => clearInterval(intervalId);
    }, []); // Пустий масив означає, що ефект буде виконуватися лише після монтування компонента
  
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const day = currentTime.getDate();
    const month = currentTime.getMonth();
    const year = currentTime.getFullYear();
  
    return (
      <div>
        <h1>Now time:</h1>
        <p> 
          {hours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </p>
        <p>
          {day}.{month < 10 ? '0' + month: month}.{year}
        </p>
      </div>
    );
}

export default Time;