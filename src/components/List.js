function List(props) {
    return <div>{
        props.list.map((item, index) => {
            return <li key={item.id}>
                <div>
                    <input type="checkbox" checked={item.checked} onChange={()=>props.changeCheck(item.id)}/>
                    <img src={item.img} />
                </div>
                {/* <span>{index}</span> */}
                <div>
                    <span>名称：{item.name}</span>
                    <span>价格：${item.price}</span>
                </div>
                <div>
                    <button onClick={()=>props.changeNum(item.id, '+')}>+</button>
                    <span>{item.num}</span>
                    <button onClick={()=>props.changeNum(item.id, '-')}>-</button>
                </div>
            </li>
        })
    }</div>;
}

export default List;