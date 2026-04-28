import type {Dispatch, SetStateAction} from "react";

export interface ICommand {
    execute(): void;
    undo(): void;
}

export class IncrementCommand implements ICommand {
    private readonly setCount: Dispatch<SetStateAction<number>>;

    constructor(setCount: Dispatch<SetStateAction<number>>) {
        this.setCount = setCount;
    }

    execute() {
        this.setCount(prevCount => prevCount + 1);
    }

    undo() {
        this.setCount(prevCount => prevCount - 1);
    }
}

export class DecrementCommand implements ICommand {
    private readonly setCount: Dispatch<SetStateAction<number>>;

    constructor(setCount: Dispatch<SetStateAction<number>>) {
        this.setCount = setCount;
    }

    execute() {
        this.setCount(prevCount => prevCount - 1);
    }

    undo() {
        this.setCount(prevCount => prevCount + 1);
    }
}