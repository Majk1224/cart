import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Footer'

describe('test Footer.js', ()=>{
    const list = [{id:1,name:'测试',price:100,img:'',checked:false}];
    const newList = [
        {id:1,name:'测试',price:100,img:'',num:1,checked:false},
        {id:2,name:'测试',price:100,img:'',num:2,checked:true}
    ];
    const selectAll = jest.fn();
    
    it('render correctly', async ()=>{
        const wrapper = render(<Footer list={list} />);
        expect(
            await wrapper.findByText('全选')
        ).toBeDefined();
    })

    it('user event', async ()=>{
        const wrapper = render(<Footer list={list} selectAll={selectAll}/>);
        expect(
            await screen.findByText('总量: 0')
        ).toBeDefined();
        expect(
            await screen.findByText('总价: 0.00')
        ).toBeDefined();
        await userEvent.click(wrapper.container.querySelector('input'));
        expect(selectAll).toBeCalled();
        wrapper.rerender(<Footer list={newList} selectAll={selectAll}/>)
        expect(
            await screen.findByText('总量: 2')
        ).toBeDefined();
        expect(
            await screen.findByText('总价: 200.00')
        ).toBeDefined();
    })
})