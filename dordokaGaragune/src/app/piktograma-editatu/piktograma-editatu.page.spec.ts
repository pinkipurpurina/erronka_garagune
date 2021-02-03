import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiktogramaEditatuPage } from './piktograma-editatu.page';

describe('PiktogramaEditatuPage', () => {
  let component: PiktogramaEditatuPage;
  let fixture: ComponentFixture<PiktogramaEditatuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiktogramaEditatuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiktogramaEditatuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
