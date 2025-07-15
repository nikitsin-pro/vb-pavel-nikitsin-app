import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { MovieDetailsStore } from '../store/movie-details.store';

@Component({
  selector: 'app-movie-details-panel',
  imports: [RouterModule],
  templateUrl: './movie-details-panel.html',
  styleUrl: './movie-details-panel.scss',
})
export class MovieDetailsPanel implements OnInit {
  private store = inject(MovieDetailsStore);
  protected route = inject(ActivatedRoute);

  private id = computed(() => this.route.snapshot.paramMap.get('id')!);

  protected movie = this.store.selectSignal(({ movie }) => movie!);
  protected loading = this.store.selectSignal(({ loading }) => loading);
  protected error = this.store.selectSignal(({ error }) => error);

  ngOnInit(): void {
    this.store.loadMovie(this.id());
  }
}
