import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sign } from '../sign';
import { SignService } from '../sign.service';

@Component({
	selector: 'sign',
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.less'],
	providers: [ SignService ]
})

export class SignComponent implements OnInit {
	constructor(private signService: SignService, private route: ActivatedRoute) {}

	result: Sign[];
	name: string;

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.name = params['name'];
			this.signService.getSignByName(this.name).then(result => this.result = result);
		});

	}
}
