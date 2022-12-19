import {Login} from "../pages";
import {render, screen} from "@testing-library/react";

test("username input should be rendered", ()=>{
    render(<Login/>);
    const  userInputEl = screen.getByPlaceholderText(/Email address/i);
    expect(userInputEl).toBeInDocument()
    }
);