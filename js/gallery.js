/*
	Braulio Salcedo
	05/03/2017
	Final Project
	Gallery Code
*/
var big;
var small;
var $this;
var $big = $('#img img');
var $cap = $('#cap');
var $anchors = $('#images a');

$('#images img').click(function() {
	$this = $(this);
	$this.fadeTo(1000, 0);
	$big.fadeTo(1000, 0);
	$cap.fadeTo(1000, 0);
	triggerChange(this.id, $big, $this);
	disable();
});

function triggerChange(id, $big, $this) {
	window.setTimeout(function() {
		big = $big.attr('src');
		$big.attr('src', $this.attr('src'));
		$this.attr('src', big);
		$this.fadeTo(1000, 1);
		$big.fadeTo(1000, 1);
		changeTheme(id);
	}, 1050);
}

function Theme(back, nav, hover, title, caption, body, footer, text) {
	this.back = back;
	this.nav = nav;
	this.title = title;
	this.caption = caption;
	this.body = body;
	this.footer = footer;
	this.text = text;
}

var current = new Theme("#141122", "#282442", "#869DC7", "#4C344C", "#937783", "#7b616c", "#3c355e", "Chance spitting straight fire.");
var first = new Theme("#050d05", "#0d210d", '#869DC7',"#214A1E", "#7dab5b", "#496930", "#354f21", "Chance looking out at the crowd.");
var second = new Theme("#450707", "#611c1c", '#869DC7', "#8f1717", "#DD98A1", "#a85661", "#82474f", "Chance holding the world.");
var third = new Theme("#0c0d12", "#172047", "#869DC7", "#222c59", "#86a3b0", "#678a99", "#363B52", "Chance performing.");
var fourth = new Theme("#030d1a", "#09203d", "#869DC7", "#1e3f54", "#949AA8", "#777c87", "#5b6273", "Chance with his brother, Taylor Bennett.");
var fifth = new Theme("#3d2d1d", "#ad825a", "#869DC7", "#825936", "#B8A57D", "#A3926F", "#85785e", "Chance performing at the White House.");
var sixth = new Theme("#30260b", "#473810", "#869DC7", "#785a08", "#e0cf62", "#c4b552", "#8a7d26", "Chance with Nico Segal.");
var seventh = new Theme("#070707", "#242424", "#869DC7", "#3b3b3b", "#757475", "#666466", "#4f4a4f", "Chance and his daughter with the Obamas.");
var eight = new Theme("#1C1825", "#46454d", "#869DC7", "#63616b", "#C6BAAE", "#999590", "#7d7770", "Chance accepting his grammy.");
var ninth = new Theme("#2e1b11", "#4a2715", "#869DC7", "#5c2b12", "#AC8D67", "#755e43", "#634a2b", "Chance earning money.");

var swap;
var i;
var j;

var themes = [[first, second, third], [fourth, fifth, sixth], [seventh, eight, ninth]];

function changeTheme(id) {
	i = Number.parseInt(id.charAt(0));
	j = Number.parseInt(id.charAt(1));
	swap = current;
	current = themes[i][j];
	themes[i][j] = swap;
	$('body').animate({"backgroundColor": current.back}, 1000);
	$('#wrapper').animate({"backgroundColor": current.nav}, 1000);
	$('nav a').animate({"backgroundColor": current.nav}, 1000);
	$('nav a').hover(function(){ 
		$(this).css({"backgroundColor": "#EAEAEA", "color": current.hover});
	}, function() {$(this).css({"backgroundColor": current.nav, "color": current.hover});});
	$('header').animate({"backgroundColor": current.title}, 1000);
	$('#img').animate({"backgroundColor": current.caption}, 1000);
	$('#text').animate({"backgroundColor": current.body}, 1000);
	$('footer').animate({"backgroundColor": current.footer}, 1000)
	$cap.text(current.text);
	$cap.fadeTo(1000, 1);
}

function disable() {
	$anchors.toggleClass('disable-anchor');
	window.setTimeout(function() {
		$anchors.toggleClass('disable-anchor');
	}, 2050);
}