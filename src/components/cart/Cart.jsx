import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CardItem from './cardItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const isEmpty = !cart?.line_items?.length;

    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1" > You have no items in your shopping cart,
                <Link to="/" className={classes.link} > start adding somw </Link>!
            </Typography>)
    }

    const FilledCart = () => {
        return <>
            <Grid container spacing={3} >
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} md={4} lg={2} key={item.id} >
                            <CardItem item={item} 
                                onUpdateCartQty={handleUpdateCartQty}
                                onRemoveFromCart={handleRemoveFromCart}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails} >
                <Typography variant="h4"  > Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>

                <div >
                    <Button className={classes.emptyButton} onClick={handleEmptyCart}  size="large" type="button" variant="contained" color="secondary"> Empty Cart </Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary"> Checkout </Button>
                </div>
            </div>
        </>
    }

    return (
        <Container>
            <div className={classes.toolbar} >
            </div>
            <Typography className={classes.title} gutterBottom variant="h3"  > Your Shopping Cart </Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;
