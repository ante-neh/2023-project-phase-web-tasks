import AddNote from "./AddNote";
import { render } from "@testing-library/react";
import React from 'react'
describe(AddNote, ()=>{

  test("title test", ()=>{
    const{getByTestId} = render(<AddNote/>)
    const value = getByTestId("addnote").textContent
    expect(value).toEqual("Add a New Note")
  })

  it('should have an input field for the title', () => {
    const { getByTestId } = render(<AddNote />);

    const input = getByTestId('title');

    expect(input).toBeTruthy();
    expect(input.placeholder).toEqual('Title');
  });
  it('should have an textarea field for the content', () => {
    const { getByTestId } = render(<AddNote />);

    const textarea = getByTestId('content');

    expect(textarea).toBeTruthy();
    expect(textarea.placeholder).toEqual('Content');
  });
  
})