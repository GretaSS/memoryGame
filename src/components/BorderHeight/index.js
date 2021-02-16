import React, { useState } from "react";
import {
    View
}from '../../styled';

function BorderHeight (){
    const [count, setCount] = useState([2,3,4,5,6,7,8]);
    const handleNumberChange = e => {
        console.log(count[e.target.value])
    }

    return(
        <View flex alignI='center' justC='space-around'>
            <View fontSize='20px'>Height</View>
            <View id='height' m='0 10px'>
                <select onChange={e => handleNumberChange(e)}>
                    {
                        count.map((num,key)=> <option key={key} value={key}>
                                {num}
                            </option>
                        )
                    }
                </select>
            </View>
        </View>
    )
}

export default BorderHeight;