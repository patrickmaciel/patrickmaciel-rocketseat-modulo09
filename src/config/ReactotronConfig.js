import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  // const tron = Reactotron.configure({
  //   host: 'localhost',
  //   enabled: true,
  //   port: 9090,
  // })
  //   .useReactNative()
  //   .setAsyncStorageHandler(AsyncStorage)
  //   .connect();
  tron.clear();

  console.tron = tron;
}
