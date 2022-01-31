import apiClient from "../utils/apiClient";
import {
	MAKES_ENDPOINT,
	MODELS_ENDPOINT,
	VEHICLES_ENDPOINT
} from "../utils/constants"

class VehiclesService {
	getMakes = () => apiClient().get(MAKES_ENDPOINT);
	getModels = (params) => apiClient().get(`${MODELS_ENDPOINT}?make=${params.make}`);
	getVehicles = (params) => apiClient().get(`${VEHICLES_ENDPOINT}?make=${params.make}&model=${params.model}`);
}

export default new VehiclesService();