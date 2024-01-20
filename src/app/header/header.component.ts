import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    //here we can emit the selected feature
    @Output() selectedFeature = new EventEmitter<string>();

    //on feature select method
    onSelect(feature: string) {
        this.selectedFeature.emit(feature);
    }
}
