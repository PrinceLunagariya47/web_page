import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@material-ui/core/Button';
import Cards from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import TextField from '@material-ui/core/TextField';

const Cart_card = (props) => {

    let boolean = true;

    if (props.val.quantity <= 1) {
        boolean = false;
    }

    return (
        <>
            <Cards variant="outlined" className='cards' sx={{ width: 230, background: 'aliceblue' }}>
                <Typography fontSize="lg" fontWeight="lg" sx={{ mb: 0.5 }}>
                    {props.val.title}
                </Typography>
                <Typography fontSize="lg" fontWeight="lg">
                    $  {props.val.price}
                </Typography>
                <AspectRatio minHeight="50px" maxHeight="150px" sx={{ my: 2 }}>
                    <img
                        src={props.val.imgsrc}
                        loading="lazy"
                        alt={props.val.title}
                    />
                </AspectRatio>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="contained" className='buttons' style={{ opacity: boolean ? "1" : "0.7" }} onClick={() => { props.QTYMinus(props.val) }}>
                        <FaMinus />
                    </Button>
                    <TextField
                        id="standard-basic"
                        className='text_fild'
                        value={props.val.quantity}
                        onChange={(e) => { props.CHANGEQuantity(e, props.val) }}
                    />
                    <Button variant="contained" className='buttons' onClick={() => { props.QTYPlus(props.val) }}>
                        <FaPlus />
                    </Button>
                </Box><br />
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="contained" className='buttons delete' onClick={() => { props.DELETECartItem(props.val) }}>
                        <FaTrash />
                    </Button>
                    <Typography fontSize="lg" fontWeight="lg">
                    Total : $ {props.val.price * props.val.quantity}
                </Typography>
                </Box>
            </Cards>
        </>
    )
}

export default Cart_card;