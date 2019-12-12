import { types, Instance } from "mobx-state-tree";

export const NumbersStore = types
  .model({
    numbers: types.array(types.number)
  })
  .views(self => ({
    get sum() {
      return self.numbers.reduce((sum, n) => sum + n, 0);
    },
    get product() {
      return self.numbers.length
        ? self.numbers.reduce((product, n) => product * n, 1)
        : 0;
    },
    get average() {
      return self.numbers.length
        ? self.numbers.reduce((sum, n) => sum + n, 0) / self.numbers.length
        : 0;
    }
  }))
  .actions(self => ({
    add(value: number) {
      self.numbers.push(value);
    }
  }));

export interface NumbersType extends Instance<typeof NumbersStore> {}
