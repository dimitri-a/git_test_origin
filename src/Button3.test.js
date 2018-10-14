import React from 'react'

import renderer from 'react-test-renderer'
import 'jest-styled-components'

import {Button3} from "./Button3";

test('button3 test', () => {
    const tree = renderer.create(<Button3/> ).toJSON()
    expect(tree).toMatchSnapshot()
    //console.log(tree);
   //expect(tree).toHaveStyleRule('color', 'white')
   // expect(tree).toHaveStyleRule('background', 'red')
})