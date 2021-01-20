import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserKategoriaPage } from './user-kategoria.page';

describe('UserKategoriaPage', () => {
  let component: UserKategoriaPage;
  let fixture: ComponentFixture<UserKategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserKategoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserKategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
