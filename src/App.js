import React from 'react'
import List from './components/List'
import Footer from './components/Footer'
import { getList } from './services/'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.changeCheck = this.changeCheck.bind(this);
    this.changeNum = this.changeNum.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  state = {
    list: [],
    isSelectAll:false
  }

  async componentDidMount(){
    let result = await getList();
    let list = result.data.data.list.map(item=>{
      return {...item, num: 0, checked: false, price: item.price.toFixed(2)}
    })
    this.setState({list});
  }

  changeCheck(id){
    let newList = [...this.state.list];
    let index = newList.findIndex(item=>item.id === id);
    newList[index].checked = !newList[index].checked;
    this.setState({list: newList});
  }

  changeNum(id, type){
    let newList = [...this.state.list];
    let index = newList.findIndex(item=>item.id === id);
    // eslint-disable-next-line
    type==='+'?newList[index].num+=1:newList[index].num?newList[index].num-=1:'';
    this.setState({list: newList});
  }

  selectAll(e){
    let newList = [...this.state.list];
    newList.forEach(item=>item.checked=e.target.checked);
    this.setState({list: newList});
  }

  get isSelectAll(){
    return this.state.list.every(item=>item.checked)
  }

  render(){
    let {list} = this.state;
    return <div className="container">
      <p>简版购物车</p>
      <List list={list} changeCheck={this.changeCheck} changeNum={this.changeNum}/>
      <Footer list={list} isSelectAll={this.isSelectAll} selectAll={this.selectAll}/>
    </div>
  }

}

export default App;