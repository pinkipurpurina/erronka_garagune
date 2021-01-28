import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPiktogramaPage } from './user-piktograma.page';

describe('UserPiktogramaPage', () => {
  let component: UserPiktogramaPage;
  let fixture: ComponentFixture<UserPiktogramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPiktogramaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPiktogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
