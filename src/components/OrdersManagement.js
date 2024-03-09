import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid } from '@material-ui/core';

const OrdersManagement = () => {
  // Mock order data
  const orders = [
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-07', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-06', status: 'Completed' },
    // Add more orders as needed
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
        <Grid item xs={12} sm={6} >
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
        Orders Management
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
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" style={{marginRight: '10px'}}>View Details</Button>
                  <Button variant="contained" color="secondary" size="small">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrdersManagement;
