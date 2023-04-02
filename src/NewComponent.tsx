type StudentType = {
  id: number;
  name: string;
  age: number;
};

type ArrayComponentType = {
  students: Array<StudentType>;
  cars: Array<topCarType>;
};

type topCarType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: ArrayComponentType) => {
  return (
    <div>
      <ol>
        {props.students.map((el) => {
          return (
            <li key={el.id}>
              {el.name} age: {el.age}
            </li>
          );
        })}
      </ol>
      <table>
        {props.cars.map((el, index) => {
          return (
            <span>
              <tr>
                <th key={index + 1}>{el.manufacturer}</th>
              </tr>
              <tr>
                <td key={index + 1}>{el.model}</td>
              </tr>
            </span>
          );
        })}
      </table>
    </div>
  );
};
