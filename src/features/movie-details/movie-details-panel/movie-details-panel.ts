import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-panel',
  imports: [],
  templateUrl: './movie-details-panel.html',
  styleUrl: './movie-details-panel.scss',
})
export class MovieDetailsPanel implements OnInit {
  private route = inject(ActivatedRoute);
  id = computed(() => this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    const t = this.id();
  }
}
