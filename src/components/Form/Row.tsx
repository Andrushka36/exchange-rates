import React from 'react';

import { RowWrapper, Label } from './styled';
import List from './List';

import { IRow } from './interfaces';

const Row: React.FC<IRow> = ({
    label,
    selectedValue,
    excluded,
    setDate,
    list
}: IRow) => (
    <RowWrapper>
        <Label>{label}</Label>
        <List
            selectedValue={selectedValue}
            list={list}
            excluded={excluded}
            setDate={setDate}
        />
    </RowWrapper>
);

export default Row;