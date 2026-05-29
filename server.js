const express = require('express');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/openapi.yaml', (req, res) => {
  res.type('text/yaml').sendFile(path.join(__dirname, 'openapi.yaml'));
});

// In-memory accounts — no database (demo only)
let accounts = [
  { id: 'ACC-1001', name: 'Northwind Traders', industry: 'Retail', status: 'active' },
  { id: 'ACC-1002', name: 'Contoso Ltd', industry: 'Technology', status: 'active' },
  { id: 'ACC-1003', name: 'Fabrikam Inc', industry: 'Manufacturing', status: 'active' },
  { id: 'ACC-1004', name: 'Adventure Works', industry: 'Healthcare', status: 'inactive' },
];

app.get('/accounts', (req, res) => {
  res.json({ count: accounts.length, data: accounts });
});

app.get('/accounts/:id', (req, res) => {
  const found = accounts.find((a) => a.id === req.params.id);
  if (!found) {
    return res.status(404).json({ error: 'Account not found', id: req.params.id });
  }
  res.json(found);
});

app.post('/accounts', (req, res) => {
  const { id, name, industry, status } = req.body || {};
  if (!id || !name || !industry) {
    return res.status(400).json({
      error: 'Required fields: id, name, industry',
    });
  }
  if (accounts.some((a) => a.id === id)) {
    return res.status(409).json({ error: 'Account already exists', id });
  }
  const created = { id, name, industry, status: status || 'active' };
  accounts.push(created);
  res.status(201).json(created);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Accounts API  http://localhost:${PORT}`);
  console.log(`Dashboard     http://localhost:${PORT}/`);
});
