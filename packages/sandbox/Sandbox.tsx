import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'tamagui'

import Tamagui from './tamagui.config'

export const Sandbox = () => {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    style.innerText = Tamagui.getCSS()
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const [scale, setScale] = useState(1)

  return (
    <Tamagui.Provider defaultTheme="light">
      <Button
        animation="springy"
        scale={scale}
        onPress={() => {
          setScale(Math.max(0.5, Math.random() * 3))
        }}
      >
        hello world
      </Button>
    </Tamagui.Provider>
  )
}
