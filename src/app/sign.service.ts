import { Injectable } from '@angular/core';
import { Sign } from './sign';
import { newSigns } from './data';
import { oldSigns } from './data';

@Injectable()
export class SignService {
	/*
	 * Get signs by type
	 *
	 * @param 		signType 	old / new
	 * @returns 	promise
	 */
	getSigns(signType: string): Promise<Sign[]> {
		return new Promise((resolve, reject) => {
			switch (signType) {
				case 'old':
					resolve(oldSigns);
					break;
				case 'new':
					resolve(newSigns);
					break;
				case 'all':
					resolve(oldSigns.concat(newSigns));
			}
		});
	}

	/*
	 * Get old sign by birthday
	 *
	 * @param 		birthday 	user selected birthday
	 * @param 		signType 	old / new
	 * @returns 	Promise 	selected sign
	 */
	getSign(birthday: string, signType: string): Promise<Sign[]> {
		return this.getSigns(signType).then(
			signs => signs.filter(sign => new Sign(sign.name, sign.start, sign.end).isInRange(new Date(birthday))));
	}

	/*
	 * Get old sign by birthday
	 *
	 * @param 		birthday 	user selected birthday
	 * @param 		signType 	old / new
	 * @returns 	Promise 	selected sign
	 */
	getSignByName(name: string): Promise<Sign[]> {
		return this.getSigns('all').then(signs => signs.filter(sign => sign.name === name));
	}
}
