import React from 'react';

import { FormWrapper } from './styled';
import Row from './Row';
import { listDates } from '../../common/helpers';
import currency from '../../common/currency';

import { IForm, IRow } from './interfaces';

const Form: React.FC<IForm> = ({
    firstDate,
    setFirstDate,
    lastDate,
    setLastDate,
    base,
    setBase
}: IForm) => {
    const items: IRow[] = [{
        label: 'Выберите начало периода',
        selectedValue: firstDate,
        excluded: [firstDate, lastDate],
        setDate: setFirstDate,
        list: listDates,
    }, {
        label: 'Выберите конец периода',
        selectedValue: lastDate,
        excluded: [firstDate, lastDate],
        setDate: setLastDate,
        list: listDates,
    }, {
        label: 'Выберите номинал',
        selectedValue: base,
        excluded: [base],
        setDate: setBase,
        list: currency,
    }];

    return (
        <FormWrapper>
            {items.map((item, i) => <Row key={i} {...item} />)}
        </FormWrapper>
    );
};

export default Form;