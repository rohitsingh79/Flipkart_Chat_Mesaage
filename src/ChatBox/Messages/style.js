import styled from "styled-components";

export const  MessagesWrapper = styled.div`
width:100%;
height:100%;
background:#f1f3f6;
.chat-spacing{
    margin-left:32px;
    margin-right:32px;
}
overflow-y:scroll;
`;

export const MessageTextWrapper = styled.div`
padding:8px 4px 16px 4px;
display:flex;
justify-content:${props=> props.type=='bot'?'flex-start':'flex-end'};
.message-options-text{
    diplay:block;
}
`;
