import PropTypes from 'prop-types'

const Cart = ({bottleCart,handleRemove}) => {
    return (
        <div>
             <div style={{border:'3px solid tomato',borderRadius:'1rem',marginBottom:'0.6rem',width:'35%'}}>
                <ol>
                
                {
                    
                    bottleCart.map(bottleInfo=>                        
                         <li key={bottleInfo.id}>
                            
                            {bottleInfo.name}
                            <img style={{width:'30px',height:'30px',marginRight:'0.5rem',marginLeft:'0.5rem'}} src={bottleInfo.img} />
                            <button onClick={()=>handleRemove(bottleInfo)}>Remove</button> 
                            
                            </li>  
                    )
                }
                </ol>
                </div>
        </div>
    );
};

Cart.propTypes={
    bottleCart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Cart;