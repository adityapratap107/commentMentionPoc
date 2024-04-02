import axios from "axios";
import Config from "react-native-config";
export const cancelTokenSource = axios.CancelToken.source();
const Axios = axios.create({
  headers: {
    appKey: Config?.APP_KEY,
    appSecret: Config?.APP_SECRET,
  },
});
export default Axios;
