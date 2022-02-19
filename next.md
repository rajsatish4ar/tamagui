- space => gap
- ~button textProps => child selectors~

- animations
	- reanimated
	- css

- create-tamagui-app

- @tamagui/cli: 
  - tamagui test ./packages/site/components/OffsetBox.tsx
  - tamagui sandbox ./packages/site/components/OffsetBox.tsx
  - tamagui compile ./packages/site/components/OffsetBox.tsx

- <Group />
- <Selectable />
- <Draggable />

- floating-ui

- <Menu />
- <MenuDrawer />
- <List /> (works with drawer + draggable + selectable)
- <List.Item />

- See if this isn't too terribly hard:
- childStyle={{
    [Text]: {
      color: 'green',
      hoverStyle: {
        color: 'red'
      }
    }
  }}

- <Checkbox /> / <Switch />
- popover add safety checks around using Popover.Content
- fix: tooltip size bug

- extract gap to css (+ work with visually hidden)

- <Combobox />
  - like vercel, make it adapt into a drawer on mobile
    - option to render as native combo on ios/android

- kitchen sink app
- helper fns docs

- <LinearGradient />
  - fix using theme values
  - make extractable to css

- fix: media queries in styled() not working
- fix: <Paragraph size={} /> not accepting simple numbers

- themes: mobile sizing separate :)

- document: getTokens, useThemeName

- static compilation can go further with variants because it knows they always only accept certain values... see mount-deep-tree

- basic styled() extraction to css at compile time

- type variants [number] / [string] (test Text numberOfLines)

- catchall: { variants: '...' => {} } / styled(Text, () => ({}))

- escape hatch for html props `htmlProps` or tag={} => as={} + work better?

- bring back `onLayout` via features hooks
  - press events?

- focusStyle, focusWithinStyle

- container queries

- auto skeleton components
