export class CookieService {
	create(name: string, value: string) {
		document.cookie = `${name}=${value};`;
	}

	get(name: string) {
		return document.cookie
			.split(';')
			.find((cookie) => cookie.trim().startsWith(`${name}=`))
			?.split('=')[1];
	}

	remove(name: string) {
		this.create(name, '');
	}
}
