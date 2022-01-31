import React, {useState} from "react";
import {FileSearchOutlined} from '@ant-design/icons';
import useTable from "./use-table";
import TableFooter from "./table-footer";

import styles from "./table-component.module.scss";

const TableComponent = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className={styles.tableContainer}>
      <h3>Search Results</h3>
      <p>{data.length} Vehicles Found...</p>

      <div className={styles.tableContainer_tableBg}>
        <table className={styles.tableContainer_table}>
          <thead className={styles.tableContainer_table_tableRowHeader}>
            <tr>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Make</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Model</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Engine Power</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Engine Power</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Fuel Type</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Body Type</th>
              <th className={styles.tableContainer_table_tableRowHeader_tableHeader}>Engine Capacity</th>
            </tr>
          </thead>
          <tbody>
            {slice.length
            ? slice.map((el) => (
                <tr className={styles.tableContainer_table_tableRowItems} key={el.model}>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.make}</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.model}</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.enginePowerPS} PS</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.enginePowerKW} KW</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.fuelType}</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.bodyType}</td>
                  <td className={styles.tableContainer_table_tableRowItems_tableCell}>{el.engineCapacity}</td>
                </tr>
              ))
            : null
            }
          </tbody>
        </table>
        {slice.length
          ? <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
          : <div className={styles.tableContainer_noDataBg}>
              <FileSearchOutlined />
              <p>No Data Found!</p>
            </div>
        }
      </div>
    </div>
  );
};

export default TableComponent;
