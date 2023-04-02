import {FitlerType} from "./Filter"

type NewComponentType = {
    currentMoney: Array<CurrentMoneyType>
    onClickFilterHandler: (el: FitlerType) => void
}

type CurrentMoneyType = {
    banknote: string
    nominal: number
    number: string
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index + 1}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Rubles')}>Rubles</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};
