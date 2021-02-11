import React from "react";
import {
    View,
    Text
}from '../../styled';

function BorderSize (){
    return(
        <View id='BorderSize' flex fD='column' >
            <Text fontSize='25px'>Border Size</Text>
            <View flex fD='column' alignI='flex-end' justC='center'>
                <View flex alignI='center' justC='space-around'>
                    <View fontSize='20px'>Height</View>
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
                <View flex alignI='center' justC='space-around'>
                    <View fontSize='20px'>Width</View>
                    <View id='width' m='0 10px'>
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
            </View>    
        </View>
    )
}

export default BorderSize;