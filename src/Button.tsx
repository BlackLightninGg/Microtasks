const onClickSayName = (name: any) => {
  console.log(name);
};


type NameButtonPropsType = {
  name: string;
  callback: () => void
};

export const Button = (props: NameButtonPropsType) => {
  return (
   
    <button onClick={props.callback}>{props.name}</button>
    
  );
};
