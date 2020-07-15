import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

const ERRORS_COUNT = 3;

describe(`welcome screen`, () => {
  test(`should run callback on click`, () => {
    const onClick = jest.fn();
    const welcomeScreen = mount(<WelcomeScreen
      errorsCount={ERRORS_COUNT}
      onButtonClick={onClick}
    />);

    const welcomeButton = welcomeScreen.find(`.welcome__button`);

    welcomeButton.simulate(`click`);

    expect(onClick.mock.calls.length).toBe(1);
  });
});
