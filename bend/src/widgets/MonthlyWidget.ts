import { Request, Response, NextFunction } from 'express';
import { QueryResult, QueryResultRow, Client} from 'pg';

const express = require('express'),
      moment = require('moment'),
      router = express.Router();

module.exports = function (db: Client) {
  const HTTP_OK = 200;
  router.post('/add_record', function(req: Request, res: Response){
    const balance = req.body;
    console.log(req.body);
    let actual, expected, type, user_id, name, date;
    actual = balance.actual ? balance.actual : null;
    expected = balance.estimated;
    type = balance.type;
    user_id = balance.userId;
    name = balance.name;
    date = moment(balance.date, 'YYYY-MM').toDate();
    const values = [actual, expected, type, user_id, name, date]
    const query = 'INSERT INTO balances(actual, expected, type, user_id, name, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    db.query(query, values, (err: Error, res: QueryResult<QueryResultRow>) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted', res.rows);
      }
    });
    res.status(HTTP_OK).end();
  });

  router.get('/get_records', function(req: Request, res: Response){
    console.log(req.query);
    interface GetRecordQuery {
      type: string,
      user_id: string,
    }
    const params = {
      type!: req.query.type as string, 
      user_id!: req.query.user_id as string,
      month!: req.query.month as string
    },
          type = params.type,
          user_id = parseInt(params.user_id),
          date = moment(params.month, 'YYYY-MM');

    //TODO ensure consistency for month datestring
    console.log(type, user_id, date);

    const query = 'SELECT * from balances where type = $1 and user_id = $2 and date = $3'
    const values = [type, user_id, date];

    db.query(query, values, (err: Error, db_res: QueryResult<QueryResultRow>) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(db_res.rows, values);
      res.json(db_res.rows);
    });
  });
  return router
};
