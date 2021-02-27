import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { DataType } from '../types/DataType';
import './App.css';

const App = () => {
    const [data, setData] = useState<DataType>([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <div>
            <h1>PageA</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address.street</th>
                        <th>address.suite</th>
                        <th>address.city</th>
                        <th>address.zipcode</th>
                        <th>geo.lat</th>
                        <th>geo.lng</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company.name</th>
                        <th>company.catchPhrase</th>
                        <th>company.bs</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.address.street}</td>
                                <td>{element.address.suite}</td>
                                <td>{element.address.city}</td>
                                <td>{element.address.zipcode}</td>
                                <td>{element.address.geo.lat}</td>
                                <td>{element.address.geo.lng}</td>
                                <td>{element.phone}</td>
                                <td>{element.website}</td>
                                <td>{element.company.name}</td>
                                <td>{element.company.catchPhrase}</td>
                                <td>{element.company.bs}</td>
                            </tr>
                        );
                    })};
        </tbody>
            </table>
        </div>
    );
};

export default App;
