import {useState} from "react";
import {TUseMoveProperties, TUseMovePropertiesReturn} from "./types";

const useMove = <T>(): TUseMovePropertiesReturn<T> => {
    const [state, setState] = useState<TUseMoveProperties<T>>({initial: [], bucket: []});

    const move = (id: number) => {
        const bucket: T[] = state.bucket.slice();
        bucket.push(state.initial[id]);
        const initial: T[] = state.initial.slice().splice(id, 1);
        setState({bucket, initial})
    }

    const setInitial = (initial: T[]) => {
        setState({initial, bucket: []})
    }

    return {state, setInitial, move}
}

export default useMove;