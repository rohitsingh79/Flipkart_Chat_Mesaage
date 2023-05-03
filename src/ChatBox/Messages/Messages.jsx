import { MessageWrapper, BotMesageWrapper, UserMessageWrapper } from './style';


function MessageChat({ messageList }) {


    const RenderUserBotMessage = () => {

        return (

            <div>{messageList.map((msg, index) => {

                return msg.sender == 'BOT' ? <BotMesageWrapper>{msg.message}</BotMesageWrapper> : <UserMessageWrapper>{msg.message}</UserMessageWrapper>

            })}</div>

        )
    }

    return (
        <MessageWrapper>
            {RenderUserBotMessage()}
        </MessageWrapper>
    );
}

export default MessageChat;