import { BlueCircle } from "./blue";
import { RedSquare } from "./red";
import { Shape } from "./shape";
import { Wrapper, Title } from "./styles";

export const Bridge = () => {
    return (
        <Wrapper>
            <Title>Bridge</Title>

            <Shape shape={BlueCircle} />
            <Shape shape={RedSquare} />
        </Wrapper>
    )
}