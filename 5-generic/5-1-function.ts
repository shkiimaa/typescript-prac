{
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  const result: string = checkNotNull('aaa');
  const result2: number = checkNotNull(123);
}
