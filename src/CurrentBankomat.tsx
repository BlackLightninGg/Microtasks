import React from "react";
import styled from "styled-components";
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
  money: MoneyType;
};
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
  return (
    <Banknots
      color={props.money.banknotes === "Dollars" ? "yellowgreen" : "blue"}
    >
      <Name>{props.money.banknotes}</Name>
      <Nominal>{props.money.value}</Nominal>
    </Banknots>
  );
  // <div>
  //   {props.money.banknotes}
  //   {props.money.value}
  // </div>
};

const Banknots = styled.div`
  background-color: ${(props) =>
    props.color === "yellowgreen" ? "yellowgreen" : "blue"};

  // background-color: {(props) => {
  //   if (props.color === "yellowgreen") {
  //     return "yellowgreen";
  //   } else {
  //     return "blue";
  //   }
  // }};
  width: 400px;
  height: 200px;
  margin: 10px;
  text-align: center;
`;

const Name = styled.span`
  display: flex;
  justify-content: center;
`;

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 90px;
`;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// import React from "react";
// import styled from "styled-components";
// import { MoneyType } from "./App";

// type CurrentBankomatPropsType = {
//   money: MoneyType;
// };
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//   return props.money.banknotes === "Dollars" ? (
//     <GreenBanknots>
//       <Name>{props.money.banknotes}</Name>
//       <Nominal>{props.money.value}</Nominal>
//     </GreenBanknots>
//   ) : (
//     <BlueBanknots>
//       <Name>{props.money.banknotes}</Name>
//       <Nominal>{props.money.value}</Nominal>
//     </BlueBanknots>
//   );
//   // <div>
//   //   {props.money.banknotes}
//   //   {props.money.value}
//   // </div>
// };

// const GreenBanknots = styled.div`
//   background-color: yellowgreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
//   text-align: center;
// `;

// const BlueBanknots = styled.div`
//   background-color: blue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const Name = styled.span`
//   display: flex;
//   justify-content: center;
// `;

// const Nominal = styled.span`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
//   font-size: 90px;
// `;
