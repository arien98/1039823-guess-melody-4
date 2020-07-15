import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const PropsData = {
  errorsCount: 3,
  onButtonClick: () => {},
};

test(`it renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen {...PropsData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
