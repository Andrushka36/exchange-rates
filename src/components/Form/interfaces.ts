import { Dispatch, SetStateAction } from 'react';

export interface IForm {
    firstDate: string,
    setFirstDate: Dispatch<SetStateAction<string>>,
    lastDate: string,
    setLastDate: Dispatch<SetStateAction<string>>,
    base: string,
    setBase: Dispatch<SetStateAction<string>>,
}

export interface IRow {
    label: string,
    selectedValue: string,
    excluded: string[],
    setDate: Dispatch<SetStateAction<string>>,
    list: string[],
}

export interface IList {
    selectedValue: string,
    list: string[],
    excluded: string[],
    setDate: Dispatch<SetStateAction<string>>,
}