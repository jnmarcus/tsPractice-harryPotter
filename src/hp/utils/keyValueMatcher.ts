type ReturnedFunction = (o: Record<string, any>) => boolean

type MyType<T> = { [k: string]: T };

export const keyValueMatcher = <T>(obj: MyType<T>): ReturnedFunction =>
    (option) => {
      const key = Object.keys(obj);
      const value = Object.values(obj);
      return option[key[0]] === value[0];
    }
