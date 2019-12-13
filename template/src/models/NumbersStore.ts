import { types, Instance } from "mobx-state-tree";

let lastKey = 0;

const NumberItemModel = types.model({
  key: types.number,
  value: types.number
});

export const NumbersStore = types
  .model({
    numbers: types.array(NumberItemModel)
  })
  .views(self => ({
    get sum() {
      return self.numbers.reduce((sum, n) => sum + n.value, 0);
    },
    get product() {
      return self.numbers.length
        ? self.numbers.reduce((product, n) => product * n.value, 1)
        : 0;
    },
    get average() {
      return self.numbers.length
        ? self.numbers.reduce((sum, n) => sum + n.value, 0) /
            self.numbers.length
        : 0;
    }
  }))
  .actions(self => ({
    add(value: number) {
      self.numbers.push({ key: ++lastKey, value });
    }
  }));

export interface NumbersType extends Instance<typeof NumbersStore> {}
