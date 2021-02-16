import React from "react";
import {
    View,
    Text
}from '../../styled';
import BorderHeight from '../BorderHeight';
import BorderWidth from '../BorderWidth';

function BorderSize (){
    return(
        <View id='BorderSize' flex fD='column' >
            <Text fontSize='25px'>Border Size</Text>
            <View flex fD='column' alignI='flex-end' justC='center'>
                <BorderHeight/>
                <BorderWidth/>
            </View>    
        </View>
    )
}

export default BorderSize;