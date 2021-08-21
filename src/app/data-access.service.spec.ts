import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Mock } from 'ts-mocks';

import { AuthenticationService } from './authentication.service';
import { DataAccessService } from './data-access.service';

const mockAuth = new Mock<AuthenticationService>({ currentUser$: of('mock@test.org') });

describe('DataAccessService', () => {
  let service: DataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthenticationService, useValue: mockAuth.Object }],
    });
    service = TestBed.inject(DataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return orders', async () => {
    const orders = await service.orders$.pipe(take(1)).toPromise;
    expect(Array.isArray(orders)).toBeTrue;
  });
});
