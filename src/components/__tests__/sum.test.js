import { sum } from "../sum"

test("adding two numbers",()=>{
   const result= sum(12,11);

    expect(result).toBe(23);
})