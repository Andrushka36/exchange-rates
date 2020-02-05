import React from 'react';

import { SelectList, SelectItem } from './styled';

import { IList } from './interfaces';

const List: React.FC<IList> = ({
    selectedValue,
    list,
    excluded,
    setDate
}: IList) => (
    <SelectList
        value={selectedValue}
        onChange={(e) => setDate(e.target.value)}
    >
        {list.map((item) => (
            <SelectItem
                key={item}
                disabled={excluded.includes(item)}
                value={item}
            >
                {item}
            </SelectItem>
        ))}
    </SelectList>
);

export default List;