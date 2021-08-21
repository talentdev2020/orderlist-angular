import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

export interface OrderSummary {
  buyerEmail: string;
  buyerFullName: string;
  status: 'received' | 'processing' | 'shipped';
  paymentTotal: number;
}
const data: OrderSummary[] = [
  { buyerEmail: 'sam@test.com', buyerFullName: 'Sam Johnson', status: 'shipped', paymentTotal: 100.25 },
  { buyerEmail: 'susan@test.com', buyerFullName: 'Susan Thompson', status: 'processing', paymentTotal: 90.25 },
  { buyerEmail: 'tammy@test.com', buyerFullName: 'Tammy Empson', status: 'received', paymentTotal: 150.5 },
];

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  constructor(private authS: AuthenticationService) {}

  readonly orders$ = this.authS.currentUser$.pipe(map(username => (username ? data : undefined)));
}
