import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import axios from 'axios';
import oval from '../../images/oval.svg'

const Card = (props) => {

    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const result = await axios(' https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general');
            
            setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
            setLoading(false);
        }
        fetchData();
    }, [fetching]);

    return (
        <div className={css`
            height: 450px;
            max-width: 1000px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0px auto;
            padding: 150px 30px 0 30px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: -20px 20px 0px rgba(255, 255, 255, 0.4);

            h1 {
            text-align : center;
            color:  #6b6b47;
            },

            button {
                padding: 15px 30px;
                border: 2px solid #ffad33;
                background-color: #ffc266;
                border-radius: 10px;
                font-size: 24px;
                margin-top: 70px;
                cursor: pointer;
                box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.4);
                transition: 0.5s all ease;
            },

            button:hover {
                box-shadow: -10px 10px 0px rgba(255, 194, 102, 0.6);
                transform: translateY(-5px);
            }
        `}>
            {loading ? (
                <img
                className={css`
                margin: 40px;
                `}
                src={oval}
                alt='loader'
                />
            ) : (
                <h1>{joke}</h1>
            )}
            
            <button onClick={() => setFetching(!fetching)} >Another One!</button>
        </div >
    );
}

export default Card;
