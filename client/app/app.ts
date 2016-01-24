import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Parties} from '../../collections/parties'
import {PartiesApp} from '../parties/parties'
import {PartiesForm} from '../parties-form/parties-form';
import {PartyDetails} from '../parties-detail/party-detail';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', as: 'PartiesList', component: PartiesApp },
    { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])

export class App {

}