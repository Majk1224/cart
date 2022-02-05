import '@testing-library/jest-dom';
import React from 'react';
import { render,screen } from '@testing-library/react'
import App from '../App';

describe('test App.js', ()=>{
  beforeAll(async ()=>{

  })

  it('render correctly', () => {
    const wrapper = render(<App />);
    expect(
      screen.getByText('简版购物车')
    ).toBeInTheDocument();
  });

  it('App state', ()=>{
    const app = new App();
    expect(app.state.list).toBeInstanceOf(Array);
    expect(app.state.isSelectAll).toEqual(false);
  })
})
