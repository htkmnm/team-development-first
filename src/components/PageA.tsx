import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { DataType } from '../types/DataType';
import '../App.css';
import Header from "./Header";

const PageA: React.FC<{}> = () => {
    const [data, setData] = useState<DataType>([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                let kisuu = res.data;
                const result = kisuu.filter((a: any) => a.id % 2 === 1);
                setData(result)
            });
    }, []);

    return (
        <div>
            <Header />
            <h1>PageA</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PageA;
