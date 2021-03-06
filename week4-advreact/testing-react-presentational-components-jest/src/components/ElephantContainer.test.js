import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"

import Elephant from "./Elephant"
import ElephantContainer from "./ElephantContainer"

Enzyme.configure({ adapter: new Adapter() })

describe("ElephantContainer", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ElephantContainer />
      </BrowserRouter>
    )
  })

  it("starts with a big elephant", () => {
    expect(wrapper.find(Elephant).props().text).toMatch("big elephant")
  })

  it('it changes the image when clicked', () => {
    const elephantComponent = wrapper.find(Elephant)
    const imageBefore = elephantComponent.props().image

    act(() => {
      wrapper
        .find(Elephant)
        .props()
        .onClick()
    })
    wrapper.update()
    expect(wrapper.find(Elephant).props().image).not.toEqual(imageBefore)
  })

  it('changes back when the image is clicked twice', () => {
    const elephantComponent = wrapper.find(Elephant)
    const imageBefore = elephantComponent.props().image

    act(() => {
      wrapper
        .find(Elephant)
        .props()
        .onClick()
    })
    wrapper.update()

    act(() => {
      wrapper
      .find(Elephant)
      .props()
      .onClick()
    })
    wrapper.update()

    expect(wrapper.find(Elephant).props().image).toEqual(imageBefore)
  })
})
