import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {Parties} from 'collections/parties';
import {PartiesForm} from '../parties-form/parties-form';

@Component({
    selector: 'party-details',
    templateUrl: 'client/parties-detail/party-detail.html',
    directives: [ROUTER_DIRECTIVES, PartiesForm],
})

export class PartyDetails {
    party: Object;
    constructor(private router: Router, private params: RouteParams){
        let partyId = this.params.get('partyId');
        this.party = Parties.findOne(partyId);
    }
}