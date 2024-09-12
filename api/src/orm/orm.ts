import pg from 'pg';
import {
  DeletionCriteria,
  NewRecordDetails,
  RecordUpdateDetails,
  SelectionCriteria,
} from './types';

export class MyORM {
  private readonly pool: pg.Pool;

  constructor(config: pg.PoolConfig) {
    this.pool = new pg.Pool(config);
  }

  async connect(): Promise<void> {
    const client = await this.pool.connect();

    console.log('Connected to database');

    client.release();
  }

  async disconnect(): Promise<void> {
    await this.pool.end();

    console.log('Disconnected from database');
  }

  async select(selectionCriteria: SelectionCriteria): Promise<any[]> {
    const { tableName, columns, where, limit, offset, sort, order } =
      selectionCriteria;

    const { clause: whereClause, values } = where
      ? SQLHelpers.whereToString(where)
      : { clause: '', values: [] };

    const orderBy = sort && order ? `ORDER BY ${sort} ${order}` : '';

    const limitClause = limit ? `LIMIT ${limit}` : '';

    const offsetClause = offset ? `OFFSET ${offset}` : '';

    const query = `
      SELECT ${columns.join(', ')}
      FROM ${tableName}
      ${whereClause ? `WHERE ${whereClause}` : ''}
      ${orderBy}
      ${limitClause}
      ${offsetClause}
    `;

    const { rows } = await this.pool.query(query, values);

    return rows;
  }

  async insert(newRecordDetails: NewRecordDetails): Promise<any> {
    const { tableName, record } = newRecordDetails;

    const keys = Object.keys(record);

    const values = Object.values(record);

    const placeholders = keys.map((_, index) => `$${index + 1}`);

    const query = `
      INSERT INTO ${tableName} (${keys.join(', ')})
      VALUES (${placeholders.join(', ')})
      RETURNING *;
    `;

    const { rows } = await this.pool.query(query, values);

    return rows[0];
  }

  async update(recordUpdateDetails: RecordUpdateDetails): Promise<any> {
    const { tableName, updates, where } = recordUpdateDetails;

    const { clause: setClause, values: updateValues } =
      SQLHelpers.whereToString(updates);

    const { clause: whereClause, values: whereValues } =
      SQLHelpers.whereToString(where);

    const query = `
      UPDATE ${tableName}
      SET ${setClause}
      WHERE ${whereClause}
      RETURNING *;
    `;

    const combinedValues = [...updateValues, ...whereValues];

    const { rows } = await this.pool.query(query, combinedValues);

    return rows;
  }

  async delete(deletionCriteria: DeletionCriteria): Promise<any> {
    const { tableName, where } = deletionCriteria;

    const { clause: whereClause, values } = SQLHelpers.whereToString(where);

    const query = `
      DELETE FROM ${tableName}
      WHERE ${whereClause}
      RETURNING *;
    `;

    const { rows } = await this.pool.query(query, values);

    return rows;
  }

  async isDatabaseEmpty(): Promise<boolean> {
    const query = 'SELECT COUNT(*) FROM users';
    const result = await this.pool.query(query);
    return result.rows[0].count === '0';
  }
}
