import React from "react"
import Enzyme, {mount} from "enzyme"
import {act} from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import Tweet from "./Tweet"

Enzyme.configure({adapter: new Adapter()})

describe("Tweet", () => {
  // YOUR TEST CODE HERE
  let wrapper,
    onClickMock;
  let tweet = {
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
      name: 'Todo',
      profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  };

  beforeEach(() => {
    onClickMock = jest.fn();

    wrapper = mount(<Tweet tweet={tweet} handleClick={onClickMock} className=''/>)
  })
  //putting an 'x' in front of your 'it blocks' will skip the test
  //'xit'

  it('should render a p tag with text', () => {
    expect(wrapper.find('p').text()).toBe("This doesn't look like Kansas");
  })

  it('should render a span tag', () => {
    expect(wrapper.find('span').text()).toBe("Todo");
  })

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    });
  })
})
