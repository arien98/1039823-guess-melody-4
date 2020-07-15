import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const PropsData = {
  errorsCount: 3,
  onWelcomeButtonClick: () => {},
};

test(`it renders correctly`, () => {
  const tree = renderer
    .create(<App {...PropsData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
