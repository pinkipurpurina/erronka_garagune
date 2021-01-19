import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KategoriakSortuPage } from './kategoriak-sortu.page';

describe('KategoriakSortuPage', () => {
  let component: KategoriakSortuPage;
  let fixture: ComponentFixture<KategoriakSortuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriakSortuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriakSortuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
