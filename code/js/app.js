var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.showCards)
		.fail(app.onError);
	},
	showCards(dataJson) {
		console.log(dataJson);
		dataJson.cardList.forEach(element => {
			let card=
			`<tr>
                    <td>${element.nome}</td>
                    <td>${element.cognome}</td>
                    <td>${element.materia}</td>
                  </tr>
				 `;
				 $("#card-container").append(card)
		});
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
