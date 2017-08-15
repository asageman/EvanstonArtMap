//divvy markers
var divvy = [
  {
    "name": "Divvy Bike Station, Benson & Church",
    "lat": 42.048347,
    "lng": -87.683441
  },
  {
    "name": "Divvy Bike Station, Chicago & Washington",
    "lat": 42.032643,
    "lng": -87.679157
  },
  {
    "name": "Divvy Bike Station, Austin & Elmwood",
    "lat": 42.025642,
    "lng": -87.684129
  },
  {
    "name": "Divvy Bike Station, Valli Produce at Evanston Plaza",
    "lat": 42.039667,
    "lng": -87.699323
  },
  {
    "name": "Divvy Bike Station, Church & Dodge",
    "lat": 42.048279,
    "lng": -87.698444
  },
  {
    "name": "Divvy Bike Station, Central Street Metra",
    "lat": 42.063878,
    "lng": -87.698608,
  },
  {
    "name": "Divvy Bike Station, Central & Girard",
    "lat": 42.064138,
    "lng": -87.685973
  },
  {
    "name": "Divvy Bike Station, Chicago & Sheridan",
    "lat": 42.050462,
    "lng": -87.677678
  },
  {
    "name": "Divvy Bike Station, Sheridan & Noyes",
    "lat": 42.058307,
    "lng": -87.677349
  },
  {
    "name": "Divvy Bike Station, Northwestern Campus Library",
    "lat": 42.053707,
    "lng": -87.673100
  }
];


