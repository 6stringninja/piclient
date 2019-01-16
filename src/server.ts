// lib/app.ts
import express = require('express');
import { request } from 'http';
import { ApiPostWhoInput } from './ApiClients/ApiPostWhoIs';

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
app.get('/api/sh', (req: express.Request, res: express.Response) => {
 // res.send(clientlist);
});
app.get('/who', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({
   // ip: { data: new ServerOs().Ips()[0].ip, clients: clients.map(m => m.name) }
  });
});
app.post('/who', (req, res) => {
  const wi = req.body as ApiPostWhoInput;
  console.log("received");
  if (true  ) {
  console.log(wi);

  //  res.send({ success:true);
   
  } else {
    console.log('bad hash');
  }
});
app.get('/clients', (req: express.Request, res: express.Response) => {
 // console.log(clients);
 // res.send(clients);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

export function dosomething() {
 // const si = new ServerOs();
 // console.log(clientlist.clients.map(c => c.name));
  setTimeout(() => {
    dosomething();
  }, 5000);
}
dosomething();