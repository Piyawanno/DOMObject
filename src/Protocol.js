function GET(url, callback, type) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("loadend", function(event) {
		if (callback != undefined) {
			callback(this.response);
		}
	});
	xhr.addEventListener("error", function(event) {
		console.warn(this.statusText);
	})
	xhr.open("GET", url);
	xhr.responseType = type;
	xhr.send();
}

function POST(url, data, callback, type) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("loadend", function(event) {
		if (callback != undefined) {
			if (this.status == 200) {
				if (type == 'json' || type == 'form') callback(this.response);
				else callback(this.responseText);
			} else console.error(this.statusText);
		}
	});
	xhr.addEventListener("error", function(event) {
		console.warn(this.statusText);
	});
	xhr.open("POST", url);
	if(type == 'json') {
		xhr.responseType = type;
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(JSON.stringify(data));
	} else if(type == 'form') {
		xhr.responseType = 'json';
		xhr.send(data);
	} else {
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded charset=UTF-8');
		xhr.send('data='+data['data']);
	}
}

async function REST(url, data, callback, type) {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener("loadend", function(event) {
			if (this.status == 200) {
				if (type == 'json') { 
					resolve(JSON.parse(this.responseText));
					if (callback != undefined) callback(JSON.parse(this.responseText));
				} else  {
					resolve(this.responseText);
					if (callback != undefined) callback(this.responseText);
				}
			} else {
				reject(this.statusText);
				console.error(this.statusText);
			}
			
		});
		xhr.addEventListener("error", function(event) {
			reject(this.statusText);
			console.warn(this.statusText);
		});
		xhr.open("POST", url);
		xhr.withCredentials = true;
		if (data instanceof FormData) xhr.send(data);
		else{
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhr.send(JSON.stringify(data));
		}
	});
}

