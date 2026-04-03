const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/data.json");

const readData = () => {
  return JSON.parse(fs.readFileSync(filePath));
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getItems = (req, res) => {
  const data = readData();
  res.json(data);
};

const createItem = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description required" });
  }

  const data = readData();

  const newItem = {
    id: Date.now().toString(),
    title,
    description,
    createdAt: new Date()
  };

  data.push(newItem);
  writeData(data);

  res.status(201).json(newItem);
};

const deleteItem = (req, res) => {
  const data = readData();

  const filteredData = data.filter(item => item.id !== req.params.id);

  if (data.length === filteredData.length) {
    return res.status(404).json({ error: "Item not found" });
  }

  writeData(filteredData);

  res.json({ message: "Item deleted successfully" });
};

const updateItem = (req, res) => {
  const data = readData();

  const index = data.findIndex(item => item.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  data[index] = {
    ...data[index],
    ...req.body
  };

  writeData(data);

  res.json(data[index]);
};

const searchItems = (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Search query required" });
  }

  const data = readData();

  const result = data.filter(item =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  res.json(result);
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
  updateItem,
  searchItems
};