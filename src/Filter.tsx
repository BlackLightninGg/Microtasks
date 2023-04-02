import {useState} from "react";
import {NewComponent} from "./NewComponent";

export type FitlerType = 'All'| 'Rubles' | 'Dollars'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FitlerType>('All')

    let currentMoney = money


      if (filter === 'Rubles') {
         currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }
      if (filter === 'Dollars') {
         currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }

    const onClickFilterHandler = (el: FitlerType) => {
        setFilter(el);
    }

    return (
         <NewComponent currentMoney = {currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );

}