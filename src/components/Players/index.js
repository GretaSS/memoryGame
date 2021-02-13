import React, { useState } from "react";
import {
    View
}from '../../styled';

function Players (){
    const [count, setCount] = useState([2,3,4]);
    const Add = count.map(Add => Add)
    const handleNumberChange = e => {
        console.log(count[e.target.value])
    }
    
    return( 
        <View flex fD='column' alignI='space-between' justC='center'>
            <View fontSize='25px'>Players</View>
            <select 
                onChange={e => handleNumberChange(e)}
                >
                {
                    Add.map((num, key) => <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </select>
        </View>
    )
}

export default Players;