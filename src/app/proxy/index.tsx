import { useState } from 'react'
import { Data, Title, Wrapper, Button } from './styles'
import { getProxy, type TargetData } from './target'

export const ProxyComponent = () => {
    const [proxiedObj, setProxiedObject] = useState<TargetData | null>()
    const [showProxy, setShowProxy] = useState(false)

    const handleGetProxy = () => {
        if (!showProxy) {
            const proxyData = getProxy()
            setProxiedObject(proxyData)
            setShowProxy(true)
        } else {
            setProxiedObject(null)
            setShowProxy(false)
        }
    }

    return (
        <Wrapper>
            <Title>Proxy</Title>
            <Button onClick={() => handleGetProxy()}>
                {`${showProxy ? "Скрыть" : "Показать"} значение`}
            </Button>
            <Data>
                {proxiedObj?.name || ""}
            </Data>
        </Wrapper>
    )
}