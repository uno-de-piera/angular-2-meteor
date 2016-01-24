import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core'
import {App} from './app/app'
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
]);