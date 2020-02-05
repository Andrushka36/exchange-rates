import React, { useState } from 'react';

import { Container, TableWrapper, Tr, Th, Td } from './styled';
import Pagination from './Pagination';

import { ITable } from './interfaces';

const Table: React.FC<ITable> = ({
    header,
    data,
    rowsToShow = 10,
}: ITable) => {
    const [currentPos, setCurrentPos] = useState<number>(0);

    return (
        <Container>
            <TableWrapper>
                <thead>
                    <Tr>
                        {header.map((item, i) => (
                            <Th key={i} >{item}</Th>
                        ))}
                    </Tr>
                </thead>
                <tbody>
                    {data
                        .slice(currentPos, currentPos + rowsToShow)
                        .map(({diff, ...params}, i) => (
                            <Tr key={i}>
                                {Object.values(params).map((param, i) => (
                                    <Td key={i}>{param}</Td>
                                ))}
                                <Td dynamics={diff > 0 ? 'up' : (diff < 0 ? 'down' : null)}>{diff} %</Td>
                            </Tr>
                        ))
                    }
                </tbody>
            </TableWrapper>
            {data.length > rowsToShow && (
                <Pagination
                    rowsToShow={rowsToShow}
                    currentPos={currentPos}
                    setCurrentPos={setCurrentPos}
                    rowsCount={data.length}
                />
            )}
        </Container>
    );
};

export default Table;