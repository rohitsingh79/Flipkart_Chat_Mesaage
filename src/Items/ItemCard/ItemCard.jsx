
import { ItemCardWrapper, ImageWrapper, DescriptionWrapper } from './style';

function  ItemCard({ order , getOrderInfo}) {

    const orderClickHandler = (title) => {

        getOrderInfo(title);
    }

    return (
        <>
            <ItemCardWrapper onClick={()=>orderClickHandler(order.title)}>
                <ImageWrapper> 
                    <img src={order.imageURL}
                        className='main-image'
                    ></img>
                </ImageWrapper>
                <DescriptionWrapper>
                    <div className='title'>{order.title}</div>
                    <div className='orderId'>{order.orderId}</div>
                    {order.messageList.length > 0 && <div className='chat-message'>chat message</div>}
                </DescriptionWrapper>
            </ItemCardWrapper>
            <div style={{ 'width': '100%', 'border': '1px solid #f0f0f0' }} />
        </>
    );
}

export default ItemCard;