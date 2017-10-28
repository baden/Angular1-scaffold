import { platformBrowserDynamic } from 'ng-metadata-baden-fix1/platform-browser-dynamic';
import { enableProdMode } from 'ng-metadata-baden-fix1/core';
import { AppModule } from './app';

if ( ENV === 'production' ) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule( AppModule );
