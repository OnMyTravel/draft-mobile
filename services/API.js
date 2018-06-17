import APIClient from './APIClient';
import HttpClient from './HttpClient';

export default new APIClient({ httpClient: new HttpClient({ baseUrl: 'http://192.168.1.90:3001' }) });