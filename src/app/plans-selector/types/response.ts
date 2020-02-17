import { Plan } from './plan';

export interface ApiResponse {
  totalResults: string;
  offers: Plan[];
}
