import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastService } from '../services/toast.service';
import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  const toastServiceSpy = jasmine.createSpyObj('ToasterSpy', ['success', 'error']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ToastService, useValue: toastServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
