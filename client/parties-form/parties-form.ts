import {Component, Input} from 'angular2/core';
import {Parties} from '../../collections/parties'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'parties-form',
    templateUrl: 'client/parties-form/parties-form.html',
    directives: [ROUTER_DIRECTIVES]
})

export class PartiesForm {
    @Input('party') party: Object;
    @Input('isUpdate') isUpdate: boolean = false;
    @Input('action') action;

    constructor(private router: Router){

    }

    processParty(party): void {
        !this.isUpdate ? this.save(party) : this.update(party);
    }

    save(party) {
        Parties.insert({
            name: party.name,
            description: party.description,
            location: party.location
        });
        this.party = {};
    }

    update(party) {
        Parties.update(party._id, {
            $set: {
                name: party.name,
                description: party.description,
                location: party.location
            }
        });
        this.router.navigate(['/PartiesList']);
    }
}