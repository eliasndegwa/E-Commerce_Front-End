import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    searchTerm:string=''
    constructor(private route:ActivatedRoute, private router:Router){}
  
    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        if(params['searchTerm']){
          this.searchTerm=params['searchTerm']
        }
      })
    }
  
    search():void{
      if(this.searchTerm){
        this.router.navigateByUrl('/search/' + this.searchTerm)
      }
    }
}
