import { LoaderState } from './../_models/loader';
import { Subscription } from 'rxjs';
import { LoaderService } from './../_services/loader.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  show = false;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe(((state: LoaderState) => {
      this.show = state.show;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
