import React from 'react'

import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from './Button'

test('button test', () => {
    const tree = renderer.create(<Button primary />).toJSON()
    expect(tree).toMatchSnapshot()
    console.log(tree);
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('background', 'red')
})