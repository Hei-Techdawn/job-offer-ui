export type TUseMoveProperties<T> = { initial: T[]; bucket: T[] };
export type TUseMovePropertiesReturn<T> = {
    state: TUseMoveProperties<T>;
    setInitial: (e: T[]) => void;
    move: (e: number) => void;
};
