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
    ${ (props) => props.isFlipped === false ? `		background: linear-gradient(45deg, #1fa5ff 25%, #1053ff 25%, #1053ff 50%, #1fa5ff 50%, #1fa5ff 75%, #1053ff 75%, #1053ff 100%);
    ` : `transform: rotateY(180deg);` }
`;

function GameOn(){
    const [state, dispatch] = useContext(Context);

    const pictures = cardImages.slice();
    pictures.length = state.height * state.width;
    pictures.push(...pictures);
    pictures.sort(()=> Math.random() - 0.5);

    function shuffle(c){
        c.length=state.height * state.width;
        return c.sort(()=> Math.random() - 0.5);
    }

    function generate(p) {
        const c = p.map((imageURL,index) => ({
            id: imageURL+index,
            imageURL: '/dist/fonts/' + imageURL,
            isFlipped: false,
            canFlip: true
        }))
        return shuffle(c)
    }

    ///////////////game begins//////////////
    const [cards, setCards] = useState(generate(pictures));
    // const [canFlip, setCanFlip] = useState(false);
	// const [firstCard, setFirstCard] = useState(null);
	// const [secondCard, setSecondCard] = useState(null);

    let firstCard = null;
    let secondCard = null;

    function setCardIsFlipped(cardId, isFlipped) {
		setCards(prev => prev.map(c => {
			if (c.id !== cardId)
				return c;
			return {...c, isFlipped};
		}));
	}

    function setCardCanFlip(cardId, canFlip){
        setCards(prev => prev.map(c=> {
            if(c.id !== cardId)
                return c;
            return {...c, canFlip};
        }))
    }
    
    function onSuccessGuess() {
        console.log('success');
        setCardCanFlip(firstCard.id, false);
        setCardCanFlip(secondCard.id, false);
        setCardIsFlipped(firstCard.id, false);
		setCardIsFlipped(secondCard.id, false);
        firstCard = null;
        secondCard = null;
    }

    function onFailureGuess() {
        console.log('failure');
        const firstId = firstCard.id;
        const secondId = secondCard.id;

        setTimeout(() => {
			setCardIsFlipped(firstId, true);
		}, 1000);
		setTimeout(() => {
			setCardIsFlipped(secondId, true);
		}, 1200);

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
            <View flex fW='wrap' justC='space-around' m='0 auto' w='80%'>
                {cards.map((pic,index) => 
                    <Item 
                        bgImg={pic.imageURL} 
                        key={pic+index} 
                        onClick={() => handleClick(pic)}
                        isFlipped={pic.isFlipped}
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