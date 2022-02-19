import { Activity, Airplay, Gift } from '@tamagui/feather-icons'
import React from 'react'
import { Button, InteractiveContainer, Theme, XStack, YStack } from 'tamagui'

export function ButtonDemo() {
  return (
    <XStack maxHeight="100%" maxWidth="100%" justifyContent="flex-start">
      <XStack space px="$8">
        <Theme name="dark">
          <Buttons />
        </Theme>
        <Theme name="light">
          <Buttons />
        </Theme>
        <Theme name="blue">
          <Buttons />
        </Theme>
        <Theme name="red">
          <Buttons />
        </Theme>
        <Theme name="orange">
          <Buttons />
        </Theme>
      </XStack>
    </XStack>
  )
}

function Buttons(props) {
  return (
    <YStack
      ai="center"
      jc="center"
      elevation="$6"
      w={180}
      bc="$bg"
      p="$3"
      br="$4"
      space="$2"
      {...props}
    >
      <Button>Plain</Button>
      <Button icon={Airplay} size="$6">
        Large
      </Button>
      <XStack space>
        <Button themeInverse iconAfter={Gift} size="$2">
          Small Inversed
        </Button>
        <Button icon={Activity} size="$1">
          XS
        </Button>
      </XStack>
      <InteractiveContainer>
        <Button size="$3" br={0} theme="active">
          Active
        </Button>
        <Button size="$3" br={0} theme="yellow">
          Yellow
        </Button>
      </InteractiveContainer>
      <InteractiveContainer>
        <Button size="$2" disabled>
          Disabled
        </Button>
        <Button size="$2" chromeless>
          Chromeless
        </Button>
      </InteractiveContainer>
    </YStack>
  )
}
