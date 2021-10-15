import React from 'react'
import styled from 'styled-components'

function Section( props ) {
    return (
        <Wrap bgImg = {props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnTxt}
                    </LeftButton>
                    {
                        props.rightBtnTxt 
                            &&
                        <RightButton>
                            {props.rightBtnTxt}
                        </RightButton>
                    }
                </ButtonGroup>

                <DownArrow src="images/down-arrow.svg">

                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width : 100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: not-repeat;
    /* background-image: url('/images/model-s.jpg'); */
    background-image: ${props => `url("/images/${props.bgImg}")`};
    display:flex;
    flex-direction:column;
    justify-content: space-between; //vertical alignment
    align-items:center; //Horizontal alignment
`;

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`;


const ButtonGroup = styled.div`
    display:flex;
    margin:0px 0px 30px 0px;
    @media (max-width:768px){
        flex-direction:column;
    }
`;

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin: 20px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity:0.65;
    color:black;
`;


const DownArrow = styled.img`
    margin: 20px 0px 0px 0px;
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`;

const Buttons = styled.div`



`;