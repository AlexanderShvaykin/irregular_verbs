/**
 * @jest-environment jsdom
 */

import Test from '../src/pages/test.svelte'
import { render, fireEvent } from "@testing-library/svelte";

describe("index component", () => {
  test("should render component correctly", () => {
    const { getByText } = render(Test);
    let button = getByText("Reload");

    fireEvent.click(button);
    expect(button.textContent).toBe("Reload")
  });
});
