import './style.css';
import SearchIcon from "./../Input/search-icon.png";

const Input = () => {
    return (
    <div className='input_container'>
        <div className='button'>
        <img className='search_icon' src={SearchIcon} alt="" />
        </div>
        <input className='div_input' type="text" placeholder='Buscar produtos, marcas e muito mais...'/>
    </div>
  )
}

export default Input