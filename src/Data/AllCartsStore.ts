import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getAllCarts } from './Api';
import { AllCartsType } from '../Types/Types';

class AllCartsStore {
  allCarts: IPromiseBasedObservable<AllCartsType> | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getAllCartsAction = () => {
    this.allCarts = fromPromise(getAllCarts());
  };
}

export default AllCartsStore;
