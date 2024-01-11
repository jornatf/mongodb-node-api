# mongodb-node-api

**A Starter Node.js API skeleton with MongoDB.**

## Setup

### Installation

1. First, click on the **"Use this template"** button.
2. Install all npm packages with the command:

```bash
$ npm install
```

### Environment

You can type command:

```bash
$ cp .env.example .env
```

or manually create a `.env` file to the project root and copy/paste this default variables:

```
PORT=3000
DB_NAME=
ATLAS_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority"
```

> **NOTE**
> To fill `DB_NAME` and `ATLAS_URI` variables, please refer to your MongoDB account.

### Default packages installed

| Package      | Description                                 | Docs                                                                         |
| ------------ | ------------------------------------------- | ---------------------------------------------------------------------------- |
| **express**  | API calling and routes                      | [https://expressjs.com/](https://expressjs.com/)                             |
| **nodemon**  | API rendering in Real-time                  | [https://nodemon.io/](https://nodemon.io/)                                   |
| **dotenv**   | Environment manager                         | [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) |
| **mongoose** | Elegant mongodb object modeling for Node.js | [https://mongoosejs.com/](https://mongoosejs.com/)                           |
| **cors**     | Enable CORS with various options            | [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)     |

## Testing and development

```bash
# Run
$ npm run dev

# or run directly
$ nodemon index.js
```

This command will execute `nodemon index.js` command. For each code update, `nodemon` will restart automatically.

## Deployment

You can deploy with **Vercel**: [see more](https://vercel.com/) and check `vercel.json` file.

👇 Clone and Deploy now HERE by clicking here

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjornatf%2Fmongodb-node-api)

## Licence and contributing

Current licence is `MIT`.

**You are free to modify and improve this git project.**
