import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const vehiclesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.MAKES_LOAD_START:
			return {
				...state,
				isLoading: true,
				makes: null,
				errorMessage: null,
			};
		case actionTypes.MAKES_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				makes: action.payload,
			};
		case actionTypes.MAKES_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};

		case actionTypes.MODELS_LOAD_START:
			return {
				...state,
				isLoading: true,
				models: null,
				errorMessage: null,
			};
		case actionTypes.MODELS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				models: action.payload,
			};
		case actionTypes.MODELS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};

		case actionTypes.VEHICLES_LOAD_START:
			return {
				...state,
				isLoading: true,
				vehicles: null,
				errorMessage: null,
			};
		case actionTypes.VEHICLES_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				vehicles: action.payload,
			};
		case actionTypes.VEHICLES_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};

		default:
			return state;
	};
};

export default vehiclesReducer;