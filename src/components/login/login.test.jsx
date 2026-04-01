import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Login } from "./login";

test("Title Test",()=>{

    render(<Login/>);

    let title = screen.getByTestId('title');
    expect(title).toHaveTextContent('Customer Login');

})

test("Forgot Link Test",()=>{

    render(<Login />);

    let link = screen.getByText(/Forgot Password/);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href','http://www.server.com/forgot');

})