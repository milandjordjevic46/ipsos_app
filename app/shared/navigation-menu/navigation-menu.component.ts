import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  @Input('ipHeight')
  importedVal: string;
  visina: string;
  
  constructor(    private _location: Location,
    private el: ElementRef
    ) { }

  ngOnInit() {
    this.visina= this.importedVal ? this.importedVal : '40';
  }

  back() {
    this._location.back();
    
  }

}
