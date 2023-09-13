import PropTypes from 'prop-types'
import './bottle.css'

const Bottle = ({bottle,handleCart}) => {
    const{name,price,stock,img} = bottle;
    // const handleCart =(bottle)=>{

      // }
    return (
        <div className='div' style={{border:'2px solid purple',borderRadius:'1rem',marginBottom:'1rem'}}>
            <h5>Name: {name}</h5>
            <h5>Price: {price}</h5>
            <h5>Stock: {stock ? stock : 'Out of stock'}</h5>
            <img style={{height:'40%',width:'50%',borderRadius:'1rem'}} src={img} alt="" />
            <br />
            <button onClick={()=>handleCart(bottle)}>Add to cart</button>
        </div>
    );
};

Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}

export default Bottle;