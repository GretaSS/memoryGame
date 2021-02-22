import React, {
    useContext, 
    useState, 
    useEffect
} from "react";
import {
    View
}from '../../styled';
import {Context} from '../../Store';
import styled from 'styled-components';

import cardImages from './cards';

const Item = styled(View)`
    width: 100px;
    height: 120px;
    margin: 5px 5px 0 0;
    ${ (props) => props.isFlipped === false ? '' : 
    `border: 2px solid darken($accent-color, 10%);
	transform: rotateY(180deg);` }
`;

function GameOn(){
    const [state, dispatch] = useContext(Context);

    const pictures = cardImages.slice();
    pictures.length = state.height * state.width;
    pictures.push(...pictures);
    pictures.sort(()=> Math.random() - 0.5);

    const cards = pictures.map((imageURL,index) => ({
        id: imageURL+index,
        imageURL: '/dist/fonts/'+imageURL,
        isFlipped: false
        // canFlip: true
    }))

    ///////////////game begins//////////////
    // const [cardsssss, setCards] = useState();
    // const [canFlip, setCanFlip] = useState(false);
	// const [firstCard, setFirstCard] = useState(null);
	// const [secondCard, setSecondCard] = useState(null);

    let firstCard = null;
    let secondCard = null;
    
    function onSuccessGuess() {
        console.log('success');
        firstCard = null;
        secondCard = null;
    }

    function onFailureGuess() {
        console.log('failure');
        firstCard = null;
        secondCard = null;
    } 

    function handleClick(pic) {
        (firstCard) ? secondCard = pic : firstCard = pic;
        if(secondCard) { setTimeout(() => check(),750) }

    }

    function check(){
        ((firstCard.imageURL == secondCard.imageURL) && (firstCard.id !== secondCard.id)) ?  onSuccessGuess() : onFailureGuess();
    }

    return(
        <View id='gameOn' >
            <View flex fW='wrap' justC='space-around'  m='0 auto' w='80%'>
                {cards.map((pic,index) => 
                    <Item 
                        bgImg={pic.imageURL} 
                        key={pic+index} 
                        onClick={() => handleClick(pic)}
                        bgSize='cover'
                        bgPos='center'
                        bgRep='no-repeat'
                    />)
                }
            </View>
        </View>
    )
}

export default GameOn;