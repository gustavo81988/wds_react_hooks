import React, { useEffect, useState } from 'react';

const List = (props) => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(props.getItems(5));
        console.log('Updating Items')
    }, [props.getItems]);

    return items.map( (item) => <div key={item}>{item}</div> );
}

export default List;