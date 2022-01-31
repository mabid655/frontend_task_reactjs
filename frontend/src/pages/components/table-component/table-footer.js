import React, { useEffect } from "react";

import styles from "./table-component.module.scss";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.tableContainer_tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.tableContainer_tableFooter_button} ${
            page === el
              ? styles.tableContainer_tableFooter_activeButton
              : styles.tableContainer_tableFooter_inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;