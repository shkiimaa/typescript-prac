{
  // union type 을 사용할때 공통되는 타입을 주어 컨트롤한다.

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
