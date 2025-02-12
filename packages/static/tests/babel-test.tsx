import { cleanup } from '@testing-library/react'
import * as React from 'react'

import { extractBabel } from './lib/extract'
import { getTestElement, getTestElements } from './lib/testStyles'

process.env.TAMAGUI_TARGET = 'web'
process.env.IS_STATIC = ''

const app = require('./spec/out/out-babel')

window['React'] = React

beforeEach(() => {
  jest.resetModules()
  cleanup()
})

test.skip('styles - 1. extracts to a div for simple views', async () => {
  const { style } = await getTestElement(app.Provider, app.Test1)
  expect(style.backgroundColor).toBe('rgb(255, 0, 0)')
  expect(style.borderTopLeftRadius).toBe('100px')
  expect(style.boxShadow).toBe('0px 0px 10px rgba(0,0,0,1.00)')
})

test.skip('styles - 2. extracts className for complex views but keeps other props', async () => {
  const [truthy, falsy] = await getTestElements(app.Provider, app.Test2)
  expect(truthy.style.backgroundColor).toBe('rgb(255, 255, 255)')
  expect(truthy.style.top).toBe('-14px')
  expect(falsy.style.backgroundColor).toBe('rgb(0, 0, 0)')
  expect(falsy.style.top).toBe('0px')
})

test('styles - 6. spread ternary', async () => {
  const [truthy, falsy] = await getTestElements(app.Provider, app.Test6)
  expect(truthy.style.backgroundColor).toBe('rgb(0, 0, 255)')
  expect(falsy.style.backgroundColor).toBe('rgb(255, 0, 0)')
})

test.skip('styles - 11. all in one', async () => {
  const [truthy, falsy] = await getTestElements(app.Provider, app.Test11)
  expect(truthy.style.height).toBe('31px')
  expect(truthy.style.borderTopLeftRadius).toBe('8px')
  expect(truthy.style.borderTopColor).toBe('rgba(0,0,0,0.15)')
  expect(truthy.style['overflow-x']).toBe('hidden')
  expect(truthy.style.backgroundColor).toBe('rgb(0, 0, 255)')
  expect(falsy.style.height).toBe('0px')
  expect(falsy.style.borderTopLeftRadius).toBe('0px')
  expect(falsy.style.borderTopColor).toBe('rgba(0,0,0,0.15)')
  expect(falsy.style['overflow-x']).toBe('hidden')
  expect(falsy.style.backgroundColor).toBe('rgb(0, 0, 255)')
})

test('basic extraction', async () => {
  const output = await extractBabel(`
    import { YStack } from 'tamagui'
    export function Test() {
      return (
        <YStack backgroundColor="red" />
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code.includes(`"backgroundColor": "red"`)).toBeTruthy()
})

test('basic conditional extraction', async () => {
  const output = await extractBabel(`
    import { YStack } from 'tamagui'
    export function Test() {
      return (
        <>
          <YStack backgroundColor={x ? 'red' : 'blue'} />
          <YStack {...x && { backgroundColor: 'red' }} />
        </>
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code.includes(`_sheet["0"], x ? _sheet["1"] : _sheet["2"]`)).toBeTruthy()
  expect(code.includes(`_sheet["3"], x ? _sheet["4"] : _sheet["5"]`)).toBeTruthy()
})

test('flat transform props', async () => {
  const output = await extractBabel(`
    import { YStack } from 'tamagui'
    export function Test(isLoading) {
      return (
        <YStack
          scale={isLoading ? 1 : 2}
          x={10}
          y={20}
          rotate="10deg"
        />
      )
    }
  `)
  const code = output?.code ?? ''
  expect(code.includes(`  "scale": 2`)).toBeTruthy()
  expect(code.includes(`  "translateX": 10`)).toBeTruthy()
  expect(code.includes(`  "translateY": 20`)).toBeTruthy()
  expect(code.includes(`  "rotate": "10deg"`)).toBeTruthy()
})

// test('handles style order merge properly', async () => {
//   const output = await extractBabel(`
//     import { YStack } from 'tamagui'
//     export function Test(props) {
//       return (
//         <YStack
//           scale={props.isLoading ? 1 : 2}
//           x={10}
//           {...props}
//           rotate="10deg"
//         />
//       )
//     }
//   `)
//   const code = output?.code ?? ''
//   const expectedLinesInOrder = [
//     `_style0: _sheet["1"],`,
//     `_style1: props.isLoading ? _sheet["2"] : _sheet["3"],`,
//     '...props,',
//     '_style3: _sheet["4"]',
//   ]
//   let lastIndex = 0
//   for (const line of expectedLinesInOrder) {
//     const index = code.indexOf(line)
//     expect(index).toBeGreaterThan(0)
//     expect(index).toBeGreaterThan(lastIndex)
//     lastIndex = index
//   }
// })
