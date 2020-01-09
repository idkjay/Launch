import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import Elephant from "./Elephant"
import { BrowserRouter } from "react-router-dom"

describe("Elephant", () => {
  let image, text, wrapper, onClickMock

  beforeEach(() => {
    onClickMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <Elephant
          image="http://fakeurl.com/elephant"
          text="I am an Elephant!"
          onClick={onClickMock}
          />
      </BrowserRouter>
    )
  })

  it("should render an h1 element containing the text received via props", () => {
    expect(wrapper.find("h1").text()).toBe("I am an Elephant!")
  })

  it("should render an img tag with the specific props", () => {
    expect(wrapper.find("img").props()).toEqual({
      src: "http://fakeurl.com/elephant",
      height: "400",
      width: "600"
    })
  })

  it("should render an img tag with the specific props", () => {
    expect(wrapper.find('img').props()['src']).toBe(
      'http://fakeurl.com/elephant'
    )
  })

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should render a link to /facts', () => {
    expect(wrapper.find('Link').props()['to']).toBe('/facts')
  })
})
