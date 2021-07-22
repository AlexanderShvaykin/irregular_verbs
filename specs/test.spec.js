/**
 * @jest-environment jsdom
 */

import Test from '../src/pages/test.svelte'
import { render, fireEvent } from "@testing-library/svelte";

jest.mock("../scripts/utils")
import { getRandom } from "../scripts/utils";
getRandom.mockImplementation((arr) => [arr[0]])

describe("Test component", () => {
  test("should render component correctly", () => {
    const { container } = render(Test);
    expect(container).toContainHTML("<td>arise</td>")
    expect(container).toContainHTML("<td><input type='text' class='form-control'></td>")
    expect(container).toContainHTML("<button class=\"btn btn-success\">Check</button>")
    expect(container).toContainHTML("<button class=\"btn btn-warning\">Reload</button>")
  });

  describe("Check & Reload", () => {
    test("should check show errors and reload worlds and clean answers", () => {
      const { getByText, container } = render(Test);
      let reloadBtn = getByText("Reload");
      let checkBtn = getByText("Check");
      let inputs = container.getElementsByTagName("input");
      let errorContainer = container.ownerDocument.getElementById("0-simple-word");
      let errorContainer2 = container.ownerDocument.getElementById("0-participle-word");
      inputs[0].value = "foo";
      inputs[1].value = "baz";
      fireEvent.change(inputs[0]);
      fireEvent.change(inputs[1]);
      fireEvent.click(checkBtn);

      expect(errorContainer).toHaveTextContent("arose")
      expect(errorContainer2).toHaveTextContent("arisen")

      fireEvent.click(reloadBtn);

      expect(errorContainer).toHaveTextContent("")
      expect(errorContainer2).toHaveTextContent("")

      fireEvent.click(checkBtn);

      expect(inputs[0]).not.toHaveClass("is-invalid")
      expect(inputs[0]).not.toHaveClass("is-valid")
    });
  });
});
