import { ChatBoxWrapper, ChatBoxHeader, ChatBoxImageWrapper } from './style';
import Messages from './Messages/Messages';
import styled from 'styled-components';
import {useRef , useContext} from 'react';
import appContext from '../Context/context';
const MessageInputBoxWrapper = styled.div`
position:sticky;
bottom:0;
height:40px;
color:grey;
padding:10px;
display:flex;
justify-content:space-between;
align-items:center;
font-size:16px;
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

const ChatBodyInputWrapper = styled.div`
display:flex;
flex-direction:column;
height:90%;
`;

function ChatBox({ selectedOrder , getMessageFromUser }) {

    const inputRef = useRef(null);

    const messageInputHandler = () => {
        getMessageFromUser(inputRef.current.value , selectedOrder.id);
    }

    return (
        <>
            <ChatBoxHeader>
                <ChatBoxImageWrapper>
                    <img src={selectedOrder.imageURL} style={{
                        height: '100%', width: '100%'
                    }} />
                </ChatBoxImageWrapper>
                <div className='title'>{selectedOrder.title}</div>
            </ChatBoxHeader>
            <ChatBodyInputWrapper>
                <Messages messageList={selectedOrder.messageList}/>
                <MessageInputBoxWrapper>
                    <input placeholder='Type a message' className='input' ref = {inputRef}/>
                    <button onClick = {messageInputHandler}>Enter</button>
                </MessageInputBoxWrapper>
                
            </ChatBodyInputWrapper>
        </>
    );
}

export default ChatBox;