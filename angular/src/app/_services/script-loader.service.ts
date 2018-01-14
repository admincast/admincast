import {Injectable} from "@angular/core";
import * as $ from 'jquery';

declare let document: any;

interface Script {
	src: string;
	loaded: boolean;
}

@Injectable()
export class ScriptLoaderService {
	private _scripts: Script[] = [];

	load(...scripts: string[]) {
		scripts.forEach((script: string) => this._scripts[script] = {src: script, loaded: false});

		let promises: any[] = [];
		scripts.forEach((script) => promises.push(this.loadScript(script)));
		return Promise.all(promises);
	}

	loadScript(src: string) {
		return new Promise((resolve, reject) => {

			//resolve if already loaded
			if (this._scripts[src].loaded) {
				resolve({script: src, loaded: true, status: 'Already Loaded'});
			}
			else {
				//load script
				let script = $('<script/>')
					.attr('type', 'text/javascript')
					.attr('src', this._scripts[src].src);

				$('head').append(script);
				resolve({script: src, loaded: true, status: 'Loaded'});
			}
		});
	}
}