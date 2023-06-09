import Header from './Header/Header';
import Items from './Items/Items';
import ChatBox from './ChatBox/ChatBox';
import ItemCard from './Items/ItemCard/ItemCard';
import './App.css';
import { OrderDetailChatBox, MainWrapper } from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AppContext from './Context/context';

function App() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [inputData, setInputData] = useState('');
  const [selectedOrder, setSelectedOrder] = useState({});

  const getOrderDetails = async () => {
    const res = await axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
    setOrderDetails(res.data);
    setFilteredDetails(res.data)
  }

  useEffect(() => {
    getOrderDetails();
  }, [])


  useEffect(() => {
    const filteredOrders = orderDetails.filter((order) => {
      return order.title.toLowerCase().includes(inputData.toLowerCase());
    })
    setFilteredDetails(filteredOrders);
  }, [inputData])


  const currentOrderHandler = (currOrder) => {

    setSelectedOrder(currOrder);

  }

  const setInputMessageFromUser = (message, id) => {
    if (id) {
      const messageObject = { messageId: id, message: message, sender: 'USER', timestamp: new Date().getTime(), messageType: typeof message }
      setSelectedOrder({ ...selectedOrder, ...selectedOrder.messageList.push(messageObject) });
    }
  }


  return (
    <div className="App">
      <AppContext.Provider value={{ setInputData, inputData, selectedOrder }}>
        <MainWrapper>
          <OrderDetailChatBox>
            <Header />
            {
              filteredDetails.map((order, index) => <ItemCard order={order} getOrderInfo={currentOrderHandler}></ItemCard>)
            }
          </OrderDetailChatBox>
          {Object.keys(selectedOrder).length > 0 && <OrderDetailChatBox chatWindow>
            <ChatBox selectedOrder={selectedOrder} getMessageFromUser={setInputMessageFromUser} ></ChatBox>
          </OrderDetailChatBox>}
        </MainWrapper>
      </AppContext.Provider>

    </div>
  );
}

export default App;
