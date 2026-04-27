import { useEffect, useState } from 'react'
import { Data, Title, Wrapper } from './styles'
import { singletonCreator, type SingletonInstance } from './utils/singleton'
import { Child } from './child'

export const Singleton = () => {
    const [singleton, setSingleton] = useState<SingletonInstance>()

    useEffect(() => {
        const singletonInstance = singletonCreator.getInstance()
        singletonInstance.setData("testkey1", "Test Data 1")
        setSingleton(singletonInstance)
    }, [])

    return (
        <Wrapper>
            <Title>Singleton</Title>
            <Data>
                {singleton?.getData("testkey1")} - {singleton?.getCreatedAt()}
            </Data>
            <Child />
        </Wrapper>
    )
}