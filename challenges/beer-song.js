class BeerSong {
  static line1 = `bottles of beer on the wall, `
  static line2 =  `bottles of beer.\n`
  static line3 =  `Take one down and pass it around, `
  static line4 = `bottles of beer` + " on the wall.\n"
  static line5 = `bottle of beer` + " on the wall.\n"
  static line6 = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n";
  static noMore = "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n";

  static verse(repeat){
      let start = repeat;
      let next = repeat - 1;

      if(start > 1 && next > 1) {
        return `${start} ` + BeerSong.line1 + `${start} ` + BeerSong.line2 + BeerSong.line3 + `${next} ` + BeerSong.line4;
      };
      
      if(start > 1 && next === 1) {
        return `${start} ` + BeerSong.line1 + `${start} ` + BeerSong.line2 + BeerSong.line3 + `${next} ` + BeerSong.line5;
      }

      if(start === 1) {
        return BeerSong.line6; 
      }

      if(start === 0) {
        return BeerSong.noMore;
      }
  } 

 static verses(startBottle, endBottle) {
  let result = []
   while(startBottle >= endBottle) {
    result.push(BeerSong.verse(startBottle));
    startBottle -= 1;
   }
 
   return result.join("\n");

}
 static lyrics() {
  return BeerSong.verses(99, 0)
 }

 
}

module.exports = BeerSong;