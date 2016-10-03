export class Sign {
	name: string;
	start: Date;
	end: Date;

	constructor(name: string, start: Date, end: Date) {
		this.name = name;
		this.start = start;
		this.end = end;
	}

	/*
	 * Check if date is whitin sign date range
	 *
	 * @param 		date 	date to compare with
	 * @returns 	true / false
	 */
	isInRange(date: Date): boolean {
		let dateToComapre = new Date(1970, date.getMonth(), date.getDate());
		return dateToComapre >= this.start && dateToComapre <= this.end;
	}
}