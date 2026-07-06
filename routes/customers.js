const express = require('express');
const router = express.Router();
const Customer = require('../model/Customer');
const { message } = require('statuses');

//get: list all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'An error occured', error: error });
  }
});

//get: by id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findOne({ _id: id });
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).json({ message: 'An error occured', error: error });
  }
});

//post: create customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'An error occured', error: error });
  }
});

//put: update customer
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const customer = req.body;
    const updatedCustomer = await Customer.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: customer,
      },
      {
        new: true,
      },
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'An error occured', error: error });
  }
});
//delete: Delete customer
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCustomer = await Customer.deleteOne({ _id: id });
    res.status(200).json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'An error occured', error: error });
  }
});

module.exports = router;
