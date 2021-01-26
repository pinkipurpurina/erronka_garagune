import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KategoriakSortuPage } from './kategoriak-sortu.page';

describe('KategoriakSortuPage', () => {
  let component: KategoriakSortuPage;
  let fixture: ComponentFixture<KategoriakSortuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriakSortuPage ],
      imports: [IonicModule.forRoot(),
        ReactiveFormsModule,
        FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriakSortuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
