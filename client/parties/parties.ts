import {Component, NgZone} from 'angular2/core';
import {Parties} from '../../collections/parties'
import {PartiesForm} from '../parties-form/parties-form';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'app',
    templateUrl: 'client/parties/parties.html',
    directives: [PartiesForm, ROUTER_DIRECTIVES],
    styles: [`
        th{ text-align: center }
    `]
})

export class PartiesApp {
    parties: Array<Object>;
    party: Object = {name: '', description: '', location: ''};
    constructor (zone: NgZone) {
        Tracker.autorun(() => zone.run(() => {
            this.parties = Parties.find().fetch();
        }));
    }

    removeParty(party): void {
        Parties.remove(party._id);
    }
}