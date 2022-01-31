import VehiclesService from "../services/vehicles";
import vechiclesActions from "./actions/vehiclesActions";

export const loadMakesAsync = () => (dispatch) => {
	dispatch(vechiclesActions.makesLoadStart());

	VehiclesService.getMakes()
		.then((response) => dispatch(vechiclesActions.makesLoadSuccess(response.data)))
		.catch((error) => dispatch(vechiclesActions.makesLoadError(error.message)));
};

export const loadModelsAsync = (params) => (dispatch) => {
	dispatch(vechiclesActions.modelsLoadStart());

	VehiclesService.getModels(params)
		.then((response) => dispatch(vechiclesActions.modelsLoadSuccess(response.data)))
		.catch((error) => dispatch(vechiclesActions.modelsLoadError(error.message)));
};

export const loadVehiclesAsync = (params) => (dispatch) => {
	dispatch(vechiclesActions.vehiclesLoadStart());

	VehiclesService.getVehicles(params)
		.then((response) => dispatch(vechiclesActions.vehiclesLoadSuccess(response.data)))
		.catch((error) => dispatch(vechiclesActions.vehiclesLoadError(error.message)));
};