/*
	Braulio Salcedo
	05/03/2017
	Final Project
	Music Player Code
*/
function Album() {
	
	this.first = null;
	
	var Song = function(name, audio) {
		this.name = name;
		this.audio = audio;
		this.next = null;
		this.prev = null;
	};
	
	this.addSong = function(name, audio, last) {
		var newSong = new Song(name, audio);
		if (this.first === null) {
			this.first = newSong;
		} else {
			var curr = this.first;
			while (curr.next !== null) {
				curr = curr.next;
			}
			curr.next = newSong;
			newSong.prev = curr;
			if (last === true) {
				newSong.next = this.first;
				this.first.prev = newSong;
			}
		}
	};
	

	this.getSong = function(num) {
		var curr = this.first;
		while (curr !== null) {
			if (curr.name.substring(0, 2) == num) return curr;
			curr = curr.next;
		}
	};
}

var tenDay = new Album();
tenDay.addSong("1) 14,400 Minutes", "audio/tenday/minutes.mp3", false);
tenDay.addSong("2) Nostalgia", "audio/tenday/nostalgia.mp3", false);
tenDay.addSong("3) Missing You", "audio/tenday/missing.mp3", false);
tenDay.addSong("4) Windows", "audio/tenday/windows.mp3", false);
tenDay.addSong("5) Brain Cells", "audio/tenday/braincells.mp3", false);
tenDay.addSong("6) Long Time", "audio/tenday/longtime.mp3", false);
tenDay.addSong("7) 22 Offs", "audio/tenday/offs.mp3", false);
tenDay.addSong("8) U Got Me Fucked Up", "audio/tenday/fuckedup.mp3", false);
tenDay.addSong("9) Family", "audio/tenday/family.mp3", false);
tenDay.addSong("10) Juke Juke", "audio/tenday/juke.mp3", false);
tenDay.addSong("11) Fuck You Tahm Bout", "audio/tenday/tahmbout.mp3", false);
tenDay.addSong("12) Long Time II", "audio/tenday/longtime2.mp3", false);
tenDay.addSong("13) Prom Night", "audio/tenday/prom.mp3", false);
tenDay.addSong("14) Hey Ma", "audio/tenday/ma.mp3", true);

var acidRap = new Album();
acidRap.addSong("1) Good Ass Intro", "audio/acidrap/intro.mp3", false);
acidRap.addSong("2) Pusha Man", "audio/acidrap/pusha.mp3", false);
acidRap.addSong("3) Cocoa Butter Kisses", "audio/acidrap/kisses.mp3", false);
acidRap.addSong("4) Juice", "audio/acidrap/juice.mp3", false);
acidRap.addSong("5) Lost", "audio/acidrap/lost.mp3", false);
acidRap.addSong("6) Everybody's Something", "audio/acidrap/everybody.mp3", false);
acidRap.addSong("7) Interlude (That's Love)", "audio/acidrap/interlude.mp3", false);
acidRap.addSong("8) Favorite Song", "audio/acidrap/song.mp3", false);
acidRap.addSong("9) Nana", "audio/acidrap/nana.mp3", false);
acidRap.addSong("10) Smoke Again", "audio/acidrap/smoke.mp3", false);
acidRap.addSong("11) Acid Rain", "audio/acidrap/rain.mp3", false);
acidRap.addSong("12) Chain Smoker", "audio/acidrap/smoker.mp3", false);
acidRap.addSong("13) Everything's Good", "audio/acidrap/good.mp3", true);

