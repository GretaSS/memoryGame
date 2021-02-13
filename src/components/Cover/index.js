import React, { useCallback } from "react";
import {
    View
}from '../../styled';
import Players from '../Players';
import BorderSize from "../BorderSize";
import Border from '../Border';


function Cover (){
   
    return( 
        <View id='cover'>
            <View flex alignI='center' justC='space-around' >
                <Players />
                <BorderSize />
            </View>
            <Border />
        </View>
    )
}

export default Cover;