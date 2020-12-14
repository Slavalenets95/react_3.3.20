import { combineReducers } from 'redux';
import filters from './filters';
import sort from './sort';
import tickets from './tickets';

export default combineReducers({ filters, sort, tickets });
