import { Title, Wrapper } from './styles'
import { Sender } from './Sender'
import { Listener } from './Listener'

const Observer = () => {
    return (
        <Wrapper>
            <Title>Observer</Title>
            <Sender />
            <Listener />
        </Wrapper>
    )
}

export default Observer;