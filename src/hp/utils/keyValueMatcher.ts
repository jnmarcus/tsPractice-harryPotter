export function keyValueMatcher<T>(obj: T): [] | object {
  function findMatches(option) {
    const key = Object.keys(obj);
    const value = Object.values(obj);
    return option[key[0]] === value[0];
  }

  return findMatches
}
