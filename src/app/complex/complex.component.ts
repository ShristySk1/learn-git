import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSingleComponent()  {

    this.router.navigate(['/deploy']);
  }
}
