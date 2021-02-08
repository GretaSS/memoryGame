import React from "react";
import {
    View
}from '../../styled';

function Cover (){
    return(
        <View id='cover'>
            <View flex fD='column' alignI='center' justC='center'>
                <View>
                    <select id='players'>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </View>
            </View>
        </View>
    )
}

export default Cover;