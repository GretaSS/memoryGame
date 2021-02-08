import React from "react";
import {
    View
}from '../../styled';

function Header (){
    return(
        <View id='cover'>
            <View flex justC='center' c='orange'>
                <h1>Memory</h1>
            </View>
        </View>
    )
}

export default Header;