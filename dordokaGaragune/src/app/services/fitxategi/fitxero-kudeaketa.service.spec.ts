import { TestBed } from '@angular/core/testing';

import { FitxeroKudeaketaService } from './fitxero-kudeaketa.service';

describe('FitxeroKudeaketaService', () => {
  let service: FitxeroKudeaketaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitxeroKudeaketaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