var coloringBook = new Album();
coloringBook.addSong("1) All We Got", "audio/coloringbook/all.mp3", false);
coloringBook.addSong("2) No Problem", "audio/coloringbook/problem.mp3", false);
coloringBook.addSong("3) Summer Friends", "audio/coloringbook/friends.mp3", false);
coloringBook.addSong("4) D.R.A.M. Sings Special", "audio/coloringbook/special.mp3", false);
coloringBook.addSong("5) Blessings", "audio/coloringbook/bless.mp3", false);
coloringBook.addSong("6) Same Drugs", "audio/coloringbook/drugs.mp3", false);
coloringBook.addSong("7) Mixtape", "audio/coloringbook/mix.mp3", false);
coloringBook.addSong("8) Angels", "audio/coloringbook/angels.mp3", false);
coloringBook.addSong("9) Juke Jam", "audio/coloringbook/juke.mp3", false);
coloringBook.addSong("10) All Night", "audio/coloringbook/night.mp3", false);
coloringBook.addSong("11) How Great", "audio/coloringbook/great.mp3", false);
coloringBook.addSong("12) Smoke Break", "audio/coloringbook/break.mp3", false);
coloringBook.addSong("13) Finish Line / Drown", "audio/coloringbook/line.mp3", false);
coloringBook.addSong("14) Blessings 2", "audio/coloringbook/blessings2.mp3", true);

var currentTenDay = tenDay.first;
var currentAcidRap = acidRap.first;
var currentColoringBook = coloringBook.first;
var $player;
var $this;
var $next;
var id;
var song;
var sym;

$('.prev, .next').click(function() {
	switch (this.closest('div').id) {
		case "ten":
			if(this.className === "next")
				currentTenDay = currentTenDay.next;
			else 
				currentTenDay = currentTenDay.prev;
			updateSong('#tenPlayer', '#tenAudio', currentTenDay);
			break;
		case "acid":
			if(this.className === "next")
				currentAcidRap = currentAcidRap.next;
			else
				currentAcidRap = currentAcidRap.prev;
			updateSong('#acidPlayer', '#acidAudio', currentAcidRap );
			$('#tenMenu .current').toggleClass('current');
			$('a div:contains("' + currentTenDay.name + '")').toggleClass('current');
			break;
		default:
			if(this.className === "next")
				currentColoringBook = currentColoringBook.next;
			else 
				currentColoringBook = currentColoringBook.prev;
			updateSong('#coloringPlayer', '#coloringAudio', currentColoringBook);
			break;
	}
	
});

function updateSong(player, audio, song) {
	$player = $(audio);
	$(audio + ' source').attr('src', song.audio);
	$(player + ' .name').text(song.name);
	$player[0].pause();
	$player[0].load();
	$player[0].play();
	$(player + ' .current').toggleClass('current');
	$('a div:contains("' + song.name + '")').toggleClass('current');
}

$('#tenAudio, #acidAudio, #coloringAudio').on('ended', function() {
	id = this.closest('div').id;
	$('#' + id + ' .next').trigger('click');
});

$('.down button').click(function() {
	switch (this.id) {
		case "toggleTen":
			$('#tenMenu').slideToggle(750);
			changeArrow(this.id);
			break;
		case "toggleAcid":
			$('#acidMenu').slideToggle(750);
			changeArrow(this.id);
			break;
		default:
			$('#coloringMenu').slideToggle(750);
			changeArrow(this.id);
			break;
	}
});

function changeArrow(elementId) {
	sym = $('#' + elementId + ' div');
	if (sym.text() === "▼")
		window.setTimeout(function() {
			sym.text("▲");
		}, 750);
	else
		window.setTimeout(function() {
			sym.text("▼");
		}, 750);
}

$('a div').click(function() {
	id = this.closest('.menu').id;
	switch (id) {
		case "tenMenu":
			song = tenDay.getSong($(this).text().substring(0, 2));
			updateSong('#tenPlayer', '#tenAudio', song);
			currentTenDay = song;
			break;
		case "acidMenu":
			song = acidRap.getSong($(this).text().substring(0, 2));
			updateSong('#acidPlayer', '#acidAudio', song);
			currentAcidRap = song;
			break;
		default:
			song = coloringBook.getSong($(this).text().substring(0, 2));
			updateSong('#coloringPlayer', '#coloringAudio', song);
			currentColoringBook = song;
			break;
	}
});