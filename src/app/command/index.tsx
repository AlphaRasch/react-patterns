import {Button, Row, Wrapper} from "./styles.tsx";
import {useRef, useState} from "react";
import {DecrementCommand, type ICommand, IncrementCommand} from "./commands.ts";

export const CommandComponent = () => {
    const [count, setCount] = useState(0);
    const history = useRef<ICommand[]>([])

    const executeCommand = (command: ICommand) => {
        command.execute();
        history.current.push(command);
    }

    const undoCommand = () => {
        const prevCommand = history.current.pop();
        prevCommand?.undo();
    }
    return (
        <Wrapper>
            <h1>{count}</h1>
            <Row>
                <Button onClick={() => executeCommand(new IncrementCommand(setCount))}>+</Button>
                <Button onClick={() => executeCommand(new DecrementCommand(setCount))}>-</Button>
            </Row>
            <Row>
                <Button onClick={() => undoCommand()}>Undo</Button>
            </Row>
        </Wrapper>
    );
}