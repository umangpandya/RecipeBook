import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  //load selected feature here that is recipe or shopping list
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
