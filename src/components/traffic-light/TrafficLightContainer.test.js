import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../../App";

describe("Traffic light timing and sequence", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("cycles green (5s) → yellow (1s) → red (2s) → green and repeats", () => {
    const { container } = render(<App />);

    const getLights = () => container.querySelectorAll(".TrafficLight");
    let [red, yellow, green] = getLights();

    // Start: green on
    expect(green).toHaveStyle({ backgroundColor: "green" });
    expect(red).toHaveStyle({ backgroundColor: "darkgrey" });
    expect(yellow).toHaveStyle({ backgroundColor: "darkgrey" });

    // After 5s: yellow on
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    [red, yellow, green] = getLights();
    expect(yellow).toHaveStyle({ backgroundColor: "yellow" });
    expect(red).toHaveStyle({ backgroundColor: "darkgrey" });
    expect(green).toHaveStyle({ backgroundColor: "darkgrey" });

    // After 1s more: red on
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    [red, yellow, green] = getLights();
    expect(red).toHaveStyle({ backgroundColor: "red" });
    expect(yellow).toHaveStyle({ backgroundColor: "darkgrey" });
    expect(green).toHaveStyle({ backgroundColor: "darkgrey" });

    // After 2s more: back to green (sequence repeats)
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    [red, yellow, green] = getLights();
    expect(green).toHaveStyle({ backgroundColor: "green" });
    expect(red).toHaveStyle({ backgroundColor: "darkgrey" });
    expect(yellow).toHaveStyle({ backgroundColor: "darkgrey" });
  });
});

