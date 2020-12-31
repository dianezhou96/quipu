import { Request, Response, NextFunction } from 'express';
import { QueryResult, QueryResultRow, Client} from 'pg';

const express = require('express'),
      router = express.Router();

module.exports = function (db: Client) {
  router.get('/', function(req: Request, res: Response){
    db.query('SELECT * from balances', (err: Error, db_res: QueryResult<QueryResultRow>) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(db_res.rows);
    });
  });
  return router
};
