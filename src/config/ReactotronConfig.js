import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect();
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
