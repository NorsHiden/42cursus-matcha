export interface SelectionCriteria {
  tableName: string;
  columns: string[];
  where?: Record<string, any>;
  limit?: number;
  offset?: number;
  sort?: string;
  order?: 'ASC' | 'DESC';
}

export interface NewRecordDetails {
  tableName: string;
  record: object;
}

export interface RecordUpdateDetails {
  tableName: string;
  updates: object;
  where: Record<string, any>;
}

export interface DeletionCriteria {
  tableName: string;
  where: Record<string, any>;
}
