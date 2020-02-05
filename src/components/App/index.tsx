import React, { Fragment, useState, useEffect } from 'react';

import GlobalStyles from '../../global';
import { diff, dateToString } from '../../common/helpers';
import currency from '../../common/currency';
import Form from '../Form';
import Main from '../Main';
import Preloader from '../Preloader';

import { IRequestFuncArgs } from './interfaces';

const App: React.FC = () => {
    const today: Date = new Date();
    const todayUnix: number = today.valueOf();
    const [firstDate, setFirstDate] = useState<string>(dateToString(new Date(todayUnix - diff)));
    const [lastDate, setLastDate] = useState<string>(dateToString(today));
    const [base, setBase] = useState<string>(currency[0]);
    const [cache, setCache] = useState<string>(localStorage.getItem('exchange-rates') || '{}');

    if (firstDate > lastDate) {
        const temp: string = lastDate;
        setLastDate(firstDate);
        setFirstDate(temp);
    }

    const parsedCache = JSON.parse(cache);

    const requestFunc = ({ date, base }: IRequestFuncArgs): void => {
        if (parsedCache[date] && parsedCache[date][base]) {
            return;
        }

        fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`,)
            .then(res => res.json())
            .then(({ rates }) => {
                if (!parsedCache[date]) {
                    parsedCache[date] = {};
                }

                if (rates[base]) delete rates[base];

                parsedCache[date][base] = rates;

                localStorage.setItem('exchange-rates', JSON.stringify(parsedCache));

                setCache(JSON.stringify(parsedCache));
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        requestFunc({
            date: firstDate,
            base,
        });
    }, [firstDate, base]);

    useEffect(() => {
        requestFunc({
            date: lastDate,
            base,
        });
    }, [lastDate, base]);

    return (
        <Fragment>
            <GlobalStyles/>
            <Form
                firstDate={firstDate}
                setFirstDate={setFirstDate}
                lastDate={lastDate}
                setLastDate={setLastDate}
                base={base}
                setBase={setBase}
            />
            {parsedCache[firstDate] && parsedCache[firstDate][base] &&  parsedCache[lastDate] && parsedCache[lastDate][base] ? (
                <Main
                    firstRates={parsedCache[firstDate][base]}
                    lastRates={parsedCache[lastDate][base]}
                    firstDate={firstDate}
                    lastDate={lastDate}
                />
            ) : (
                <Preloader />
            )}
        </Fragment>
    );
};

export default App;