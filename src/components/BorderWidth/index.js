import React from "react";
import {
    View
}from '../../styled';

function BorderWidth (){
    return(
        <View flex alignI='center' justC='space-around'>
            <View fontSize='20px'>Width</View>
            <View id='height' m='0 10px'>
                <select>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
            </View>
        </View>
    )
}

export default BorderWidth;