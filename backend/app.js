const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let data = [
  { id: 1, name: 'India' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'United Kingdom' },
  { id: 4, name: 'Germany' },
  { id: 5, name: 'France' },
  { id: 6, name: 'Japan' },
  { id: 7, name: 'Australia' },
  { id: 8, name: 'Brazil' },
  { id: 9, name: 'United States' },
  { id: 10, name: 'China' }
];

let selected;

app.post('/data', (req, res) => {
  const newData = req.body;
  selected=newData;
  console.log(selected);
  res.json(newData);
});

app.get('/data', (req, res) => {
  res.json(data);
});

// app.get('/data/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const item = data.find((item) => item.id === itemId);
//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ error: 'Item not found' });
//   }
// });

// app.put('/data/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const updatedItem = req.body;
//   const index = data.findIndex((item) => item.id === itemId);
//   if (index !== -1) {
//     data[index] = { ...data[index], ...updatedItem };
//     res.json(data[index]);
//   } else {
//     res.status(404).json({ error: 'Item not found' });
//   }
// });

// app.delete('/data/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const index = data.findIndex((item) => item.id === itemId);
//   if (index !== -1) {
//     data.splice(index, 1);
//     res.json({ message: 'Item deleted successfully' });
//   } else {
//     res.status(404).json({ error: 'Item not found' });
//   }
// });

// app.get('/already-selected', (req, res) => {
//   res.json(selected);
// });

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
