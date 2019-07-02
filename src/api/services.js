import config from './config.js';
import axios from 'axios';

const { apiKey, url } = config;
var getTopArtists = function(country){
	axios({
		method : "GET",
		url : buildApiUrl('geo.gettopartists', { 'country': country })
	}).then(function(res){
		console.log(res);
	});
}
var buildApiUrl = function(method, params){
	return buildUrl(url, { 'method': method, ...params, 'api_key': apiKey, 'format': 'json' })
};
var buildUrl = function(url, params){
	return `${url}?${paramsToUrl(params)}`;
};
var paramsToUrl = function(params){
	return Object.entries(params).map(function(param){
		return paramToUrl(...param);
	}).join('&');
}
var paramToUrl = function(name, value){
	return name + (value ? '=' + value : '');
}

var standalone = { getTopArtists };
export default { ...standalone }