import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from '../List'

describe('test List.js', ()=>{
    const list = [{id:1,name:'测试',price:100,img:'',checked:false}]
    const changeNum = jest.fn();
    const changeCheck = jest.fn();
    
    it('render correctly', async ()=>{
        const wrapper = render(<List list={list} />);
        expect(
            await wrapper.findByText('名称：测试')
        ).toBeDefined();
    })

    it('user event', async ()=>{
        const wrapper = render(<List list={list} changeNum={changeNum} changeCheck={changeCheck}/>);
        await userEvent.click(wrapper.container.querySelector('.add'));
        expect(changeNum).toBeCalledWith(1, '+');
        await userEvent.click(wrapper.container.querySelector('.red'));
        expect(changeNum).toBeCalledWith(1, '-');
        await userEvent.click(wrapper.container.querySelector('input'));
        expect(changeCheck).toBeCalledWith(1);
    })
})