export interface Call {
  id: string;
  type: string;
  status: string;
  time: string;
  collaborator: string;
  call: string;
  source: string;
  mark: string;
  duration?: number;
  person_id: string;
  person_name: string;
  person_surname: string;
  record?: string;
  partnership_id: number;
}
