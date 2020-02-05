import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { Wrapper, NavWrapper } from './styled';
import Table from './Table';
import FullList from './FullList';
import Top from './Top';

import { ITableDate, IMain } from './interfaces';

const Main: React.FC<IMain> = ({
    firstRates,
    lastRates,
    firstDate,
    lastDate 
}: IMain) => {
    const data: ITableDate[] = Object.keys(lastRates).map(item => ({
        name: item,
        lastValue: lastRates[item],
        diff: +((lastRates[item] - firstRates[item]) / firstRates[item] * 100).toFixed(2),
    }));

    const filteredData: ITableDate[] = data
        .slice()
        .sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff))
        .slice(0, 5)
        .map(({ name, lastValue, diff }) => ({
            name,
            fistValue: firstRates[name],
            lastValue,
            diff,
        }));

    return (
        <Wrapper>
            <NavWrapper>
                <NavLink exact to={'/'} activeClassName={'active'}>Список котировок</NavLink>
                <NavLink to={'/top'} activeClassName={'active'}>Топ-5 котировок</NavLink>
            </NavWrapper>
            <Switch>
                <Route exact path={'/'}>
                    <FullList
                        header={[
                            'Название', `Значение на ${lastDate}`, `Процент по отношению к ${firstDate}`
                        ]}
                        data={data}
                    />
                </Route>
                <Route path={'/top'}>
                    <Top
                        header={[
                            'Название', `Значение на ${firstDate}`, `Значение на ${lastDate}`, 'Динамика'
                        ]}
                        data={filteredData}
                    />
                </Route>
            </Switch>
        </Wrapper>
    );
};

export default Main;