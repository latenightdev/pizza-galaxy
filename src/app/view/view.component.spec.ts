import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { SortPipe } from './sort.pipe';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { FormsModule } from '@angular/forms';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SortPipe,
        ViewComponent,
        ConfirmComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
