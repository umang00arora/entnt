import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid } from '@material-ui/core';

const ProductsManagement = () => {
  // Mock product data
  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100, stock: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 200, stock: 50 },
    // Add more products as needed
  ];

  return (
    <div style={{ padding: '20px' }} >
      
      <Grid container spacing={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
        <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Products Management
      </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button component={Link} to="/" variant="contained" color="primary" >
            Dashboard
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell >
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: '10px'}}>Edit</Button>
                  <Button variant="contained" color="secondary" size="small">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Add Product</Button>
    </div>
  );
}

export default ProductsManagement;
