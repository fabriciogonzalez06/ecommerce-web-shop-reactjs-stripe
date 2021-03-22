/* eslint-disable react/no-danger-with-children */
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({ product,onAddToCart }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent} >
                    <Typography variant="h5" gutterBottom >
                        {product.name}
                    </Typography>
                    <Typography variant="h5"  >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                <IconButton onClick={()=>onAddToCart(product.id,1)} aria-label="Add to Card" >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
