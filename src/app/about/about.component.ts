import { Component, OnInit } from '@angular/core';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor(private leadersService: LeadersService) { }

  leaders: any;

  ngOnInit(): void {
    this.leadersService.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
