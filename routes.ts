// routes.ts
export type Route = {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
};

export const routes: Route[] = [
  { path: '/', method: 'GET' },
];
