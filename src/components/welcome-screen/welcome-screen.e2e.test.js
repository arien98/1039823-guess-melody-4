import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

const ERRORS_COUNT = 3;

describe(`welcome screen`, () => {
  test(`should run callback on click`, () => {
    const onClick = jest.fn();
    const welcomeScreen = shallow(<WelcomeScreen
      errorsCount={ERRORS_COUNT}
      onButtonClick={onClick}
    />);

    const welcomeButton = welcomeScreen.find(`.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(onClick.mock.calls.length).toEqual(1);
  });
});
