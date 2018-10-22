import { Component } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { TagService } from './Shared/tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 300,
    height: 800,
    overflow: true,
  }

  cloudData: CloudData[] = [];

  constructor(private tagService: TagService) { };

  ngOnInit() {
    this.getCloudData();

    console.log('The component is initialized');
  }

  getCloudData(): void {
    this.tagService.getTagCloudData(1)
      .subscribe(t => this.cloudData = t);
  }

}
