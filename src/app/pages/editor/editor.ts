import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  imports: [],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor {
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
