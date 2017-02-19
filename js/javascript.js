 $(function(){
 	$(".type-on").typed({
 		strings: ["a Learner", "a Web Designer", "a Web Developer", "a Web Enthusiast", "a Software Engineer", "a Venezuelan Woman", "Guara!", "a Beatles lover", "a Pokemon Master",  "an alligator XD (8)", "a mama-papa coming for you (8)", "the space invader (8) haha", "Test github pages" ,"Gipsy Martínez :)"],
 		typeSpeed: 0
 	});
 });
 
$(document).ready(function() {
    var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);

    $('.code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});