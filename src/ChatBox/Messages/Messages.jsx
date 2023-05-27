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

function Messages({ messageList }) {

    const [lastMessageId, setLastMessageId] = useState('');

    useEffect(() => {

        console.log('use effect is executed');

        setLastMessageId(messageList[messageList.length - 1]);

    }, [])

    // console.log('lastMessageId', lastMessageId);



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


    const RenderUserBotMessage = () => {
        return (
            <div className='chat-spacing'>{messageList.map((msg, index) => {
                return msg.sender == 'BOT' ? <MessageTextWrapper key={`bot-${index}`} type={'bot'}>
                    <div className='message-options-text'>
                        <Message type={'bot'}>
                            {msg.message}
                        </Message>
                        {msg.messageType == 'optionedMessage' && <OptionedMessage options={msg.options} ></OptionedMessage>}
                    </div>
                </MessageTextWrapper> :
                    <MessageTextWrapper key={`bot-${index}`} type={'user'}><Message type={'user'}>{msg.message}</Message>
                    </MessageTextWrapper>


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


// {
//     "messageId": "msg2",
//         "message": "Need help with this order",
//             "timestamp": 1632205237669,
//                 "sender": "USER",
//                     "messageType": "text"
// }