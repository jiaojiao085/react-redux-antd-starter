/**
 * Created by jack on 16-9-9.
 */

import { createActions } from 'redux-actions';
import { push } from 'react-router-redux';

import UserService from '../../common/services/user';

export const SET_USER_INFO = 'SET_USER_INFO';

export const { setUserInfo } = createActions({}, SET_USER_INFO);

export const isNeedAuthorized = (user, target, replace, next) => {
	user.isLogin ? next() : replace('/signIn');
};

export const isAuthorized = (user, target, replace, next) => {
	user.isLogin ? replace('/') : next();
};

export const signIn = user =>
	dispatch =>
		UserService.signIn(user)
			.then(data => {
				dispatch(setUserInfo({isLogin: data}));
				dispatch(push('/'));
			})
			.catch(console.error);