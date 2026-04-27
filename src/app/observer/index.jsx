import { Title, Wrapper } from './styles'
import { Sender } from './Sender'
import { Listener } from './Listener'

export const Observer = () => {
    return (
        <Wrapper>
            <Title>Observer</Title>
            <Sender />
            <Listener />
        </Wrapper>
    )
}