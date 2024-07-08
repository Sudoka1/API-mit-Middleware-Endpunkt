# API-mit-Middleware-Endpunkt

# In js. Eine API, ein Endpoint, Eine Middleware. Alles ausgelager. Holt Daten von einer andern API wenn man den Endpoint aufruft. Gibt ein Objekt mit diesen Daten zurück. Mit Dateinamen.

Um eine API zu erstellen, die einen Endpoint und Middleware verwendet, um Daten von einer anderen API abzurufen und als Objekt zurückzugeben, kannst du folgendes Setup in Node.js mit Express verwenden: 

npm init -y
npm install express axios


1 Express und Axios importieren:

const express = require('express');
const axios = require('axios');

express ist ein Framework für Node.js, das das Erstellen von Webanwendungen und APIs erleichtert.
axios ist ein HTTP-Client, der für das Abrufen von Daten von anderen APIs verwendet wird.

2 Express-Anwendung und Port definieren:

const app = express();
const port = 3000;

Eine neue Express-Anwendung wird erstellt und der Port auf 3000 gesetzt.

3 Middleware zum Logging:

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

Diese Middleware protokolliert jede Anfrage (Methode und URL) und ruft next() auf, um die Verarbeitung der Anfrage fortzusetzen.

4 Endpoint zum Abrufen von Daten:

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data'); // URL der externen API anpassen
    const data = response.data;
    res.json({ 
      filename: 'data.json',
      data: data 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

Dieser Endpoint (/api/data) verwendet axios, um Daten von einer externen API abzurufen.
Die abgerufenen Daten werden in einem JSON-Objekt zurückgegeben, das auch einen Dateinamen (filename: 'data.json') enthält.
Bei einem Fehler wird eine Fehlermeldung mit dem Status 500 zurückgegeben.

5 Server starten:

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

Der Server wird gestartet und hört auf Anfragen am definierten Port.


# node server.js


Zusammengefasst zeigt dieser Code, wie man eine Middleware zur Protokollierung einrichtet, einen Endpoint erstellt, der Daten von einer externen API abruft, und diese Daten in einem strukturierten JSON-Format zurückgibt.