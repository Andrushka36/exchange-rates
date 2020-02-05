import { Dispatch, SetStateAction } from 'react';

export interface IMain {
    firstRates: any,
    lastRates: any,
    firstDate: string,
    lastDate: string,
}

export interface ITableDate {
    name: string,
    firstValue?: string,
    lastValue: string,
    diff: number,
}

export interface ITable {
    header: string[],
    data: ITableDate[],
    rowsToShow?: number,
}

export interface ITdStyle {
    readonly dynamics?: string | null,
}

export interface IPagination {
    rowsToShow: number,
    currentPos: number,
    setCurrentPos: Dispatch<SetStateAction<number>>,
    rowsCount: number,
}

export interface IPaginationWrapperStyle {
    readonly countItems: number,
}

export interface IPaginationItemStyle {
    readonly active: boolean,
}