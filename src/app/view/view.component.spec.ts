import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { SortPipe } from './sort.pipe';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SortPipe,
        ViewComponent
      ],
      imports: [
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
