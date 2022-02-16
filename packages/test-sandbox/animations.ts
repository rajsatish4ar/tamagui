import { createAnimations } from '@tamagui/reanimated-animations'

export const animations = createAnimations({
  springy: {
    type: 'spring',
    damping: 20,
    stiffness: 90,
  },
})
