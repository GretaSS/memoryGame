import React from "react";
import {
    View
}from '../../styled';
import Players from '../Players';
import BorderSize from "../BorderSize";
import Border from '../Border';

import Store from '../../Store';

function Cover (){
   
    return( 
        <Store>
            <View flex alignI='center' justC='space-around' >
                <Players />
                <BorderSize />
            </View>
            <Border />
        </Store>
    )
}

export default Cover;