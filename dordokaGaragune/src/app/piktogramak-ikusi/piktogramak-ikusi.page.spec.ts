import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiktogramakIkusiPage } from './piktogramak-ikusi.page';

describe('PiktogramakIkusiPage', () => {
  let component: PiktogramakIkusiPage;
  let fixture: ComponentFixture<PiktogramakIkusiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiktogramakIkusiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiktogramakIkusiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
