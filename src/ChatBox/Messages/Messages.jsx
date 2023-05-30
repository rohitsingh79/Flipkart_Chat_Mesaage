import { MessagesWrapper, MessageTextWrapper } from './style';
import styled from "styled-components";
import { useEffect, useState } from 'react';

export const Message = styled.div`
padding:16px 16px 32px 16px;
border-radius:${props => props.type === 'bot' ? '0 10px 10px 10px' : '10px 0 10px 10px'};
background:${props => props.type == 'bot' ? 'white' : '#027CD5'};
`;

export const OptionedMessageWrapper = styled.div`
background:#f5f5f5;
.optioned-message
{
    border-bottom:1px solid rgb(240, 240, 240);
    padding:16px;
}

.optioned-text{
    color:#027CD5;
}

.optioned-sub-text{
color:grey;
margin-top:16px;
}
`;

export const TimeStampWrapper = styled.div`
border-radius:20px;
height:20%;
width:20%;
margin:auto auto;
background:white;
padding:8px 24px;
color:grey;
font-weight:500;
margin-bottom:48px;
margin-top:24px;

`;

function Messages({ messageList }) {

    const [lastMessageId, setLastMessageId] = useState('');

    useEffect(() => {
        setLastMessageId(messageList[messageList.length - 1]);
    }, [])




    function OptionedMessage({ options }) {
        return (
            <OptionedMessageWrapper>
                {options.map((optionsMessage) => <div className='optioned-message'>
                    <div className='optioned-text'>{optionsMessage.optionText}</div>
                    {optionsMessage.optionSubText && <div className='optioned-sub-text'>{optionsMessage.optionSubText}</div>}
                </div>)}
            </OptionedMessageWrapper>
        )

    }

    function getTimeStamp(message) {
        console.log('inside', message);
        const timeStamp = message.timestamp;
        const dateTime = new Date(timeStamp);
        const dayDate = dateTime.getDate();
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth();
        const finalDate = `${dayDate}/${month}/${year}`;

        console.log('finalDate', finalDate);

        return (
            <TimeStampWrapper>{finalDate}</TimeStampWrapper>
        )
    }


    const RenderUserBotMessage = () => {
        return (
            <div className='chat-spacing'>{messageList.map((msg, index) => {
                return (
                    <>
                        {getTimeStamp(msg)}
                        {msg.sender == 'BOT' ? <MessageTextWrapper key={`bot-${index}`} type={'bot'}>
                            <div className='message-options-text'>
                                <Message type={'bot'}>
                                    {msg.message}
                                </Message>
                                {msg.messageType == 'optionedMessage' && <OptionedMessage options={msg.options} ></OptionedMessage>}
                            </div>
                        </MessageTextWrapper> :
                        <MessageTextWrapper key={`bot-${index}`} type={'user'}><Message type={'user'}>{msg.message}</Message>
                        </MessageTextWrapper>}
                    </>

                )
            })}</div>

        )
    }

    return (
        <MessagesWrapper>
            {RenderUserBotMessage()}
        </MessagesWrapper>
    );
}

export default Messages;
