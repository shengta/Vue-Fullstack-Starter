import Vuex from 'vuex';
import { createLocalVue, shallow } from '@vue/test-utils';

import Counter from '../Counter';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter', () => {
  let [wrapper, store] = [];
  let [state, actions, mutations, getters] = [];

  beforeEach(() => {
    state = { value: 0 };

    actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
      incrementAsync: jest.fn(),
      decrementAsync: jest.fn(),
      incrementIfOdd: jest.fn(),
      decrementIfEven: jest.fn(),
    };

    mutations = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };

    getters = {
      evenOrOdd: jest.fn(() => 'even'),
    };

    store = new Vuex.Store({
      modules: {
        counter: {
          state,
          actions,
          mutations,
          getters,
        },
      },
    });

    wrapper = shallow(Counter, { store, localVue });
  });

  it('should render initial component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
