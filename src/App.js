import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Table } from './components/Table';
import { IconSort } from './components/IconSort';
import { generateOne } from './helpers/generate';
import { sort } from './helpers/sort';
import css from './app.module.scss';


function App() {
    const defaultOrderedBy = { name: 'asc' };

    const [pageSize, setPageSize] = useState(10);
    const [currentRows, setRows] = useState([]);
    const [generatedRows, setGeneratedRows] = useState([]);
    const [totalRows, setTotalRows] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [orderedBy, setOrderedBy] = useState(defaultOrderedBy);

    useEffect(() => {
        setRows(getRows());
    }, [currentPage, generatedRows]);

    const getPages = () => {
        const pages = Math.round(Math.ceil(generatedRows.length / pageSize));

        return  pages > 0 ? pages : 1;
    }


    const getRows = () => {
        const b = (currentPage - 1) * pageSize;
        const e = (currentPage - 1) * pageSize + pageSize;

        return generatedRows.slice(b, e);
    };


    const handleGenerate = () => {
        let rows = [], r = 0;

        console.log('start');

        while(r < totalRows) {
            rows[r] = {};
            let c = 0;
            rows[r].name = generateOne()
            while(c < 5) {
                rows[r][c] = generateOne();
                c++;
            }
            r++;
        }

        console.log('done');

        setGeneratedRows(sort(rows, 'name'));
        setOrderedBy(defaultOrderedBy);
    };


    const handleChangeTotal = (e) => {
        setTotalRows(e.target.value);
    };


    const sortTable = (cellName) => {
        setGeneratedRows(sort(generatedRows, cellName, orderedBy[cellName] === 'asc'));
        setOrderedBy({ [cellName]: orderedBy[cellName] === 'asc' ? 'desc' : 'asc'})
    };


    const handleSearch = (e) => {
        e.preventDefault();

        setRows(generatedRows.filter((row) => {
            return (
                row.name.includes(searchText) ||
                row[0].includes(searchText) ||
                row[1].includes(searchText) ||
                row[2].includes(searchText) ||
                row[3].includes(searchText) ||
                row[4].includes(searchText)
            );
        }));
    };


    return (
        <>
            <div style={{ margin: '1rem' }}>
                Количество элементов (100 000) больше трудно браузеру<br />
                <input className={css.input} type="text" onChange={handleChangeTotal} value={totalRows}/>
                <br />
                Элементов на странице<br />
                <input className={css.input} type="text" onChange={(e) => setPageSize(e.target.value)} value={pageSize}/>
                <br />
                <button className={css.button} onClick={handleGenerate}>Создать новый список</button>
            </div>

            <form onSubmit={handleSearch} style={{ margin: '1rem' }}>
                <input className={css.input} type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                <button className={css.button}>Искать</button>
            </form>

            <Table cells={6} className={css.table}>
                <Table.Header>
                    <Table.Cell>
                        Named header
                        <IconSort sortBy={() => sortTable('name')} fieldName="name" orderedBy={orderedBy}/>
                    </Table.Cell>
                    <Table.Cell>Header 2</Table.Cell>
                    <Table.Cell>Header 3</Table.Cell>
                    <Table.Cell>Header 4</Table.Cell>
                    <Table.Cell>Header 5</Table.Cell>
                    <Table.Cell>Header 6</Table.Cell>
                </Table.Header>
                {
                    currentRows.map((row, i) => {
                        return (
                            <Table.Row key={'r' + i}>
                                <Table.Cell>{row.name}</Table.Cell>
                                <Table.Cell>{row[0]}</Table.Cell>
                                <Table.Cell>{row[1]}</Table.Cell>
                                <Table.Cell>{row[2]}</Table.Cell>
                                <Table.Cell>{row[3]}</Table.Cell>
                                <Table.Cell>{row[4]}</Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table>

            <div>
                <ul className={css.pagination}>
                {
                    [...new Array(getPages()).keys()].map((value, index) => {
                        return <li
                            key={index}
                            className={classNames(currentPage === value + 1 && css.current)}
                            onClick={() => setCurrentPage(value + 1)}>
                            {value + 1}
                        </li>
                    })
                }
                </ul>
            </div>
        </>
    );
}

export default App;
