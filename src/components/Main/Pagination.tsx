import React from 'react';

import { PaginationWrapper, PaginationItem } from './styled';

import { ReactComponent as IconPrev } from './images/arrow-prev.svg';
import { ReactComponent as IconNext } from './images/arrow-next.svg';

import { IPagination } from './interfaces';

const Pagination: React.FC<IPagination> = ({
    rowsToShow,
    currentPos,
    setCurrentPos,
    rowsCount
}: IPagination) => {
    const countItems = Math.ceil(rowsCount / rowsToShow);
    const items = [];

    for (let i = 0; i < countItems; i++) {
        items.push(
            <PaginationItem
                key={i}
                onClick={() => setCurrentPos(rowsToShow * i)}
                active={currentPos === rowsToShow * i}
            >
                {i + 1}
            </PaginationItem>
        );
    }

    return (
        <PaginationWrapper countItems={countItems}>
            <PaginationItem
                onClick={() => currentPos > 0 && setCurrentPos(currentPos - rowsToShow)}
                active={currentPos === 0}
            >
                <IconPrev />
            </PaginationItem>
            {items}
            <PaginationItem
                onClick={() => currentPos < rowsToShow * (countItems - 1) && setCurrentPos(currentPos + rowsToShow)}
                active={currentPos === rowsToShow * (countItems - 1)}
            >
                <IconNext />
            </PaginationItem>
        </PaginationWrapper>
    );
};

export default Pagination;