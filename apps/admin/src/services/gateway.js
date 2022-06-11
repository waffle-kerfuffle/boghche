import { environment } from "../environments/environment";
import axios from 'axios';

const gate = axios.create({
  baseURL: environment.apiUrl + '/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default gate;