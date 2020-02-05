import React from 'react';

import Table from './Table';

import { ITable } from './interfaces';

const FullList: React.FC<ITable> = ({
    header,
    data
}: ITable) => (
    <Table
        header={header}
        data={data}
    />
);

export default FullList;