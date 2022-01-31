import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SelectComponent from "./selectComponent";
import {loadMakesAsync, loadModelsAsync, loadVehiclesAsync} from "../../../redux/thunks";

import styles from "./subHeader.module.scss";

const SearchForm = () => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const dispatch = useDispatch();
  const { makes, models } = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(loadMakesAsync());
	}, [dispatch]);

  const makesOnChange = (make) => {
    setSelectedMake(make);
    dispatch(loadModelsAsync({make: make}));
  };

  const modelsOnChange = (model) => {
    setSelectedModel(model);
  };

  const searchOnClick = () => {
    dispatch(loadVehiclesAsync({make: selectedMake, model: selectedModel}));
  };

  return (
    <div className={styles.subHeader}>
      <SelectComponent data={makes || []} disabled={false} onChangeFun={makesOnChange} title="Make" />
      <SelectComponent data={models || []} disabled={models && models.length ? false : true} onChangeFun={modelsOnChange} title="Model" />

      <button className={styles.subHeader_searchButton} onClick={searchOnClick}>SEARCH</button>
    </div>
  );
};

export default SearchForm;
