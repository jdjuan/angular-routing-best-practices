import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      console.log(data.get('id'));
    });
  }

  ngOnInit() {}
}
