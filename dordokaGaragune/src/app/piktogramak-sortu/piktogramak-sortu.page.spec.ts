import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiktogramakSortuPage } from './piktogramak-sortu.page';

describe('PiktogramakSortuPage', () => {
  let component: PiktogramakSortuPage;
  let fixture: ComponentFixture<PiktogramakSortuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiktogramakSortuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiktogramakSortuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
