import styled from "styled-components";


export const ItemCardWrapper= styled.div`
display:flex;
flex-direction:row;
min-height:100px;
cursor:pointer;
margin-top:16px;
.border-line{
    width;100%;
    border:1px solid grey;
}
`;

export const ImageWrapper = styled.div`
max-width:10%;
max-height:2%;
.main-image{
    height:50%;
    width:50%;
    
}
`;

export const DescriptionWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
flex:1;
.title{
    align-self:flex-start;
    margin-bottom:5px;
    color:#000000;
}
.orderId{
    align-self:flex-start;
    color:#000000;
}
.chat-message{
    margin-top:8px;
    align-self:flex-start;
    color:#f1f3f6;
}
`;
