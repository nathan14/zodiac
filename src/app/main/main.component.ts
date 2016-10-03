import { Component } from '@angular/core';
import { Sign } from '../sign';
import { SignService } from '../sign.service';

@Component({
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.less'],
	providers: [ SignService ]
})

export class MainComponent {
	constructor(private signService: SignService) {}

	result: Sign[];
	birthday: string;
	day: number;
	month: number;
	error: any;

	getSign(): void {
		// Empty results
		this.result = null;

		// Create date string
		this.birthday = new Date(1970, this.month - 1, this.day).toString();

		// If date is valid
		if (!isNaN(Date.parse(this.birthday)) && new Date(this.birthday).getFullYear() === 1970) {
			this.error = false;
			this.signService.getSign(this.birthday , 'all').then(result => this.result = result);
		} else {
			this.error = 'Please select a valid date';
		}
	}

}

