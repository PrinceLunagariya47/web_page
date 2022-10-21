import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@material-ui/core/Button';
import Cards from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const Card = (props) => {

    return (
        <Cards variant="outlined" className='cards' sx={{ width: 230, background: 'aliceblue' }}>
            <Typography level="h2" fontSize="22px" sx={{ mb: 0.5 }}>
                {props.val.title}
            </Typography>
            <AspectRatio minHeight="50px" maxHeight="130px" sx={{ my: 2 }}>
                <img
                    src={props.val.imgsrc}
                    loading="lazy"
                    alt={props.val.title}
                />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography fontSize="lg" fontWeight="lg" sx={{ marginLeft: '15px', marginTop: '10px' }}>
                        $  {props.val.price}
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    className='btn'
                    onClick={() => { props.AddItem(props.val) }}
                >
                    Add Cart
                </Button>
            </Box>
        </Cards>
    )
}

export default Card;