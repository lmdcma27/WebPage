import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './assets/css/code-box-style.css'
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
