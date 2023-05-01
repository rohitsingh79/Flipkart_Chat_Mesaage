import styled from "styled-components";


export const HeaderWrapper = styled.div`
height:10%;
width:100%;
border-bottom:1px solid #f0f0f0;
display:flex;
jsutify-content:flex-start;
flex-direction:column;
.title{
    color:#212121;
    font-weight:bold;
    margin-top:16px;
    margin-left:16px;
    align-self:flex-start;
}

.input{
        outline: none;
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;  
        border-bottom:black;
}
`;
