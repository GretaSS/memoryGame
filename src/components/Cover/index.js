import React from "react";
import {
    View
}from '../../styled';
import BorderSize from "../BorderSize";

function Cover (){
    return(
        <View id='cover'>
            <View flex alignI='center' justC='space-around' >
                <View flex fD='column' alignI='space-between' justC='center'>
                    <View fontSize='25px'>Players</View>
                    <select id='players'>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </View>
                <BorderSize/>
            </View>
        </View>
    )
}

export default Cover;