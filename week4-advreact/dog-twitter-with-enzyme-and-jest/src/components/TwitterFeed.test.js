import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import TwitterFeed from "./TwitterFeed"
import Tweet from "./Tweet"

Enzyme.configure({ adapter: new Adapter() })
//Initially mount w the selectedTweetId set to null
//


describe("TwitterFeed", () => {
  let wrapper
  let data = [
    {
      id: 1,
      text: "This doesn't look like Kansas",
      user: {
        name: "Todo",
        profile_image_url:
          "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
      }
    }
  ]

  beforeEach(() => {
    act(() => { //act is used for updating the info in the wrapper
      wrapper = mount(
        <TwitterFeed
          data={data}
        />)
    })
  })

  //YOUR TEST CODE HERE
  it("should return true", () => {
    expect(true).toEqual(true)
  })

  it('initial state of selectedTweetId should be null', () => {
    expect(wrapper.find(Tweet).props().className).toEqual('')
  })

  it('should render a a tweet component', () => {
    expect(wrapper.find(Tweet)).toBeDefined();
  })

  it('tweet props should change on click', () => {
    const tweetComponent = wrapper.find(Tweet);
    const first = tweetComponent.props().className;

    act(() => {
      wrapper
        .find(Tweet)
        .props()
        .handleClick();
    })
    wrapper.update();

    expect(wrapper.find(Tweet).props().className).not.toEqual('')
  })
})
