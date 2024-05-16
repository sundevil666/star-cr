export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface IScore {
  zerg: number;
  primal: number;
  protoss: number;
  terran: number;
  taldarim: number;
}

export interface IScoreMore extends IScore {
  infested: number;
  hybrid: number;
}

export type TQuestion = [
  string,
  string[],
  string[]
];

export type TResult = {
  name: string;
  description: string;
  quote1: string;
  quote2: string;
  author: string;
  points: string;
};

export type TResults = {
  zerg: TResult;
  primal: TResult;
  terran: TResult;
  infested: TResult;
  protoss: TResult;
  taldarim: TResult;
  hybrid: TResult;
};
