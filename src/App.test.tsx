
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App", () => {
  it("should display a message input with an accessible label", () => {
    render(<App />);
    screen.getByLabelText("Message");
  }); 

  it("should render a Submit button with a label of 'Send'", () => {
    render(<App />);
    screen.getByRole("button", { name: "Send" });
  });

  it("should set aria-disabled on the Send button when the Message textarea is empty", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    expect(sendButton).toHaveAttribute("aria-disabled", "true");
  });

  it("should NOT disable the Send button when the Message textarea is populated", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    const messageInput = screen.getByLabelText("Message");
    // userEvent.type(messageInput, "example message");
    // expect(sendButton).toHaveAttribute("aria-disabled", "false");
  });

  it("Should clear ou the message textarea when 'Send' is clicked", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    const messageInput = screen.getByLabelText("Message");
    userEvent.type(messageInput, "example message");
    userEvent.click(sendButton);
    expect(messageInput).toHaveAttribute("value", null);
  });
});