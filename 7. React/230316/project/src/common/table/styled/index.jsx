import styled from 'styled-components'

export const Table = styled.table`
    width:100%;
    border-collapse: collapse;
    font-size:12px;
`

export const TableHeader = styled.thead`
    background:black;
    color:#fff;
    
    & td {
        text-align:center !important;
    }
`

export const TableRow = styled.tr`
    & > td:nth-child(2) {
        text-align:left;
    }

    &:nth-child(even) {
        background:#eee;
    }

    &:hover {
        background:#e6e6e6;
        cursor:pointer;
    }
`

export const TableData = styled.td`
    padding:8px;
    text-align:center;
`
