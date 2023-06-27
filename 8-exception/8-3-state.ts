{
  type SuccessState = {
    result: 'success';
  };
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type ReultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ReultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      //login....
    }
  }

  class App {
    constructor(private userServie: UserService) {}

    run() {
      try {
        this.userServie.login();
      } catch (error) {
        /* catch로 받아오는 에러는 any 타입으로 
        if(error instanceof OfflineError){} 를 사용하여 구분이 불가하다.
        이럴땐 Error State를 사용하는 것이 좋다.
        8-3으로 
      */
        console.log(`catched!`);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