// art markers
var markers = [
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4289/35196531481_ca6ec8cf86_o_d.jpg",
    "lat": 42.045994,
    "lng": -87.673445,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Sheridan Rd. and Davis St.)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Conversations: Here and Now",
    "url": "https://farm5.staticflickr.com/4230/35159496392_794ae5c9be_o_d.jpg",
    "lat": 42.044862,
    "lng": -87.680179,
    "website": "http://www.indirajohnson.com/",
    "text": "The whimsical circle of chairs titled Conversations: Here and Now is a piece by Indira Freitas Johnson the goal of which is to encourage an open dialogue between the peoples of Evanston.  The sculptural piece was erected in 2009 and serves as a reminder to the community that sharing our thoughts and feelings leads to greater communal cohesion. (1489 Chicago Avenue, Raymond Park)",
    "size": "big",
    "type": "city"

  },
  {
    "name": "Downtown Evanston Metal Work",
    "url": "https://farm5.staticflickr.com/4285/35196530751_92f0cc3209_o_d.jpg",
    "lat": 42.045726,
    "lng": -87.681802,
    "website": "http://csicsko.com/about",
    "text": "David Csisko is an internationally recognised designer and artist based out of Chicago.  His work can be seen all over downtown Evanston; all one must do is look down.  Csisko is responsible for the playful sidewalk brickwork and the decorative tree grates that don the city's most frequented streets.  (Sherman Ave, Orrington Ave., Church St., & Davis St.)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Downtown Evanston Mosaic",
    "url": "https://farm5.staticflickr.com/4270/35159496082_4a3de4e825_o_d.jpg",
    "lat": 42.045505,
    "lng": -87.681813,
    "website": "http://csicsko.com/about",
    "text": "David Csisko is an internationally recognised designer and artist based out of Chicago.  His work can be seen all over downtown Evanston; all one must do is look down.  Csisko is responsible for the playful sidewalk brickwork and the decorative tree grates that don the city's most frequented streets. (Sherman Ave.)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Duna",
    "url": "https://farm5.staticflickr.com/4196/35159495872_e5107d4b43_o_d.jpg",
    "lat": 42.050102,
    "lng": -87.681244,
    "website": "http://www.artnet.com/artists/deborah-butterfield/",
    "text": "Deborah Butterfield is an American sculptor who is best known for her depictions of horses.  Her 1998 piece Duna can be seen grazing in the meadow at Evanston’s Oldberg park. (Oldberg Park, Clark and Sherman)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Leafgate Park",
    "url": "https://farm5.staticflickr.com/4258/35196529461_9fa06ffec9_o_d.jpg",
    "lat": 42.044197,
    "lng": -87.677675,
    "website": "http://www.ljdouglas.com/ljdouglas.com/Bio.html",
    "text": "The stonework pavers and carved benches in Evanston’s tiny Leafgate park were collaboratively designed and constructed by the artists Gary Justice and Linda J Douglas in 1992.  This small park often goes unnoticed, but the beautifully carved benches and bricks are surely a reason to seek it out. (Grove & Lake, Leafgate Park)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled Painting",
    "url": "https://farm5.staticflickr.com/4235/35159495532_f69407c692_o_d.jpg",
    "lat": 42.058714,
    "lng": -87.684358,
    "website": "https://www.wbez.org/shows/wbez-blogs/michael-montenegro-puppet-master-of-evanston/54e0bbc4-b89b-413b-9305-cbac21d7fbcf",
    "text": "This untitled painting of women picnicking in nature hangs in the south east stairwell of the Noyes Cultural Arts Center.  The Evanston based artist of this painting, Michael Montenegro, is most well known for his work as a puppet master. (927 Noyes Street, Noyes Cultural Arts Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Patriots Park Flagpole",
    "url": "https://farm5.staticflickr.com/4230/35196529101_86419bc150_o_d.jpg",
    "lat": 42.045107,
    "lng": -87.673866,
    "website": "https://en.wikipedia.org/wiki/Thomas_Tallmadge",
    "text": "In 1929 two men collaborated to create the Evanston war memorial: Patriots Park Flagpole.  They were Thomas E. Tallmadge, a renowned Evanston raised architect known for coining the term “Chicago School” in reference to the iconic architectural style, and Stephen Beams an Indian born British artist living in America.  Beams used Tallmadge’s design to construct the base of the flagpole which memorializes soldiers in the Revolutionary War, the Civil War, the Spanish American War, and World War I. (Davis & Sheridan, Patriots Park)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Noyes Walk",
    "url": "https://farm5.staticflickr.com/4259/35159495242_7c6d195024_o_d.jpg",
    "lat": 42.058644,
    "lng": -87.683701,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture", 
    "text": "The Noyes Walk cement pavers on the far side of the Noyes Cultural Arts Center parking lot probably go unnoticed by most passersby.  However if you are able to find them they are a pleasing little piece of art.  The pavers depict figures walking together, the artist is unknown. (927 Noyes Street)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "The Sea of the Ear-Ring",
    "url": "https://farm5.staticflickr.com/4268/35196527471_c53c81c384_o_d.jpg",
    "lat": 42.047037,
    "lng": -87.682057,
    "website": "http://evanstonnow.com/node/1374#Soga",
    "text": "The Sea of the Ear-Ring brings a dash of bright red to Sherman Plaza in the center of downtown Evanston.  This bold sculpture by the Japanese born artist Takashi Soga won the 2007 contest for a piece in this prime spot.  The round, red, ring atop its base mimics the turning motion of the traffic rounding the bend from Sherman onto Davis. (Sherman Plaza, Davis Street at Sherman Avenue)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Search + Effect",
    "url": "https://farm5.staticflickr.com/4309/36068156851_428c01942d_o_d.jpg",
    "lat": 42.047129,
    "lng": -87.683312,
    "website": "http://www.krivanek-breaux.com/index.html",
    "text": "Search + Effect is a dynamic piece consisting of lights and symbols created by the public art and design partnership of Krivanek + Breaux.  The idea was chosen by the Evanston Arts Council to be installed on the corner of Davis and Benson.  The piece has a complex conceptual background involving the intersection of technology, culture, and art. (821 Davis Street, Sherman Plaza Garage)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Shifting Color Dance",
    "url": "https://farm5.staticflickr.com/4274/35196526981_f93ef94fb7_o_d.jpg",
    "lat": 42.059080,
    "lng": -87.684648,
    "website": "http://www.joannapinsky.com/",
    "text": "Shifting Color Dance is a colorful Op-Art piece in the main stairwell of the Noyes Cultural Arts Center.  The artist Joanna Pinsky works with two-dimensional shaped paintings, bright colors, and geometric optical illusions.  She is an active Evanston artist and the co-founder of the non-profit Art Encounter. (927 Noyes Street, Noyes Cultural Arts Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Summertime Fantasy",
    "url": "https://farm5.staticflickr.com/4237/35159494632_88c4953575_o_d.jpg",
    "lat": 42.059257,
    "lng": -87.683639,
    "website": "http://jennylearner.com/home.html",
    "text": "Summertime Fantasy is a playful mural that anoints the east wall of Tallmadge Park adjacent to the Noyes Cultural Arts Center.  The whimsical image of children playing in nature was created by students in the ArtSkills Summer Program headed by Jenny Learner in 2001. (Tallmadge Park, Noyes Cultural Arts Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Zaftig",
    "url": "https://farm5.staticflickr.com/4204/35196526671_077cbc6b9c_o_d.jpg",
    "lat": 42.058731,
    "lng": -87.684771,
    "website": "http://staczalipinski.blogspot.com/2011/11/zaftig-acrylic-on-vellum-2005-noyes.html",
    "text": "Zaftig by Stacza Lipinski is a unique piece consisting of a mass of intricately cut pieces of vellum drawn on with acrylic and graphite.  Installed in 2005, the piece snakes down the south west stairwell of the Noyes Cultural Art Center like vines down a cliff face. (927 Noyes Street, Noyes Cultural Arts Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Day's End",
    "url": "https://farm5.staticflickr.com/4313/35062654684_c806bdbac8_o_d.jpg",
    "lat": 42.059014,
    "lng": -87.684486,
    "website": "http://www.sculpturebyoettinger.com/",
    "text": "This clay sculpture of a seated woman was created by Sheila Oettinger before she passed away in 2017.  The piece was placed in the Noyes Cultural Arts Center by her fellow Evanston artists in honor of her life and work. (Noyes Cultural Arts Center)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Untitled Stained Glass",
    "url": "https://farm5.staticflickr.com/4283/35732960772_1083108da5_o_d.jpg",
    "lat": 42.059164,
    "lng": -87.684509,
    "website": "https://www.cityofevanston.org/government/departments/parks-recreation-community-services/facilities/noyes-cultural-arts-center",
    "text": "This beautiful pieces of stained glass marks the arched entryway into the Noyes Cultural Arts Center. (Noyes Cultural Arts Center)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Aqua Vita",
    "url": "https://farm5.staticflickr.com/4284/34516249303_2a961c0806_o_d.jpg",
    "lat": 42.052082,
    "lng": -87.691551,
    "website": "http://donnazarbinbyrne.com/Aqua-Vita",
    "text": "Aqua Vita is a sculpture assemblage on the theme of water, located outside Evanston’s Fire Station number 1.  The piece was created in 1989 by Donna Zarbin-Byrne, an artist who often uses bronze, ceramics, and found objects in her work. (Fire Station #1, 1332 Emerson St.)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "The Encounter",
    "url": "https://farm5.staticflickr.com/4246/34516248453_29b39ffc8a_o_d.jpg",
    "lat": 42.049945,
    "lng": -87.684919,
    "website": "http://www.hubertus-von-der-goltz.de/install_aussen_perma_e.html",
    "text": "Hubertus von der Goltz’s piece The Encounter was the winner of a competition for a commission of public art at the Maple Ave. parking garage.  Goltz is an artist trained in Germany who specializes in metal pieces depicting figures balancing on long poles or structures.  (Maple Avenue and Clark Street)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Penny Park",
    "url": "https://farm5.staticflickr.com/4256/34516247533_9d7b838c6f_o_d.jpg",
    "lat": 42.043832,
    "lng": -87.693830,
    "website": "http://www.hopesandfears.com/hopes/city/architecture/217111-bob-leathers-playgrounds",
    "text": "Evanston is lucky to be home to one of Robert Leathers’ famous playgrounds.  Leathers is an architect who began building wooden playgrounds based off of children’s ideas in the 1970’s.  There are few playgrounds as interesting and magical as these.  One of those few is Evanston’s iconic Penny Park. (1500 Lake Street, Penny Park)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4230/34628128314_985479d853_o_d.jpg",
    "lat": 42.038439, 
    "lng": -87.694517,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Florence Avenue & Crain Street)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Art Opens Horizons: Nature, Culture, Diversity",
    "url": "https://farm5.staticflickr.com/4260/34516274523_1a512d5340_o_d.jpg",
    "lat": 42.033940,
    "lng": -87.680023,
    "website": "http://sonataka.com/public-art/",
    "text": "Art Opens Horizons: Nature, Culture, Diversity was a collaborative multimedia mural project that was designed and facilitated by the artist Sonata Kazimieraitiene in partnership with the Evanston based Open Studio Project.  The purpose of the project was to create a beautiful permanent piece of art that provided an opportunity for community members to be involved in the creative process. (West-facing CTA retaining wall on south side of Main St.)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4234/34516286963_455b201556_o_d.jpg",
    "lat": 42.034271, 
    "lng": -87.686627,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Main Street & Ridge Avenue)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Centennial Fountain",
    "url": "https://farm5.staticflickr.com/4251/34938923930_63a046255e_o_d.jpg",
    "lat": 42.043609,
    "lng": -87.687106,
    "website": "https://archive.org/details/FountainsGroundBasinsAndBasinRimsTheJ.l.MottIronWorks...NewYork",
    "text": "The Centennial Fountain located in the Merrick Rose Garden was made in 1912 by the J.L. Mott Ironworks company.  The J.L. Mott Ironworks company specialized in items like stoves, kettles, pipes, benches, and of course fountains.  This particular fountain originally resided in Fountain Square but later retired to the quiet of the rose garden. (Lake Street & Oak Street, Merrick Rose Garden)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Justin Wynn Fund Mural",
    "url": "https://farm5.staticflickr.com/4238/34938923670_55b8434812_o_d.jpg",
    "lat": 42.047081,
    "lng": -87.684315,
    "website": "http://www.wynners.org/about-us/",
    "text": "The Justin Wynn Fund Mural was painted in 2005 by Michael Montenegro to celebrate Justin Wynn and the Evanston youth service organization that was created in honor of his legacy.  The mural is located immediately west of the L tracks on Davis St. and depicts the life and lasting legacy of Wynn who died at age 9. (Davis Street & Maple Avenue, Metra Tracks)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4275/35159663142_4f61103af1_o_d.jpg",
    "lat": 42.055743,
    "lng": -87.699017,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Simpson Street & Dodge Avenue)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Changing Faces of Fountain Square",
    "url": "https://farm5.staticflickr.com/4238/35159662312_e8c69e9995_o_d.jpg",
    "lat": 42.056448,
    "lng": -87.687132,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This series of enlarged photos on the fourth floor of the Civic Center depict Fountain Square at different stages of Evanston history.  The series begins with a photo of folks in buggies surrounding Centennial Fountain and ends with cars parked on the streets of the plaza. (2100 Ridge Avenue, Civic Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "The Eagle",
    "url": "https://farm5.staticflickr.com/4251/34938947940_1514d7449f_o_d.jpg",
    "lat": 42.056532,
    "lng": -87.687089,
    "website": "http://www.derharootian.com/",
    "text": "The Eagle is a sculpture by the Armenian painter and sculptor Khoren der Harootian who was born in Armenia and came to the US after the Armenian Genocide.  He spent his life making pieces like this stone carving of a magnificent eagle that is located on the first floor of the Evanston Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Map and Photos of Evanston History",
    "url": "https://farm5.staticflickr.com/4252/35159661642_0c673c34ea_o_d.jpg",
    "lat": 42.056634,
    "lng": -87.687046,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This piece is a collection of historic photos of Evanston arranged into two squares creating a grid-like pattern of negative space between the photos.  The work is by Charles A. Wightman. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Evanston Odyssey",
    "url": "https://farm5.staticflickr.com/4282/34732238154_4906839316_o_d.jpg",
    "lat": 42.056475,
    "lng": -87.687466,
    "website": "http://www.jillkingstudio.com/front-page-2/sculptures-and-public-art/",
    "text": "The organic blue sculpture suspended in the stairwell of the Evanston Civic Center is rightly called Evanston Odyssey.  Spanning four flights of stairs, this work created by the artist Jill King-Wynn, takes us on a journey as we ascend the Civic Center steps.  The piece, made of twisted wire, opaque fabric, and electric blue lights is reminiscent of a cosmic cloud.",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Fallen Firefighters Memorial",
    "url": "https://farm5.staticflickr.com/4326/35173276893_9dd9ecb8fb_o_d.jpg",
    "lat": 42.055705,
    "lng": -87.684784,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The solemn stone pillar crowned with the Evanston Fire Department insignia reminds visitors to Fireman’s Park of the valiant sacrifice of our brave firefighters.  The Fallen Firefighters Memorial tastefully pays homage to their essential role as dedicated and fearless public servants. The memorial was made by Gail Leoni & James Economou & Assoc. (Fireman's Park Corner of Simpson and Maple Avenue)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Fireman",
    "url": "https://farm5.staticflickr.com/4290/35286555516_241820b852_o_d.jpg",
    "lat": 42.056744,
    "lng": -87.686964,
    "website": "http://halsteadportraits.com/about-the-artist/",
    "text": "The painting Fireman was made by the portrait artist Richard Halstead who has had works in such prestigious locations as the National Portrait Gallery.  Fireman is located on the second floor of the Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "The Fleetwood Jourdain Art Guild Mural Project",
    "url": "https://farm5.staticflickr.com/4202/34516304793_4876870f52_o_d.jpg",
    "lat": 42.054214,
    "lng": -87.695153,
    "website": "http://cityofevanston.org/arts-culture/galleries/Fleetwood-Jourdain-Art-Guild/index.php",
    "text": "This piece is a vibrant mural with three dimensional aspects that can be found in the front hallway of the Fleetwood Jourdain Community Center.  The mural was done as a collaborative community project organized by the Fleetwood Jourdain Art Guild. (Fleetwood Jourdain 1655 Foster St.)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Forestry Worker",
    "url": "https://farm5.staticflickr.com/4200/35159659442_50e1976c84_o_d.jpg",
    "lat": 42.056722,
    "lng": -87.686976,
    "website": "http://halsteadportraits.com/about-the-artist/",
    "text": "The painting Forestry Worker was made by the portrait artist Richard Halstead who has had works in such prestigious locations as the National Portrait Gallery.  Forestry Worker is located on the second floor of the Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Galena Hills I & II",
    "url": "https://farm5.staticflickr.com/4261/35159659242_2cdfff70c4_o_d.jpg",
    "lat": 42.056933,
    "lng": -87.686957,
    "website": "http://articles.chicagotribune.com/1995-02-05/news/9502050262_1_sculpture-and-crafts-art-institute-arts-gallery",
    "text": "The set of Galena Hills paintings (one pictured) by the renowned Chicago artist Rosemary Zwick are beautiful abstracted landscapes of rolling green hills.  Painted in 1997, the two paintings are located in the basement of the Civic Center in a meditation/therapy room. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Liberty Bell sculpture",
    "url": "https://farm5.staticflickr.com/4226/35159658972_f6d56fede1_o_d.jpg",
    "lat": 42.057081,
    "lng": -87.686984,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The Liberty Bell sculpture is a small replica of the Liberty Bell that resides on the second floor of the civic center and was dedicated in 1982 in recognition of George Washington’s 250th birthday. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Bicentennial Lighthouse Tapestry",
    "url": "https://farm5.staticflickr.com/4227/35159658902_a433098f17_o_d.jpg",
    "lat": 42.057143,
    "lng": -87.687075,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This quaint Americana tapestry was sewn in 1976 by Hal E. Davis in celebration of America’s bicentennial anniversary.  The lovely squares depict classic Evanston landmarks and claims to fame such as the iconic lighthouse, Centennial Fountain, and the Ice Cream Sunday. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "19 prints of various former Mayors",
    "url": "https://farm5.staticflickr.com/4229/35286554326_8bc6e83a4f_o_d.jpg",
    "lat": 42.057121,
    "lng": -87.687134,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This fine collection consists of a group of 19 mounted photographs of previous Evanston mayors and is located on the second floor of the Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Lorraine H. Morton portrait",
    "url": "https://farm5.staticflickr.com/4241/35159658682_7c6cfedee5_o_d.jpg",
    "lat": 42.057041,
    "lng": -87.687166,
    "website": "http://halsteadportraits.com/about-the-artist/",
    "text": "This piece by Richard Halstead is a portrait of the beloved Evanston mayor Lorraine H. Morton.  The life-like homage hangs above the front desk of the Civic Center welcoming the community with a smile. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Paramedics",
    "url": "https://farm5.staticflickr.com/4287/35286553966_10a511205b_o_d.jpg",
    "lat": 42.056756,
    "lng": -87.686946,
    "website": "http://halsteadportraits.com/about-the-artist/",
    "text": "The painting Paramedics was made by the portrait artist Richard Halstead who has had works in such prestigious locations as the National Portrait Gallery.  Paramedics is located on the second floor of the Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Ask Not What Your Country Can Do For You, But What You Can Do For Your Country",
    "url": "https://farm5.staticflickr.com/4239/35339388251_d3249df8a3_o_d.jpg",
    "lat": 42.056820,
    "lng": -87.687254,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This bronze plaque with a quote for John F. Kennedy can be found in the entryway of Evanston’s Civic Center.  Everyday it inspires Evanston’s public servants and constituent alike to work for the betterment of our country. (2100 Ridge Avenue, Civic Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Police Officers",
    "url": "https://farm5.staticflickr.com/4198/35159658362_54e34e2ba6_o_d.jpg",
    "lat": 42.056640,
    "lng": -87.687014,
    "website": "http://halsteadportraits.com/about-the-artist/",
    "text": "The painting Police Officers was made by the portrait artist Richard Halstead who has had works in such prestigious locations as the National Portrait Gallery.  Police Officers is located on the second floor of the Civic Center. (2100 Ridge Avenue, Civic Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Lighthouse and Tree",
    "url": "https://farm5.staticflickr.com/4282/35159658322_e8800c9db5_o_d.jpg",
    "lat": 42.056588,
    "lng": -87.687339,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "These two pieces of perforated metal depict a lighthouse and a tree, two of the most iconic Evanston symbols.  Mounted on the wall between the first and second floor of the Civic Center the images emanate Evanstonian pride. (Civic Center southeast stairwell)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4195/35326456425_f54b32b4ba_o_d.jpg",
    "lat": 42.064410,
    "lng": -87.715654,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Central Street & Lincolnwood Drive)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Emitting Waves",
    "url": "https://farm5.staticflickr.com/4243/35326455745_5fc61bcace_o_d.png",
    "lat": 42.064367,
    "lng": -87.714033,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Emitting Waves is a permanent installation of colored glass and light made to look like an undulating wave moving across the upper windows of Fire Station number 5.  This piece by Robert Smart was installed in 2008 when the fire station was rebuilt as a state-of-the-art sustainable structure. (2830 Central Street, Fire Station 5)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Mound",
    "url": "https://farm5.staticflickr.com/4213/35286575526_c3e552676d_o_d.jpg",
    "lat": 42.058800,
    "lng": -87.725509,
    "website": "http://richardhunt.us/",
    "text": "Mound is a large metal sculpture shaped like an amorphous beast emerging from the ground.  It was created by the renowned Chicago native Richard Hunt in 1977.  This sloping abstract piece is located in the corner of Cartwright Park in the 6th ward of Evanston. (Grant & Prospect)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Mural depicting firefighters at work",
    "url": "https://farm5.staticflickr.com/4236/35159701572_4e3379d2ba_o_d.jpg",
    "lat": 42.064382,
    "lng": -87.686165,
    "website": "http://adelheidmers.org/exelon/Mers_McGee-bios.pdf",
    "text": "The Firefighters mural on the outside wall of Evanston's Fire Station number 3 was created by the Chicago based artists Adelheid Mers and Patrick McGee in 2005.  The piece consists of panels of perforated aluminum that from certain angles reveal ghostly images of brave firefighters at work. (1105 Central Street, Fire Station #3)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Evanston Ohana tiki",
    "url": "https://farm5.staticflickr.com/4215/34482915384_f756b4b532_o_d.jpg",
    "lat": 42.056589,
    "lng": -87.700957,
    "website": "http://articles.chicagotribune.com/2009-09-11/news/0909090529_1_tiki-sculpture-hawaiian",
    "text": "The Hawaiian “tiki sculpture” titled “Ohana” tiki was carved in 2009 by Keoni Durant soon after he moved to Evanston.  Durant wanted to create something that would celebrate the friendliness and beauty of Evanston’s citizens and shoreline.  The wood carving now finds its home in the Evanston Ecology Center. (Ecology Center, 2024 McCormick)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Shore Bird",
    "url": "https://farm5.staticflickr.com/4275/34482915094_0062455a51_o_d.jpg",
    "lat": 42.056481,
    "lng": -87.701142,
    "website": "http://www.cityofevanston.org/arts-culture/public-art/",
    "text": "The rust-colored steel sculpture titled Shore Bird by the artist Ruth Ann Frazier is located outside the Evanston Ecology Center welcoming visitors with an artistic rendering of a native bird. (Ecology Center, 2024 McCormick)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Silver Wings",
    "url": "https://farm5.staticflickr.com/4206/35093244513_22dd5bd29b_o_d.jpg",
    "lat": 42.059535,
    "lng": -87.694984,
    "website": "http://dailynorthwestern.com/2006/10/15/archive-manual/silver-wings-sculpture-welcomed-to-central-city-intersection/",
    "text": "The piece Silver Wings by the Chicago area artist Ferdinand G. Rebechini was donated to Evanston by the Duke Realty Co. in 2005.  It was installed on the corner of Green Bay Road and McCormick Boulevard at the end of Arts Week Evanston in 1990.  The sculpture appears to everyday passersby as a set of majestic silver wings taking flight. (Green Bay Road & McCormick Boulevard)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Acornucopia",
    "url": "https://farm5.staticflickr.com/4263/34939009920_eb1754e30a_o_d.jpg",
    "lat": 42.023098,
    "lng": -87.699905,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "MTUK is one of two adjacent sculpture pieces by the artist Fred Nagelbach.  MTUK resembles a geometric tree and is made of metal.  The sculpture was installed in 2004. (300 Dodge Avenue, Levy Center Exterior)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "The Blue Line",
    "url": "https://farm5.staticflickr.com/4222/35159745402_e94169a68c_o_d.jpg",
    "lat": 42.021813,
    "lng": -87.680464,
    "website": "http://www.jamesbrenner.com/",
    "text": "The Blue Line is a striking blue arch of azur glass that stretches across the Custer St. bridge spanning the train tracks.  This piece that glows with LED lights in the night was created by the artist Jim Brenner and was installed in 2009. (Custer Avenue & Brummel Street)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Ten Thousand Ripples",
    "url": "https://farm5.staticflickr.com/4286/35159744862_f54b15290f_o_d.jpg",
    "lat": 42.019471,
    "lng": -87.677929,
    "website": "http://www.indirajohnson.com/ten-thousand-ripples.html",
    "text": "Ten Thousand Ripples is a collaborative public arts project carried out in 2013 by chicago community and cultural organizations and the local artist Indira Freitas Johnson.  The project consists of 100 fiberglass Buddha heads placed around Chicago and surrounding neighborhoods.  The goal of this project is to cultivate a public art experience in untraditional places and encourage conversations on peace within the city. (Howard Street & Clyde Avenue)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Copper Kettle",
    "url": "https://farm5.staticflickr.com/4250/34939008760_33d1abc936_o_d.jpg",
    "lat": 42.023204,
    "lng": -87.699937,
    "website": "http://www.framehaven.net/other1.html",
    "text": "This lithograph called Copper Kettle was made by the artist Audean Johnson.  Johnson is a respected figure in the school of Contemporary American Realism and created work that reflected the quiet country atmosphere of rural America. (300 Dodge Avenue, Levy Center Elm room)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Old Levy Center",
    "url": "https://farm5.staticflickr.com/4209/35159744412_a274d44ffa_o_d.jpg",
    "lat": 42.023244,
    "lng": -87.699824,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This piece is a painting by W. English depicting the Old Levy Center.  It hangs in the Levy Center computer lab adding a touch of nostalgia to the newage room. (300 Dodge Avenue, Levy Center, computer lab)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Levy Family Portrait",
    "url": "https://www.flickr.com/photos/146266332@N05/34482952044/sizes/l",
    "lat": 42.023318,
    "lng": -87.699701,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This framed photo is of the Levy family for whom the center is named.  It is located in the lobby of the community center. (300 Dodge Avenue, Levy Center)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Portrait of Mr. Levy Sr.",
    "url": "https://farm5.staticflickr.com/4205/34939008260_fd8a44439a_o_d.jpg",
    "lat": 42.023465,
    "lng": -87.699806,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This piece is a portrait of Mr. Levy Senior painted by the artist A. Montgomery.  The austere portrait hangs on the wall of the Levy Center’s library reminding readers who to thank for the community center. (300 Dodge Avenue, Levy Center library)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled mosaic",
    "url": "https://farm5.staticflickr.com/4258/34482951644_0cfe04fa3a_o_d.jpg",
    "lat": 42.023756,
    "lng": -87.700023,
    "website": "http://ginnysykes.com/home.html",
    "text": "Ginny Sykes is a Chicago artist who often does works of public art including murals and mosaics.  Her contribution to the Evanston Levy Center is a collection of garden mosaics in the center’s manicured courtyard. (300 Dodge Avenue, Levy Center)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "MTUK",
    "url": "https://farm5.staticflickr.com/4289/34939007670_fd98a0ed87_o_d.jpg",
    "lat": 42.023092,
    "lng": -87.699851,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "MTUK is one of two adjacent sculpture pieces by the artist Fred Nagelbach.  MTUK resembles a geometric tree and is made of metal.  The sculpture was installed in 2004. (300 Dodge Avenue, Levy Center Exterior)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Joseph & Sarah Levy Student Union",
    "url": "https://farm5.staticflickr.com/4198/34482951224_526a2bb594_o_d.jpg",
    "lat": 42.023714,
    "lng": -87.700283,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This framed piece is an architectural style mockup of a the Joseph & Sarah Levy Student Union done in pink.  The piece is by R.V. Macey and hangs in the Levy Center computer lab. (300 Dodge Avenue, Levy Center computer lab)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "The Model- Planning Other Poses",
    "url": "https://farm5.staticflickr.com/4245/34939007360_e316f881ec_o_d.jpg",
    "lat": 42.023598,
    "lng": -87.700393,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This surrealist watercolor by Jack Lerman depicts a model planning her upcoming poses.  It hangs in the Levy Center craft room to inspire art makers.  (300 Dodge Avenue, Levy Center craft room)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Wall of Struggles and Dreams",
    "url": "https://farm5.staticflickr.com/4278/35159742942_b403e12eff_o_d.jpg",
    "lat": 42.021433,
    "lng": -87.677615,
    "website": "http://www.evanstonroundtable.com/main.asp?SectionID=4&SubSectionID=4&ArticleID=727&TM=77143.09",
    "text": "The Wall of Struggles and Dreams was painted in 2009 following the shooting death of 13-year-old Marchelle Gibbs.  This beautiful mural became an opportunity for the community to pour out their feelings, share their struggles, and announce their dreams. (Clyde-Brummel Park, Clyde Ave. & Brummel St.)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Bookends",
    "url": "https://farm5.staticflickr.com/4266/35159577542_90a2bca9bb_o_d.jpg",
    "lat": 42.048449,
    "lng": -87.680446,
    "website": "http://richardhunt.us/",
    "text": "The sculpture piece titled Bookends resembles two silver birds atop a high library window ledge.  However, this piece by the artist Richard Hunt is not intended to depict two birds but is supposed to represent the evolution of information storage in western culture.  The work was installed in 1997. (Library western facade)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Book Leaves",
    "url": "https://farm5.staticflickr.com/4258/34938853810_dc8aa4c2db_o_d.jpg",
    "lat": 42.048495,
    "lng": -87.680081,
    "website": "http://www.micheleokadoner.com/",
    "text": "Book Leaves is a unique piece that can be seen as one walks across the library lobby and glances down at the floor.  This piece by Michele Oka Doner consists of inlaid bronze in the shape of leaves. (Library lobby)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled sculpture",
    "url": "https://farm5.staticflickr.com/4225/35159576972_ba45866a44_o_d.jpg",
    "lat": 42.048134,
    "lng": -87.679799,
    "website": "http://gapersblock.com/ac/2010/01/18/sculptor-bill-boyce-on-chicagoarts/",
    "text": "This untitled metal piece made of found objects is by the artist Bill Boyce who shows his metal work throughout Chicago and the surrounding areas. (Library 3rd floor)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "A Strong Breeze Shook the Tree…",
    "url": "https://farm5.staticflickr.com/4243/34938853260_f311918264_o_d.jpg",
    "lat": 42.048152,
    "lng": -87.679912,
    "website": "http://www.brianpinkney.net/",
    "text": "Brian Pinkney is a recipient of the Coretta Scott King award for illustration.  This painted illustration is from the book Max Found Two Sticks and can be found hanging the Children’s Room of the Evanston Library. (Library Children’s Room)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Catamarans at Sunrise",
    "url": "https://farm5.staticflickr.com/4240/35159576762_923b6a7840_o_d.jpg",
    "lat": 42.048459,
    "lng": -87.680330,
    "website": "http://articles.chicagotribune.com/1995-02-05/news/9502050262_1_sculpture-and-crafts-art-institute-arts-gallery",
    "text": "The piece Catamarans at Sunrise is by the local artist Rosemary Zwick.  Her brightly colored painting was donated to the Evanston Public Library by her loving husband. (Library 3rd floor)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Discover New Worlds",
    "url": "https://farm5.staticflickr.com/4212/34938852980_b4dd8a547b_o_d.jpg",
    "lat": 42.048332,
    "lng": -87.680378,
    "website": "http://www.ericrohmann.com/",
    "text": "Eric Rohmann is the illustrator of numerous picture books and has done covers for famous novels such as The Golden Compass.  His sweet illustration of Discover New Worlds pictures a child reading a book between three polar bears. (Library Children’s Room)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled wall sculpture",
    "url": "https://farm5.staticflickr.com/4195/34938852590_bf11c2146f_o_d.jpg",
    "lat": 42.048404,
    "lng": -87.680322,
    "website": "https://en.wikipedia.org/wiki/Ruth_Duckworth",
    "text": "This stone sculpture carved by the German born and Chicago based artist Ruth Duckworth was created in 1973.  She was well known for her stonework and showed art in places such as the Arts Institute of Chicago.  The piece was donated to the library by Paul H. Leffmann. (Library 3rd floor)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "For Endless Trees",
    "url": "https://farm5.staticflickr.com/4209/35159576072_3e4f9e81c6_o_d.jpg",
    "lat": 42.048396,
    "lng": -87.680247,
    "website": "http://www.bevprecious.com/bevprecious.com/Home.html",
    "text": "For Endless Trees is a contemporary stained glass and metal piece by the Chicago based artist Beverly Stucker Precious and is located in the lobby of the Evanston Library.  The piece was purchased as part of Evanston’s Public Art Program. (Library lobby)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Ghostwriter",
    "url": "https://farm5.staticflickr.com/4251/34938852130_c20bee4811_o_d.jpg",
    "lat": 42.048440,
    "lng": -87.680223,
    "website": "http://www.helmicksculpture.com/ghost.html",
    "text": "Ghostwriter hangs suspended in the four story stairwell that rises from the lobby of the Evanston Public Library.  This complex mobile-like piece by Ralph Helmick and Stuart Schechter is made of hundreds of tiny cast metal objects hanging on vertical wires.  From the correct angle the hanging objects align to form the vivid shape of an eerie three dimensional face.  (Library main lobby)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Innocents Guarded by Faithfulness",
    "url": "https://farm5.staticflickr.com/4296/35365549474_e913e7f1e8_o_d.jpg",
    "lat": 42.048621,
    "lng": -87.680303,
    "website": "https://bookbird.wordpress.com/2016/01/07/things-you-didnt-know-about-the-library-8-the-mystery-of-the-statue-beneath-the-stairs/",
    "text": "It is safe to say that the small marble sculpture by Giovanni Benzoni is the Evanston Public Library’s most intriguing piece of art.  Innocents Guarded by Faithfulness was discovered under the front steps of the 1908 library building during its demolition.  No one knows how this sculpture of a girl and her dog, carved in 1868, came to reside in the Evanston Library.  Today it is housed in the Evanstoniana Room on the library’s third floor. (Library 3rd floor)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Kinderspring",
    "url": "https://farm5.staticflickr.com/4288/34516202213_284d21940e_o_d.jpg",
    "lat": 42.048673,
    "lng": -87.680247,
    "website": "http://www.encyclopedia.com/doc/1G2-3433800064.html",
    "text": "Kinderspring is a magical mosaic piece with light-up features located at the entrance to the Evanston Library’s Children’s Room.  The piece was created through a collaboration between the designer Peter Exley and the artist Alejandro Romero. (Library Children’s Room)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled print",
    "url": "https://farm5.staticflickr.com/4244/34938850530_c217cf96e9_o_d.jpg",
    "lat": 42.048697,
    "lng": -87.680183,
    "website": "https://en.wikipedia.org/wiki/Nicholas_Krushenick",
    "text": "This piece by the well known print maker Nicholas Krushenick served as a poster for the New York Ballet.  Here one incarnation of the piece can be found tucked away on the library’s second floor. (Library 2nd floor)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "May First",
    "url": "https://farm5.staticflickr.com/4211/34516201573_801547f8bc_o_d.jpg",
    "lat": 42.048672,
    "lng": -87.680098,
    "website": "https://www.epl.org/adams/top.html",
    "text": "This painting is by the Evanston artist Walter Burt Adams who was well known for painting Evanston street scenes. This painting is of the old library building and was bought by library volunteers to be hung in the current building. (Library 4th floor)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Metamorphosis",
    "url": "https://farm5.staticflickr.com/4273/35159573822_d2a5b8a7f5_o_d.jpg",
    "lat": 42.048646,
    "lng": -87.680014,
    "website": "http://www.peggymacnamara.com/",
    "text": "Peggy Macnamara is an Evanston artist who focuses her art on nature.  She is an adjunct associate professor at the Art Institute of Chicago and the official artist-in-resident of the Zoological department at the Field Museum.  Metamorphosis is a watercolor depiction of butterflies going through their natural changes. (Library Children’s Room)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Peregrine Chick",
    "url": "https://farm5.staticflickr.com/4198/34516200843_ab6e1bda04_o_d.jpg",
    "lat": 42.048618,
    "lng": -87.679934,
    "website": "http://www.hermanadler.com/",
    "text": "This painting of a peregrine falcon chick was donated by the artist Beth Adler in 2015.  The painting recognizes the generations of falcon chicks that have been raised on the library building. (Library 3rd floor)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Severed Connections",
    "url": "https://farm5.staticflickr.com/4200/35159573462_2467406482_o_d.jpg",
    "lat": 42.048586,
    "lng": -87.679819,
    "website": "http://robertmiddaugh.com/",
    "text": "This surrealist piece depicting severed pipes is by the late Chicago based artist Robert Burton Middaugh.  The piece was donated to the library in 2004. (Library 4th floor)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "She told you all the stories in the world",
    "url": "https://farm5.staticflickr.com/4198/34516200493_f90f7ed63e_o_d.jpg",
    "lat": 42.048560,
    "lng": -87.679709,
    "website": "http://www.kristinaswarner.com/",
    "text": "Kristina Swarner’s piece She told you all the stories in the world is an illustration for the book Before You Were Born, by Howard Schwartz.  Swarner is the recipient of multiple illustration awards and her piece came to the Evanston Public Library in 2007. (Library Children’s Room)",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Sidewalk Poetry",
    "url": "https://farm5.staticflickr.com/4263/35159572802_57c002f090_o_d.jpg",
    "lat": 42.048253,
    "lng": -87.680353,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Sidewalk Poetry is the result of a poetry contest put on through a collaboration between the Evanston Arts Council and the board of the Evanston Library.  The winning poems can be found carved into the sidewalk leading up to the library doors. Research by Ethan Plaut, Clark Street Beach by Charlotte Hart, Poem by Toby Sachs, Snowflakes by Susan Gundlach, The Poetic Foot by Alicia Berneche. (Library front sidewalk)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Unknown title",
    "url": "https://farm5.staticflickr.com/4270/34516199493_b07f488a3f_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Unknown.",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Unknown title",
    "url": "https://farm5.staticflickr.com/4231/34938847510_776beb8fde_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Unknown.",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Unknown title",
    "url": "https://farm5.staticflickr.com/4247/34938846940_83cdf2e946_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Unknown.",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Unknown title",
    "url": "https://farm5.staticflickr.com/4285/34516198423_b4e66fd7e3_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Unknown.",
    "size": "big",
    "type": "city"
  },
  {
    "name": "Unknown title",
    "url": "https://farm5.staticflickr.com/4290/34516198083_2527b24ce6_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "Unknown.",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Too Many Tamales",
    "url": "https://farm5.staticflickr.com/4285/34516197953_640371e07c_o_d.jpg",
    "lat": 42.048510,
    "lng": -87.679602,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "An illistration from Too Many Tamales by Gary Soto.",
    "size": "big",
    "type": "city"
  },
  {
    "name": "World View",
    "url": "https://farm5.staticflickr.com/4273/34516197533_a11f6d5a9b_o_d.jpg",
    "lat": 42.048088,
    "lng": -87.679782,
    "website": "http://richardlalonde.com/",
    "text": "This piece by Richard LaLonde is a three paneled fused glass mural.  The three panels can be view left to right and represent the past, present, and future.  The mural was donated to the library in 1994 and can be found on the landing in between the 1st and 2nd floors. (Library 1st/2nd floor landing)",
    "size": "small",
    "type": "city"
  },
  {
    "name": "Untitled welded sculpture",
    "url": "https://farm5.staticflickr.com/4237/35301013762_ae5f5ebf08_o_d.jpg",
    "lat": 42.051798,
    "lng": -87.674197,
    "website": "http://www.peterreginato.com/",
    "text": "This untitled abstract sculpture piece located in Northwestern University’s sculpture garden was made by the American artist Peter Reginato in 1979.  Reginato began creating abstract work such as this one in the 1960’s.  This piece was gifted to the university by Selig D. Sacks who attended the school from 1969 - 1987. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Man Going Through a Door (Homme Poussant une Porte)",
    "url": "https://farm5.staticflickr.com/4240/35337326031_59125d9342_o_d.jpg",
    "lat": 42.051979,
    "lng": -87.673867,
    "website": "http://www.jean-ipousteguy.com/",
    "text": "This bronze sculpture by the French artist Jean Ipousteguy was created in 1966 and donated to the university later by Leigh B. Block.  The piece depicts a man going through a door, as the title clearly describes. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Bryher II",
    "url": "https://farm5.staticflickr.com/4217/35337325591_69f5fdb137_o_d.jpg",
    "lat": 42.052246,
    "lng": -87.673644,
    "website": "http://www.theartstory.org/artist-hepworth-barbara.htm",
    "text": "The bronze sculpture Bryher II was made by the English artist Barbara Hepworth in 1961.  It was later donated to Northwestern University by Leigh B. Block and now resides in the campus sculpture garden. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Unknown",
    "url": "https://farm5.staticflickr.com/4241/35301014632_ba98be2c2a_o_d.jpg",
    "lat": 42.053504,
    "lng": -87.673626,
    "website": "http://www.northwestern.edu/",
    "text": "Here behind Northwestern’s undergraduate library is a beautiful pink fossiliferous limestone sculpture.  It is missing an information plaque. (Behind undergraduate library)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Bench Form 91-5",
    "url": "https://farm5.staticflickr.com/4254/35337326261_47cc46b490_o_d.jpg",
    "lat": 42.052815,
    "lng": -87.670402,
    "website": "http://www.groundsforsculpture.org/Artist/Tom-Sternal",
    "text": "This quiet stone bench made of French Creek Granite was crafted by the American artist Thomas Sternal.  Located on Northwestern University’s lake fill, the bench provides a peaceful spot to contemplate the lagoon.  The Bench was gifted to the University by Muriel and Philip I. Berman. (Northwestern lakefill)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "The Painted Rocks",
    "url": "https://farm5.staticflickr.com/4280/35301015102_64d49cbb63_o_d.jpg",
    "lat": 42.052150,
    "lng": -87.669286,
    "website": "http://www.northwestern.edu/",
    "text": "The iconic lake fill on Northwestern’s campus is notable not only for the amazing view of downtown chicago, but also for the permanent and ever changing public art the covers the concrete slabs around its point.  It is tradition for Northwestern students to make art on these rocks.  Here, one can see everything from colorful murals of sunsets and cartoon characters, to plain old-fashion graffiti, to delicately crafted marriage proposals.  This participatory art piece puts the public in public art! (Northwestern lake fill)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Reihe IV",
    "url": "https://farm5.staticflickr.com/4242/35301014102_250020741e_o_d.jpg",
    "lat": 42.052294,
    "lng": -87.672558,
    "website": "https://de.wikipedia.org/wiki/Matschinsky-Denninghoff",
    "text": "The stainless steel sculpture Reihe IV was created by the German artist Brigitte Meier-Denninghoff in 1964.  Meier-Denninghoff and her husband were successful German sculptors who are know for large pieces of twisting metal. This piece was donated to Northwestern by Leigh B. Block.  (Outside the Block Museum)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Constellation",
    "url": "https://farm5.staticflickr.com/4215/35337326441_7fcb94eddd_o_d.jpg",
    "lat": 42.051742,
    "lng": -87.671203,
    "website": "http://www.theartstory.org/artist-miro-joan.htm",
    "text": "The piece Constellation by Joan Miro was created in 1971, the version that resides in the main hall of Northwestern University’s music building was cast in 1973.  The sculpture was donated by Mary and Leigh B. Block. (Main hall of the Ryan center for musical arts)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Constricted Cylinder (Cilindro Construito)",
    "url": "https://farm5.staticflickr.com/4232/35337325861_7e4aecb3b1_o_d.jpg",
    "lat": 42.051768,
    "lng": -87.671646,
    "website": "https://en.wikipedia.org/wiki/Arnaldo_Pomodoro",
    "text": "The polished bronze sculpture, Constricted Cylinder (Cilindro Construito) was crafted by the Italian artist Arnaldo Pomodoro in 1969.  The piece resides in the main hall of Northwestern University’s music building and was donated by Mary and Leigh B. Block. (Main hall of the Ryan center for musical arts)",
    "size": "small",
    "type": "northwestern"
  },
  {
    "name": "Untitled bronze sculpture",
    "url": "https://farm5.staticflickr.com/4279/35301015552_8b641bfa74_o_d.jpg",
    "lat": 42.052539,
    "lng": -87.672338,
    "website": "http://www.artnet.com/artists/wolfgang-paalen/",
    "text": "This bronze sculpture was originally created by the Austrian/Mexican artist Wolfgang Paalen in 1949.  The ideration of the sculpture owned by Northwestern University was cast much later, in 1996.  The piece resides in the garden outside the University’s concert hall. (Outside Pick-Staiger concert hall)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "The Block Museum",
    "url": "https://farm5.staticflickr.com/4207/35337326631_69361bd45d_o_d.jpg",
    "lat": 42.052314,
    "lng": -87.672700,
    "website": "http://www.blockmuseum.northwestern.edu/",
    "text": "The Block Museum is Northwestern University’s public art gallery.  The museum is free for all visitors and hosts fine exhibitions.  The gallery was donated to the school by Mary and Leigh B. Block. (NU campus)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Resting Leaf (Feuille se Reposant)",
    "url": "https://farm5.staticflickr.com/4290/35467767485_95f898f315_o_d.jpg",
    "lat": 42.052609,
    "lng": -87.673556,
    "website": "http://www.theartstory.org/artist-arp-hans.htm",
    "text": "The fluid form of Resting Leaf (Feuille se Reposant) evokes the exciting organic movement of living things while also reminding the viewer of the regal tranquility of nature.  Created in 1959 by the French artist Jean (Hans) Arp, the piece was later donated to Northwestern University by Leigh B. Block. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Interior Form",
    "url": "https://farm5.staticflickr.com/4210/35337326981_6a7f9c36af_o_d.jpg",
    "lat": 42.052410,
    "lng": -87.674224,
    "website": "https://www.henry-moore.org/",
    "text": "The piece Interior Form by the English artist Henry Moore is tucked between the willows in the peaceful Northwestern University sculpture garden.  The sculpture was created in 1983 and was later donated to the school by Leigh B. Block, a true patron of the arts. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Two Forms (Divided Circle)",
    "url": "https://farm5.staticflickr.com/4266/35301016162_1c19bac43b_o_d.jpg",
    "lat": 42.052153,
    "lng": -87.674245,
    "website": "http://www.theartstory.org/artist-hepworth-barbara.htm",
    "text": "The piece Two Forms (Divided Circle) by the English artist Barbara Hepworth is a stunning centerpiece to the Northwestern University sculpture garden.  The piece was made by Hepworth in 1969 and was then donated to Northwestern by Leigh B. Block. (NU sculpture garden)",
    "size": "big",
    "type": "northwestern"
  },
  {
    "name": "Physical Development and Intellectual Development",
    "url": "https://farm5.staticflickr.com/4262/35405363712_3c407dcb1f_o_d.jpg",
    "lat": 42.061297,
    "lng": -87.676871,
    "website": "https://en.wikipedia.org/wiki/Patten_Gymnasium",
    "text": "The statues titled Physical Development and Intellectual Development (the former shown above) were first displayed at Northwestern University's Patten Gymnasium in 1916.  The statues were created by the American artist Hermon Atkins McNeil who is best known for designing the Liberty Quarter, which was minted between 1916 and 1930. McNeil's Patten Gym statues have been affectionately nicknamed Pat and Jim by university students.  (Patten Gymnasium, Northwestern University)",
    "size": "big",
    "type": "northwestern"
  },
   {
    "name": "Oakton School Mosaic",
    "url": "https://farm5.staticflickr.com/4256/35405664632_51176b404f_o_d.jpg",
    "lat": 42.026203,
    "lng": -87.687009,
    "website": "http://oaktonschoolpta.org/oaktons-story/",
    "text": "A colorful mural made by the students of Oakton Elementary dons the exterior of the school.  It depicts a family in a tree, a city, and children playing. (Oakton School Exterior)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Oakton School Fence",
    "url": "https://farm5.staticflickr.com/4216/35573644655_f11c5dbdbe_o_d.jpg",
    "lat": 42.026558,
    "lng": -87.687283,
    "website": "http://oaktonschoolpta.org/oaktons-story/",
    "text": "The chainlink fence outside Oakton Elementary School is covered by a more playful wooden fence made out of planks painted by the students.  Each plank is a brightly colored self-portrait. (Oakton School Exterior)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Martin Luther King Jr. Literary and Fine Arts School Exterior Mosaic",
    "url": "https://farm5.staticflickr.com/4265/35534904746_7023f366c3_o_d.jpg",
    "lat": 42.043798,
    "lng": -87.708119,
    "website": "https://www.district65.net/Domain/21",
    "text": "The mosaic that adorns the trim of Martin Luther King Jr. Literary and Fine Arts School depicts geometric shapes, human forms, and a profile.  This mosaic likely dates back to when King Arts was called Skiles Middle School. (King Arts Exterior)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Willard Elementary School Mosaic",
    "url": "https://farm5.staticflickr.com/4258/35573739545_2094395d40_o_d.jpg",
    "lat": 42.067627,
    "lng": -87.717024,
    "website": "https://www.district65.net/willard",
    "text": "The Willard Elementary School mosaic was done on the semi-circular amphitheatre next to the playground.  Made by the students, the piece is charming and innocent.  The project was facilitated by local artist Alison Witt-Janssen, former Program Director of the Ridgeville Park District. (Willard playground)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Park School Mosaic Mural",
    "url": "https://farm5.staticflickr.com/4294/35812789482_f2ca4d9266_o_d.jpg",
    "lat": 42.033905,
    "lng": -87.683864,
    "website": "http://www.evanstonroundtable.com/main.asp?SectionID=16&SubSectionID=27&ArticleID=12076",
    "text": "In 2016 the staff at Evanston’s Park School, which caters specifically to kids with physical and developmental disabilities, planned and facilitated the creation of a mosaic mural in honor of a deceased colleague.  The beautiful mosaic is based on a saying that uses a box of crayons as an analogy for individual uniqueness and community strength.  It goes, “We are like a box of crayons; each one of us unique.  But when we get together, the picture is complete.” (Park School exterior)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Great Harvest Exterior Mural",
    "url": "https://farm5.staticflickr.com/4278/35405721072_fdba24273e_o_d.jpg",
    "lat": 42.064208,
    "lng": -87.703339,
    "website": "http://greatharvestevanston.com/",
    "text": "On the wall around the corner of Great Harvest Bread Co. on Central Street there is a mural depicting an Evanston beach scene.  It is a lighthearted image that reminds us how lucky we are to live next to the beautiful Lake Michigan.",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Evanston Metra Viaduct Mural", 
    "url": "https://farm5.staticflickr.com/4266/35573733945_356942141b_o_d.jpg",
    "lat": 42.064359,
    "lng": -87.698509,
    "website": "https://www.evanstonartcenter.org/sites/default/files/central_st_rfp_2017_eac_final.pdf",
    "text": "This mural was painted in 2015 as a reaction to anti-immigration graffiti that had been written on the wall.  The mural was designed and painted by two ETHS students, but was never finished.  There are current plans to cover over the existing mural with a new one by October 2017. (Central Street & Green Bay Road Viaduct)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "The Graffiti House",
    "url": "https://farm5.staticflickr.com/4229/34764759433_1f14ac51b7_o_d.jpg",
    "lat": 42.052211,
    "lng": -87.691928,
    "website": "http://www.chicagonow.com/homeward-bound-north-shore/2011/09/evanstons-landmark-painted-lady/",
    "text": "Evanston’s Graffiti House is a well known landmark.  Its funky vibrant colors jump out from the beige and white of the other houses lining Emerson Street in the heart of Evanston.  It is unclear who the talented artist is, none-the-less, we appreciate their creativity and bold statement whoever they may be. (Emerson Street)",
    "size": "small",
    "type": "noncity"
  },
  {
    "name": "Gibbs-Morrison Cultural Center Mural",
    "url": "https://farm5.staticflickr.com/4205/34732501874_40787f0dbb_o_d.jpg",
    "lat": 42.048597,
    "lng": -87.698790,
    "website": "https://dailynorthwestern.com/2016/02/07/city/new-evanston-cafe-directs-proceeds-to-feeding-homeless-hungry-populations/",
    "text": "The Gibbs-Morrison Cultural Center (formerly know as Boocco Cafe) was and continues to be an intentional positive space for teens from the high school as well as cultural events center.  The business operating inside, called First Slice, directs its proceeds to feeding Evanston’s homeless and hungry population.  On the west facing outer wall of the center there is a mural dating back to when the building housed Boocoo. (Corner of Church & Dodge)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Trust Your Heart",
    "url": "https://farm5.staticflickr.com/4216/34764751153_93f217146d_o_d.jpg",
    "lat": 42.048494,
    "lng": -87.696569,
    "website": "http://mixmastersmurals.com/section/450862-Evanston-Wall-Trust-Your-Heart.html",
    "text": "Painted in 2016 Trust Your Heart is just one of Dustin Harris and Lea Pinsky’s beautiful and vibrant murals.  The couple’s organization, called Mixed Masters Murals, has completed over 25 murals in Evanston and Chicago.  Trust Your Heart is no exception to the high quality of their pieces.  Its brightly colored pink and purple mandala and community faces bring inspiration to the old viaduct on Church Street. (Church Street between Darrow & Florence)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Electroliner",
    "url": "https://farm5.staticflickr.com/4229/35405689172_09e551873f_o_d.jpg",
    "lat": 42.047689,
    "lng": -87.683567,
    "website": "http://www.evanstonroundtable.com/main.asp?SectionID=15&SubSectionID=26&ArticleID=12795",
    "text": "Electroliner, designed by Evanstonian Jack Weiss, was installed outside the Davis Street CTA station in 2016 in honor of the 100th anniversary of the Chicago Northshore and Milwaukee Railroad that ran from 1916 to 1963.  The piece is green and red, the same color of the old Electroliners which traveled up to 100 miles per hour. (CTA station on Benson between Church & Davis)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Greenwood & Sherman Place Mural",
    "url": "https://farm5.staticflickr.com/4254/35405687502_714fb99b66_o_d.jpg",
    "lat": 42.042669,
    "lng": -87.681856,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The mural on the corner of Greenwood & Sherman Place depicts clown-like children figures frolicking in a field.  (Greenwood & Sherman Place)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Dempster Street Viaduct Mural",
    "url": "https://farm5.staticflickr.com/4263/35405685732_228aa07264_o_d.jpg",
    "lat": 42.041171,
    "lng": -87.681792,
    "website": "https://www.district65.net/Domain/10",
    "text": "The murals under the viaduct at Dempster and Sherman are deteriorating due to weathering.  At one time they were a bright and lively part of the walk down Dempster, featuring scenes including a jungle, a pond, a telephone booth, a cityscape and a rouge giraffe.  Eventually fresh new murals will take the place of these Evanston classics. (Dempster & Sherman Avenue)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Nichols Neighborhood Mural",
    "url": "https://farm5.staticflickr.com/4235/35405681922_be60cccc1f_o_d.jpg",
    "lat": 42.037557,
    "lng": -87.680963,
    "website": "http://evanstonroundtable.com/main.asp?SectionID=4&SubSectionID=4&ArticleID=12368",
    "text": "The mural beneath the viaduct on Greenleaf was first headed by Jim Parks who wanted to do a Nichols neighborhood community mural project.  Parks designed and outlined the mural and invited the neighborhood to fill in the rest.  Then in 2016 there was a restoration project lead by a girl scout to repair the piece.  (Greenleaf between Sherman & Chicago Ave)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Washington Street Viaduct Mural",
    "url": "https://farm5.staticflickr.com/4286/35443298921_5790f5532d_o_d.jpg",
    "lat": 42.032798,
    "lng": -87.679678,
    "website": "http://www.hellopose.com/",
    "text": "The 2016 mural beneath the Washington Street viaduct is wild, energetic, and vivacious.  Painted by the world famous street artist Jordan Nickel (also known as POSE), this piece brings an ecstatic pop-art vibe to the formerly drab underpass.  Nickel spent part of his childhood in Evanston and used those memories as inspiration for the mural.  (Washington Street between Custer & Chicago Ave)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Many Cultures Viaduct Mural",
    "url": "https://farm5.staticflickr.com/4286/35443296911_92640ac8a9_o_d.jpg",
    "lat": 42.031677,
    "lng": -87.679517,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The Many Cultures mural under the Madison Street viaduct is a depiction of many different world cultures with members of each culture holding hands with each other. (Madison Street between Custer & Chicago Ave)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Love Now: Our Future Belongs to All of Us",
    "url": "https://farm5.staticflickr.com/4286/35443295751_b1aceffb04_o_d.jpg",
    "lat": 42.019409,
    "lng": -87.676840,
    "website": "http://mixmastersmurals.com/section/405866-Howard-Street-Metra-Viaduct-Our-Future-Belongs-to-All-of-Us.html",
    "text": "The 2014 Howard Street viaduct mural, Love Now: Our Future Belongs to All of Us was designed and painted by the husband and wife team, Dustin Harris and Lea Pinsky.  The bright mandalas and motivational themes of their murals inspire action, hope, and positive energy in all who pass by. (Howard Street between Clyde & Chicago Ave)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Tommy Nevin’s Mural",
    "url": "https://farm5.staticflickr.com/4210/35405661292_1ed8ab22d9_o_d.jpg",
    "lat": 42.044209,
    "lng": -87.682205,
    "website": "http://www.tommynevinspubs.com/Evanston_Welcome.html",
    "text": "On the wall outside Tommy Nevin’s Pub there is a mural depicting a typical night inside the pub.  It was painted in 2009 by D.U.P. (Lake & Sherman)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Girl Scout and Brownies Mural",
    "url": "https://farm5.staticflickr.com/4253/35405658602_c1e037bb5c_o_d.jpg",
    "lat": 42.044123,
    "lng": -87.682334,
    "website": "https://www.girlscoutsgcnwi.org/",
    "text": "On the viaduct on Lake and Sherman there is a mural that was painted by the Girl Scouts and Brownies of Evanston in celebration of their community. (Lake & Sherman viaduct)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Untitled Sculpture",
    "url": "https://farm5.staticflickr.com/4211/35405707552_af43d5e112_o_d.jpg",
    "lat": 42.058387,
    "lng": -87.694044,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "This mysterious sculpture peaks out from behind some foliage on an island at the head of Ashland Avenue.  There is no name plaque or description nearby, the piece just watches over Green Bay while the world passes by. (Green Bay & Ashland)",
    "size": "small",
    "type": "noncity"
  },
  {
    "name": "Green Bay, Emerson & Ridge Viaduct Murals 1",
    "url": "https://farm5.staticflickr.com/4265/34732514654_eb19bfa3bb_o_d.jpg",
    "lat": 42.052128,
    "lng": -87.688163,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "These funky and impressive street art murals were painted by Evanston teens of their own accord, meaning they were not commissioned by anyone.  Unfortunately they have deteriorated as a result of weathering and neglect, and will soon be replaced by a Pinsky-Harris mural (Green Bay, Emerson & Ridge)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Green Bay, Emerson & Ridge Viaduct Murals 2",
    "url": "https://farm5.staticflickr.com/4214/35186556960_c090e35037_o_d.jpg",
    "lat": 42.051785,
    "lng": -87.687906,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "These funky and impressive street art murals were painted by Evanston teens of their own accord, meaning they were not commissioned by anyone.  Unfortunately they have deteriorated as a result of weathering and neglect, and will soon be replaced by a Pinsky-Harris mural (Green Bay, Emerson & Ridge)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Beth Emet Star of David Sculpture",
    "url": "https://farm5.staticflickr.com/4292/35941949906_4e8a74a48d_o_d.jpg",
    "lat": 42.041131,
    "lng": -87.688904,
    "website": "http://bethemet.org/",
    "text": "The sculpture mounted on the exterior wall of Beth Emet Reform Synagogue is a beautiful abstract interpretation of a Star of David. (Beth Emet exterior)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "Maine Street Mural",
    "url": "https://farm5.staticflickr.com/4302/35657993790_a773c2121f_o_d.jpg",
    "lat": 42.034075,
    "lng": -87.681856,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The old mural on the west wall of the Maint Street parking lot between Sherman and Custer depicts a scene that combines travel themed images including the Eiffel Tower, the Leaning Tower of Pisa and the jungle.  Although it is deteriorating the mural still brings a playful air to the plain parking lot. (Main Street parking lot between Sherman and Custer)",
    "size": "big",
    "type": "noncity"
  },
  {
    "name": "YEA Evanston Mural",
    "url": "https://farm5.staticflickr.com/4293/35657993310_d456bd8caa_o_d.jpg",
    "lat": 42.037622,
    "lng": -87.679651,
    "website": "https://www.cityofevanston.org/about-evanston/arts-and-culture",
    "text": "The fun colorful murals on the south exterior wall of the former Whole Foods on Greenleaf were painted by ETHS students in celebration of YEA (Young Evanston Artists) 25th anniversary. One is an abstract red and blue expression and the other two are playful depictions of the city, beach, and flowers. (South exterior of the former Whole Foods on Greenleaf)",
    "size": "big",
    "type": "noncity"
  }
];