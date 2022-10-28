declare const reducers: import("redux").Reducer<import("redux").CombinedState<{
    cart: never;
}>, import("../actions").Action>;
export default reducers;
export declare type State = ReturnType<typeof reducers>;
