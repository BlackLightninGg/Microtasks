import React, { useState } from "react";
import "./App.css";
import { Country } from "./Country";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";

export type BanknotsType = "Dollars" | "RUBLS" | "All"; // создадим типы для banknotes -он может быть 'Dollars', 'RUBLS' или 'All' +
export type MoneyType = {
  banknotes: BanknotsType;
  value: number; // не ленимся, убираем заглушку, и пишем правильный тип) +
  number: string; // ложку за Димыча, за... +
};

let defaultMoney: Array<MoneyType> = [
  // типизируем +
  { banknotes: "Dollars", value: 100, number: " a1234567890" },
  { banknotes: "Dollars", value: 50, number: " z1234567890" },
  { banknotes: "RUBLS", value: 100, number: " w1234567890" },
  { banknotes: "Dollars", value: 100, number: " e1234567890" },
  { banknotes: "Dollars", value: 50, number: " c1234567890" },
  { banknotes: "RUBLS", value: 100, number: " r1234567890" },
  { banknotes: "Dollars", value: 50, number: " x1234567890" },
  { banknotes: "RUBLS", value: 50, number: " v1234567890" },
];

// типизируем на входе и выходе +
export const moneyFilter = (
  money: Array<MoneyType>,
  filter: BanknotsType
): Array<MoneyType> => {
  //если пришел filter со значением 'All', то возвращаем все банкноты
  return filter === "Dollars"
    ? money.filter((el) => el.banknotes === filter)
    : filter === "RUBLS"
    ? money.filter((el) => el.banknotes === filter)
    : money;

  //return money.filter... ну да, придется фильтровать
};

function App() {
  // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
  const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney);
  const [filterValue, setFilterValue] = useState<BanknotsType>("All"); // по умолчанию указываем все банкноты

  // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
  // в функцию передаем деньги и фильтр, по которому их будем выдавать(ретёрнуть)
  const filteredMoney = moneyFilter(money, filterValue);
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="App">
      <WrapperCountry color={color}>
        <HexColorPicker color={color} onChange={setColor} />
        <Country
          data={filteredMoney} //отрисовать будем деньги после фильтрации
          setFilterValue={setFilterValue} //useState передаем? Так можно было?!
        />{" "}
      </WrapperCountry>
    </div>
  );
}
const WrapperCountry = styled.div`
  background-color: ${(props) => props.color};
`;

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country

export default App;
