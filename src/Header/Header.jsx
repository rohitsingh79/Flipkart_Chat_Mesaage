import { HeaderWrapper } from './styles';
import {useContext} from 'react';
import appContext from '../Context/context';



function Header() {

    const {setInputData} = useContext(appContext);

    const inputHandler = (e) => {
        setInputData(e.target.value);
    }



    return (
        <HeaderWrapper >
            <div className='title'>Filter by Title/Order ID</div>
            <input placeholder='Start typing to search '
            onChange = {inputHandler}
             style={{ 'border-bottom': '2px solid black', 'width': '95%', 'color': '#878787' , 'margin-left':'16px',
                'margin-top':'8px'
        }} className='input' />
        </HeaderWrapper>
    );
}

export default Header;