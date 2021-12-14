import React, { useState, useEffect } from 'react';
import { Dropdown,Button } from 'react-bootstrap';
import axios from 'axios';
import './Sort.scss';

const Sort = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://countriesnow.space/api/v0.1/countries/population/cities`).then(res => {
            setData(res.data.data)
            console.log(res)
        })
    }, [data])

    return (
        <div className='container'>
            <div className='Sort'>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic"  className='dropdown'>
                        Откуда?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>

                    <Dropdown.Toggle variant="light" id="dropdown-basic"className='dropdown'>
                        Куда?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input type="number" className='dropdown' placeholder='Возраст'/>
                <input type="text" className='dropdown' placeholder='Финансы'/>

                <Dropdown>

                    <Dropdown.Toggle variant="light" id="dropdown-basic"className='dropdown'>
                        Куда?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="warning" className='dropdown'>Найти программы</Button>
            </div>

        </div>
    );
};

export default Sort;

//! Когда Api будет =>
//function simulateNetworkRequest() {
    //     return new Promise((resolve) => setTimeout(resolve, 2000));
    // }
    
    // function LoadingButton() {
    //     const [isLoading, setLoading] = useState(false);
    
    //     useEffect(() => {
    //         if (isLoading) {
    //             simulateNetworkRequest().then(() => {
    //                 setLoading(false);
    //             });
    //         }
    //     }, [isLoading]);
    
    //     const handleClick = () => setLoading(true);
    
    //     return (
    //         <Button
    //             variant="primary"
    //             disabled={isLoading}
    //             onClick={!isLoading ? handleClick : null}
    //         >
    //             {isLoading ? 'Loading…' : 'Click to load'}
    //         </Button>
    //     );
    // }
    
    // render(<LoadingButton />);// 

//!

