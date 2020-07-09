import React from 'react';
import { render } from '@testing-library/react';
import ListTodoComponent from './Components/todo/listTodo/ListTodoComponent';


import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("Counter Testing", () => {
  test('renders title of Task', () => {
    const wrapper = shallow(<ListTodoComponent />)
    console.log(wrapper.debug())
    expect(wrapper.find("th").text()).toContain("Description");

  });

  
})