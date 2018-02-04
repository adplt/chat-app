import {result} from 'lodash';
import {mockResponses} from '../config/api.config';
import env from '../config/env.config';
// import uuidV4 from 'uuid/v4';
import {filterObjectProperties} from './transformer.util';
import {highlightNetworkBar} from '../state/actions/common.action';
// import tracker from '../utils/googleAnalytics.util';

// Interceptor that sets the defaultPayload
export const addDefaultPayloadInterceptor = (store) => (config) => {
  if (config.method === 'get') {
    return config;
  }
  const reduxState = store.getState();
  const completeExtraPayload = {
    ...(result(reduxState, 'additionalApiPayload', {})),
    MODIFIED_BY: result(reduxState, 'user.userId'),
  };
  // lang: result(reduxState, 'currentLanguage.id', 'id'),
  // TXID: uuidV4(),
  // profileId: result(reduxState, 'user._id'),
  config.data = Object.assign({}, filterObjectProperties(completeExtraPayload, result(config, 'additional', [])), config.data);
  return config;
};

// Interceptor that checks the status of the response
export const getStatusValidatorInterceptor = () => (response) => {
  const {status, data = {}} = response;
  const responseStatus = result(data, 'ResponseStatus', '');
  if (!responseStatus && responseStatus <= 0) {
    if (status >= 200 && status < 300) return response;
    if (status === 401);
    // const userId = result(store.getState(), 'user.profile.customer.id', 0);
    // const trackerLabel = getInterceptorTrackerLabel(response, userId);
    // const endpoint = result(response, 'config.endpoint', 'NOT FOUND');
    // tracker.trackEvent('API_FAILED: STATUS_CODE_' + status, `ENDPOINT: ${endpoint} ${endpoints[endpoint]}`, {label: trackerLabel});
    throw response;
  } else {
    if (responseStatus === 0) {
      return response;
    }

    throw response;
  }
};

// Interceptor that sets mock response
export const mockInterceptor = (config) => {
  if (env.MOCKAPI) {
    console.log('SETTING MOCK for endpoint', config.endpoint); // eslint-disable-line no-console
    config.adapter = mockAdapter;
  }
  return config;
};

const mockAdapter = (config) => new Promise((resolve) => {
  const mockData = result(mockResponses, config.endpoint, {});
  const response = {
    data: result(mockData, 'response.result', {}),
    status: 200,
    statusText: 'OK - Mocked request',
    headers: {mock: true},
    config: config,
  };
  setTimeout(() => resolve(response), 1000);
});

const noNetworkAdaptor = () => Promise.reject({'data': {'notConnected': true}});

export const getNoNetWorkInterceptor =  (store) => (config) => {
  const isConnected = result(store.getState(), 'networkStatus.isConnected', true);
  if (!isConnected) {
    store.dispatch(highlightNetworkBar({routeName: config.endpoint}));
    return {...config, adapter: noNetworkAdaptor};
  }
  return config;
};

// FOR LATER
// export const demoAccountInterceptor = (config) => {
//   if (/^DEMO-/.test(result(config, 'data', ''))) {
//     if (config.endpoint !== 'KEY') {
//       return null;
//     }
//   }
//   return config;
// };

// export const removeFalsyValues = (config = {}) => {
//   if (config.method === 'get') return config;
//   const transformedPayload = {};
//   const payload = result(config, 'data', {});
//   Object.keys(payload).map((key) => {
//     // Do not remove key if its false or it has some value
//     if ((payload[key] && payload[key] !== 'undefined') || payload[key] === false) transformedPayload[key] = payload[key];
//   });
//   config.data = transformedPayload;
//   return config;
// };
