import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas.component.html',
  styleUrls: ['./xmas.component.sass']
})
export class XmasComponent implements OnInit {

  body: string;

  @HostListener('document:click', ['$event.target'])
  onMouseDown(target : Element){
    var spoiler = target.closest(".spoiler");
    if(spoiler)
    {spoiler.classList.add("open")}

  }
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        if (!paramMap.has('xmas')) {
          return;
        }
        var id = paramMap.get('xmas');
        var filepath = {
          "0427": "John.md"
          , "6697": "Brendan.md"
          , "0504": "Marianne.md"
          , "2509": "Greg.md"
          , "6371": "Parents.md"
        }[id]

        this.http.get('/assets/christmas/' + filepath, { responseType: 'text' }).subscribe(
          (response: string) => {
            this.body = response;
          });

      });
  }

}
