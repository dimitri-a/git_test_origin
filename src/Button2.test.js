import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button2 } from './Button2'

test('Button2', () => {
    const tree = renderer.create(<Button2 />).toJSON()
    //expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red')
})