import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudPiktogramakPage } from './crud-piktogramak.page';

describe('CrudPiktogramakPage', () => {
  let component: CrudPiktogramakPage;
  let fixture: ComponentFixture<CrudPiktogramakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPiktogramakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudPiktogramakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
