import {Component, OnInit} from '@angular/core';
import {TinyUrlService} from './tinyUrl.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  providers: [HttpClient, TinyUrlService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  originalUrl = '';
  shortUrl = '';
  error = '';
  constructor(private heroService: TinyUrlService) {

  }

  getOriginalUrl(url) {
    return this.heroService.getOriginalUrl(url).subscribe(item => {
      this.originalUrl = item.originalUrl;
      this.shortUrl = item.shortUrl;
    });
  }

  postShortUrl(url: string) {
    this.heroService.postUrl(url).subscribe(item => {
      this.originalUrl = item.originalUrl;
      this.shortUrl = item.shortUrl;
    });
  }

  browse(url: string) {
    window.open(url, '_blank');
  }
}
