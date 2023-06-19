{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'success':
        console.log('😃 loaded');
        break;
      case 'fail':
        console.log('😱 no network');
        break;
      case 'loading':
        console.log('👀 loading...');
        break;
      default:
        throw new Error('unkown state');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
