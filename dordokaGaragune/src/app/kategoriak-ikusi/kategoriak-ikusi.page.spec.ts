import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KategoriakIkusiPage } from './kategoriak-ikusi.page';

describe('KategoriakIkusiPage', () => {
  let component: KategoriakIkusiPage;
  let fixture: ComponentFixture<KategoriakIkusiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriakIkusiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriakIkusiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
