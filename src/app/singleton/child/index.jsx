import { useEffect, useState } from 'react'
import { Data } from '../styles'
import { singletonCreator } from '../utils/singleton'

export const Child = () => {
    const [singleton, setSingleton] = useState()

    useEffect(() => {
        const singletonInstance = singletonCreator.getInstance()
        singletonInstance.setData("testkey2", "Test Data 2")
        setSingleton(singletonInstance)
    }, [])

    return (
        <Data>
            {singleton?.getData("testkey2")} - {singleton?.getCreatedAt()}
        </Data>
    )
}