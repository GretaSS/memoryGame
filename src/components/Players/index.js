import React, { useContext } from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store'

function Players (){
    const [state, dispatch] = useContext(Context)
    const handleNumberChange = e => {
        dispatch({type: 'SET', value: state.numbers[e.target.value]});
        // console.log(state.numbers[e.target.value])
    };
    
    return( 
        <View flex fD='column' alignI='space-between' justC='center'>
            <View fontSize='25px'>Players</View>
            <select onChange={e => handleNumberChange(e)}>
                {
                    state.numbers.map((num, key) => 
                        <option key={key} value={key}>
                            {num}
                        </option>
                    )
                }
            </select>
        </View>
    )
}

export default Players;