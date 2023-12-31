import { createReducer } from '@reduxjs/toolkit';
import {
	addAuth,
	fetchAPI,
	fetchAPIError,
	fetchAPIFinish,
	refreshAuth,
	refreshDataUser,
	refreshDataUserEnrollments,
	refreshDataUserExamHistories,
	removeAuth,
} from '../actions/auth';

const data = localStorage.getItem('auth')
	? JSON.parse(localStorage.getItem('auth'))
	: {};

const initialState = {
	data,
	loading: false,
	error: null,
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fetchAPI, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchAPIFinish, (state) => {
			state.loading = false;
			state.error = null;
		})
		.addCase(fetchAPIError, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase(addAuth, (state, action) => {
			state.data = action.payload;
			localStorage.setItem('auth', JSON.stringify(state.data));
		})
		.addCase(refreshAuth, (state, action) => {
			state.data = { ...state.data, accessToken: action.payload };
		})
		.addCase(refreshDataUser, (state, action) => {
			state.data = { ...state.data, user: action.payload };
			localStorage.setItem('auth', JSON.stringify(state.data));
		})
		.addCase(refreshDataUserEnrollments, (state, action) => {
			state.data = {
				...state.data,
				user: { ...state.data.user, enrollments: action.payload },
			};
			localStorage.setItem('auth', JSON.stringify(state.data));
		})
		.addCase(refreshDataUserExamHistories, (state, action) => {
			state.data = {
				...state.data,
				user: { ...state.data.user, examHistories: action.payload },
			};
			localStorage.setItem('auth', JSON.stringify(state.data));
		})
		.addCase(removeAuth, (state) => {
			localStorage.removeItem('auth');
			localStorage.removeItem('course');
			state.data = {};
		});
});

export default authReducer;
