import React from 'react';
import {useSelector} from "react-redux";
import Header from "./components/header";
import SearchForm from "./components/search-form";
import TableComponent from "./components/table-component";

import placeholder from'../assets/placeholder.png';
import styles from "../styles/index.module.scss";

const Home = () => {
  const { vehicles } = useSelector((state) => state.vehicles);

  return (
    <div className={styles.container}>
      <Header />
      <SearchForm />
      {vehicles 
        ? <TableComponent data={vehicles || []} rowsPerPage={12} />
        : <img src={placeholder} alt="Placeholder" className={styles.placeholder} />
      }
    </div>
  );
};

export default Home;
