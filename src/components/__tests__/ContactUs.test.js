import { screen, render } from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom";

test("should be rendered on browser",()=>{
    render(<ContactUs/>);

    const heading =screen.getByRole("heading");

   expect(heading).toBeInTheDocument();
    })