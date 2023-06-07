import React from 'react';

interface TableProps<T> {
    data: T[]; // The array of data to render in the table
    columns: Array<keyof T & string>; // The column headers as keys of the data object
  }

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
             <td key={colIndex}>{row[column] as React.ReactNode}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface Person {
    id: number;
    name: string;
    age: number;
  }

  interface PersonAddress {
    id: number;
    name: string;
    age: number;
    address:string;
    pinCode:number;
  }
  
  const GenericsTable: React.FC = () => {
    const data: Person[] = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 30 },
      // Add more data as needed
    ];
    const data2: PersonAddress[] = [
        { id: 1, name: 'John Doe', age: 25 ,address:'Canada',pinCode:12344},
        { id: 2, name: 'Jane Smith', age: 30 ,address:'USA',pinCode:11},
        // Add more data as needed
      ];
  
    const columns: Array<keyof Person> = ['id', 'name', 'age'];
    const columns2: Array<keyof PersonAddress> = ['id', 'name', 'age','address','pinCode'];
  
    return (
      <div className="App">
        <h1>Table Example</h1>
        <Table<Person> data={data} columns={columns} />
        <h1>Table2 Example</h1>
        <Table<PersonAddress> data={data2} columns={columns2} />
      </div>
    );
  };
  
  export default GenericsTable;

  
  
  
  
  
  
  
