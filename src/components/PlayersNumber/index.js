import React, {useContext} from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store';

function PlayersNumber(){
    const [state, dispatch] = useContext(Context);

    let plArr = ["A","B","C","D"];
    plArr.length = state.plValue;
    
    return(
        <View id='playersNumber'>
            {
                plArr.map((num, key) => 
                    <View key={key}>
                        Player {num} : 
                    </View>
                )
            }
        </View>
    )
}

export default PlayersNumber;