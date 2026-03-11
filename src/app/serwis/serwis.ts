import { Component, OnInit } from '@angular/core';
import { PostService, Post } from './post.service'; // importujemy serwis i interfejs

@Component({
  selector: 'app-serwis',
  imports: [],
  templateUrl: './serwis.html',
  styleUrl: './serwis.css',
})
export class Serwis implements OnInit {
  posty: Post[] = [];
  wybranyPost: Post | null = null;
  ladowanie = false;

  // Wstrzykujemy serwis przez konstruktor (Dependency Injection)
  // Angular sam tworzy instancję serwisu i przekazuje ją tutaj
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.pobierzPosty();
  }

  pobierzPosty() {
    this.ladowanie = true;
    // Wywołujemy metodę serwisu – komponent nie wie jak dane są pobierane
    this.postService.getPosts(5).subscribe({
      next: (dane) => {
        this.posty = dane;
        this.ladowanie = false;
      },
      error: () => { this.ladowanie = false; }
    });
  }

  pobierzJeden(id: number) {
    this.postService.getPost(id).subscribe(post => {
      this.wybranyPost = post; // zapisujemy wybrany post
    });
  }
}
