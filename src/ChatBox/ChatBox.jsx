import { ChatBoxWrapper, ChatBoxHeader, ChatBoxImageWrapper } from './style';
import Messages from './Messages/Messages';

function ChatBox({ selectedOrder }) {

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
        <Messages messageList = {selectedOrder.messageList}>hello</Messages>
        </>
    );
}

export default ChatBox;