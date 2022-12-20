import {Login} from "../pages";
import {render, screen} from "@testing-library/react";

test("get text", ()=>{
    render(<Login/>);
    const  textElement = screen.getByText(/Sign in to your account/i);
    expect(textElement).toBeInDocument()
    }
);