import { ChatBoxWrapper, ChatBoxHeader, ChatBoxImageWrapper } from './style';
import Messages from './Messages/Messages';

function ChatBox({ selectedOrder }) {

    console.log('selectedOrder message list', selectedOrder.messageList);

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
        <Messages>hello</Messages>
        </>
    );
}

export default ChatBox;