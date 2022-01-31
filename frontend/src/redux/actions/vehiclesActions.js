import actionTypes from "./actionTypes";

const makesLoadStart = () => ({
	type: actionTypes.MAKES_LOAD_START,
});
const makesLoadSuccess = (makes) => ({
	type: actionTypes.MAKES_LOAD_SUCCESS,
	payload: makes,
});
const makesLoadError = (errorMessage) => ({
	type: actionTypes.MAKES_LOAD_ERROR,
	payload: errorMessage,
});

const modelsLoadStart = () => ({
	type: actionTypes.MODELS_LOAD_START,
});
const modelsLoadSuccess = (models) => ({
	type: actionTypes.MODELS_LOAD_SUCCESS,
	payload: models,
});
const modelsLoadError = (errorMessage) => ({
	type: actionTypes.MODELS_LOAD_ERROR,
	payload: errorMessage,
});

const vehiclesLoadStart = () => ({
	type: actionTypes.VEHICLES_LOAD_START,
});
const vehiclesLoadSuccess = (vehicles) => ({
	type: actionTypes.VEHICLES_LOAD_SUCCESS,
	payload: vehicles,
});
const vehiclesLoadError = (errorMessage) => ({
	type: actionTypes.VEHICLES_LOAD_ERROR,
	payload: errorMessage,
});

const vechiclesActions = {
	makesLoadStart,
	makesLoadSuccess,
	makesLoadError,

	modelsLoadStart,
	modelsLoadSuccess,
	modelsLoadError,

	vehiclesLoadStart,
	vehiclesLoadSuccess,
	vehiclesLoadError,
};

export default vechiclesActions;