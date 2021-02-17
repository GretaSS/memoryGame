import React from "react";
import {
    View
}from '../../styled';
import PlayersSelect from '../PlayersSelect';
import BorderSizeSelect from "../BorderSizeSelect";
import Border from '../Border';

import Store from '../../Store';

function Cover (){
   
    return( 
        <Store>
            <View flex alignI='center' justC='space-around' >
                <PlayersSelect />
                <BorderSizeSelect />
            </View>
            <Border />
        </Store>
    )
}

export default Cover;