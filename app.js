// ============================================================================
// QUIZ GAME - OPTIMIZED & REFACTORED
// ============================================================================

const QUESTIONS = Object.freeze([
// HISTORY & SOCIAL STUDIES
{ q: "What year did the United States declare its independence?", a: "1776" },
{ q: "Who was the first President of the United States?", a: "George Washington" },
{ q: "What was the name of the ship the Pilgrims traveled on to reach America?", a: "The Mayflower" },
{ q: "What event officially began World War I?", a: "The assassination of Archduke Franz Ferdinand" },
{ q: "Which explorer is credited with being the first to circumnavigate the globe (though he died before the journey's end)?", a: "Ferdinand Magellan" },
{ q: "What treaty ended World War I?", a: "The Treaty of Versailles" },
{ q: "Who was the leader of Great Britain during most of World War II?", a: "Winston Churchill" },
{ q: "Which Civil Rights leader delivered the 'I Have a Dream' speech?", a: "Martin Luther King Jr." },
{ q: "In what year did the United States land a man on the Moon?", a: "1969" },
{ q: "What ancient civilization built the pyramids at Giza?", a: "The Egyptians" },
{ q: "What war was fought between the North and South regions of the U.S.?", a: "The Civil War (or American Civil War)" },
{ q: "Who was the primary author of the Declaration of Independence?", a: "Thomas Jefferson" },
{ q: "What Roman emperor was the first to convert to Christianity?", a: "Constantine the Great" },
{ q: "What was the name of the route used by enslaved people to escape from the South to free states and Canada?", a: "The Underground Railroad" },
{ q: "What 1803 land deal doubled the size of the United States?", a: "The Louisiana Purchase" },
{ q: "Who invented the telephone?", a: "Alexander Graham Bell" },
{ q: "What was the name of the period in the U.S. during the 1920s when alcohol production and sale was illegal?", a: "Prohibition" },
{ q: "What is the supreme law of the land in the United States?", a: "The Constitution" },
{ q: "Which country gifted the Statue of Liberty to the United States?", a: "France" },
{ q: "What was the name of the first permanent English settlement in North America?", a: "Jamestown" },
{ q: "Which U.S. President was in office during the Great Depression and most of World War II?", a: "Franklin D. Roosevelt" },
{ q: "What famous document begins with the words, 'We the People...'?", a: "The U.S. Constitution" },
{ q: "Which ancient empire was ruled by Julius Caesar?", a: "The Roman Empire" },
{ q: "Who led the Soviet Union during World War II?", a: "Joseph Stalin" },
{ q: "What was the capital city of the Aztec Empire?", a: "Tenochtitlan" },
// SCIENCE & NATURE
{ q: "What is the chemical symbol for gold?", a: "Au" },
{ q: "What planet is closest to the Sun?", a: "Mercury" },
{ q: "What force keeps the planets in orbit around the Sun?", a: "Gravity" },
{ q: "What is the process by which plants convert light energy into chemical energy?", a: "Photosynthesis" },
{ q: "What is the hardest natural substance on Earth?", a: "Diamond" },
{ q: "How many bones are in the average adult human body?", a: "206" },
{ q: "What type of energy is stored in a battery?", a: "Chemical energy" },
{ q: "What is the name of the galaxy that contains our Solar System?", a: "The Milky Way" },
{ q: "What two elements make up most of the sun?", a: "Hydrogen and Helium" },
{ q: "What instrument is used to measure air pressure?", a: "A barometer" },
{ q: "What part of the cell is known as the 'powerhouse'?", a: "The mitochondria" },
{ q: "What causes an echo?", a: "Sound waves bouncing off a surface (reflection)" },
{ q: "What is the boiling point of water in degrees Fahrenheit?", a: "212 degrees Fahrenheit" },
{ q: "What is the common name for sodium chloride (NaCl)?", a: "Table salt" },
{ q: "What type of scientist studies earthquakes?", a: "A seismologist" },
{ q: "What organ in the human body cleans the blood?", a: "The kidneys (or liver)" },
{ q: "What is the process where a solid turns directly into a gas, bypassing the liquid state?", a: "Sublimation" },
{ q: "Which blood type is considered the universal donor?", a: "O Negative" },
{ q: "What is the name of the protective layer in the Earth's atmosphere that shields us from excessive ultraviolet radiation?", a: "The ozone layer" },
{ q: "What do you call an organism that produces its own food?", a: "An autotroph (or producer)" },
{ q: "In the water cycle, what is the process of water vapor turning back into liquid water to form clouds?", a: "Condensation" },
{ q: "What type of current does a standard wall outlet provide, AC or DC?", a: "AC (Alternating Current)" },
{ q: "What is the basic unit of all living things?", a: "The cell" },
{ q: "Which planet has the 'Great Red Spot'?", a: "Jupiter" },
{ q: "What is the chemical symbol for Oxygen?", a: "O" },
// GEOGRAPHY
{ q: "What is the capital of Australia?", a: "Canberra" },
{ q: "What is the longest river in the world?", a: "The Nile River (or Amazon, depends on definition of length vs volume)" },
{ q: "What is the highest mountain peak in the world?", a: "Mount Everest" },
{ q: "Which is the smallest continent by land area?", a: "Australia" },
{ q: "How many oceans are there in the world?", a: "Five (Atlantic, Pacific, Indian, Southern, Arctic)" },
{ q: "What is the name of the desert covering most of northern Africa?", a: "The Sahara Desert" },
{ q: "What country is shaped like a boot?", a: "Italy" },
{ q: "What is the capital of Japan?", a: "Tokyo" },
{ q: "What famous strait separates Europe from Africa by just a few miles?", a: "The Strait of Gibraltar" },
{ q: "What is the largest island in the world?", a: "Greenland" },
{ q: "Which river flows through London?", a: "The River Thames (or the Thames)" },
{ q: "What is the world's most populous country?", a: "India (or China, depending on current data)" },
{ q: "What is the name of the mountain range that runs along the western coast of South America?", a: "The Andes" },
{ q: "What large body of water separates the Arabian Peninsula from Iran?", a: "The Persian Gulf" },
{ q: "What is the capital of Canada?", a: "Ottawa" },
{ q: "What is the deepest point in the Earth's oceans?", a: "The Mariana Trench" },
{ q: "Which continent is home to the Amazon rainforest?", a: "South America" },
{ q: "What is the currency of the United Kingdom?", a: "The Pound Sterling (or just Pound)" },
{ q: "In which city would you find the Eiffel Tower?", a: "Paris" },
{ q: "What country has the largest land area?", a: "Russia" },
// LITERATURE & ARTS
{ q: "Who wrote Charlotte's Web?", a: "E.B. White" },
{ q: "What is a poem with 14 lines called?", a: "A sonnet" },
{ q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
{ q: "What is the name of the principal antagonist in the Harry Potter series?", a: "Lord Voldemort" },
{ q: "What is the name of the young girl in Alice's Adventures in Wonderland?", a: "Alice" },
{ q: "Which English playwright wrote plays like Romeo and Juliet and Hamlet?", a: "William Shakespeare" },
{ q: "What author created the characters Tom Sawyer and Huckleberry Finn?", a: "Mark Twain" },
{ q: "What art term describes the arrangement of visual elements in a painting or photograph?", a: "Composition" },
{ q: "What is the title of the first book in C.S. Lewis's Chronicles of Narnia series?", a: "The Lion, the Witch and the Wardrobe" },
{ q: "What author wrote The Cat in the Hat and Green Eggs and Ham?", a: "Dr. Seuss (Theodor Geisel)" },
{ q: "What type of book is a story that has a moral or lesson, often with animals as characters?", a: "A fable" },
{ q: "What is the name of the art museum in New York City known for its spiraling ramp design?", a: "The Guggenheim Museum" },
{ q: "Which novel begins with the line, 'Call me Ishmael.'?", a: "Moby Dick" },
{ q: "Who composed famous pieces like 'Symphony No. 5' and 'Für Elise'?", a: "Ludwig van Beethoven" },
{ q: "What is the name of the famous street in London where Sherlock Holmes lived?", a: "Baker Street (221B Baker Street)" },
{ q: "What literary device is the use of words that imitate sounds (e.g., buzz, meow, bang)?", a: "Onomatopoeia" },
{ q: "What artist cut off part of his own ear?", a: "Vincent van Gogh" },
{ q: "Which of the Brontë sisters wrote Jane Eyre?", a: "Charlotte Brontë" },
{ q: "What author wrote The Lord of the Rings trilogy?", a: "J.R.R. Tolkien" },
{ q: "What is the term for a story where characters and events are symbols for ideas about human life?", a: "An allegory" },
// MATH & LOGIC
{ q: "What is the square root of 81?", a: "9" },
{ q: "What is the value of Pi (rounded to two decimal places)?", a: "3.14" },
{ q: "What is the name for an angle that measures exactly 90 degrees?", a: "A right angle" },
{ q: "How many sides does a hexagon have?", a: "6" },
{ q: "What is the next number in the sequence: 2, 4, 8, 16, ...?", a: "32" },
{ q: "What is the formula for the area of a rectangle?", a: "Length times width (l x w)" },
{ q: "How many millimeters are in one centimeter?", a: "10" },
{ q: "What is 25% as a fraction in its lowest terms?", a: "1/4" },
{ q: "What number is neither positive nor negative?", a: "Zero" },
{ q: "What is the sum of the angles in a triangle?", a: "180 degrees" },
{ q: "What is the mathematical term for a number that can only be divided by 1 and itself?", a: "A prime number" },
{ q: "How many feet are in a mile?", a: "5280" },
{ q: "What is the median of this data set: 1, 3, 3, 6, 8, 10, 12?", a: "6" },
{ q: "If a circle has a radius of 4, what is its diameter?", a: "8" },
{ q: "What type of number is 0.333... (with the 3 repeating forever)?", a: "A rational number (or fraction 1/3)" },
// KENTUCKY-SPECIFIC QUESTIONS
{ q: "What is the capital city of Kentucky?", a: "Frankfort" },
{ q: "What major industry is Kentucky most famous for producing, besides horses?", a: "Bourbon whiskey" },
{ q: "What is the official state nickname of Kentucky?", a: "The Bluegrass State" },
{ q: "Which famous horse race is held annually at Churchill Downs in Louisville, Kentucky?", a: "The Kentucky Derby" },
{ q: "What major river forms Kentucky's northern border?", a: "The Ohio River" },
{ q: "What famous Kentuckian was the 16th U.S. President?", a: "Abraham Lincoln" },
{ q: "What natural landmark in Kentucky is the longest known cave system in the world?", a: "Mammoth Cave National Park" },
{ q: "What famous type of chicken dish originated in Kentucky?", a: "Kentucky Fried Chicken (KFC)" },
{ q: "What are the two major public universities in Kentucky known for their basketball rivalry?", a: "University of Kentucky and University of Louisville (UK and UofL)" },
{ q: "Who was the first governor of Kentucky?", a: "Isaac Shelby" },
{ q: "In what year did Kentucky become the 15th U.S. state?", a: "1792" },
{ q: "What is the state bird of Kentucky?", a: "The Northern Cardinal" },
{ q: "What famous frontiersman and explorer is a major figure in Kentucky history?", a: "Daniel Boone" },
{ q: "What famous type of pie is a popular dessert in Kentucky, often associated with the Kentucky Derby?", a: "Derby Pie" },
{ q: "What is the state tree of Kentucky?", a: "The Tulip Poplar" },


  // GEOGRAPHY - 40 Questions
  { q: "What is the capital of France?", a: "Paris" },
  { q: "Which country is home to the kangaroo?", a: "Australia" },
  { q: "What is the capital of Brazil?", a: "Brasília" },
  { q: "The Great Wall of China is located in which country?", a: "China" },
  { q: "What is the capital of Japan?", a: "Tokyo" },
  { q: "What is the capital of Germany?", a: "Berlin" },
  { q: "What is the capital of Canada?", a: "Ottawa" },
  { q: "What is the capital of Italy?", a: "Rome" },
  { q: "What is the capital of Spain?", a: "Madrid" },
  { q: "What is the capital of Australia?", a: "Canberra" },
  { q: "What is the capital of Mexico?", a: "Mexico City" },
  { q: "What is the capital of India?", a: "New Delhi" },
  { q: "What is the capital of South Africa?", a: "Pretoria" },
  { q: "What is the capital of Greece?", a: "Athens" },
  { q: "What is the capital of Portugal?", a: "Lisbon" },
  { q: "What is the capital of Thailand?", a: "Bangkok" },
  { q: "What is the capital of Argentina?", a: "Buenos Aires" },
  { q: "What is the capital of Turkey?", a: "Ankara" },
  { q: "What is the capital of Sweden?", a: "Stockholm" },
  { q: "What is the capital of Norway?", a: "Oslo" },
  { q: "What is the capital of Netherlands?", a: "Amsterdam" },
  { q: "What is the capital of Ireland?", a: "Dublin" },
  { q: "What is the capital of Chile?", a: "Santiago" },
  { q: "What is the capital of Egypt?", a: "Cairo" },
  { q: "What is the largest ocean on Earth?", a: "Pacific Ocean" },
  { q: "What is the largest continent?", a: "Asia" },
  { q: "What is the largest river in the world?", a: "Nile River" },
  { q: "What is the longest river in Africa?", a: "Nile River" },
  { q: "What is the largest desert in the world?", a: "Antarctica" },
  { q: "What is the smallest country in the world?", a: "Vatican City" },
  { q: "What is the smallest state in the USA?", a: "Rhode Island" },
  { q: "How many continents are there?", a: "7" },
  { q: "What is the highest mountain in the world?", a: "Mount Everest" },
  { q: "What is the deepest ocean trench?", a: "Mariana Trench" },
  { q: "The largest mountain range in North America is called what?", a: "Rocky Mountains" },
  { q: "What is the largest country in the world by area?", a: "Russia" },
  { q: "Which country has the most populated city in the world?", a: "India" },
  { q: "What is the most populated country in the world?", a: "India" },
  { q: "Which European capital is located on the Danube River?", a: "Budapest" },
  { q: "What is the capital of Scotland?", a: "Edinburgh" },

  // SCIENCE & NATURE - 45 Questions
  { q: "The process by which plants use sunlight to make food is called?", a: "photosynthesis" },
  { q: "What is the chemical symbol for gold?", a: "Au" },
  { q: "What is the boiling point of water?", a: "100 degrees Celsius" },
  { q: "What is the freezing point of water?", a: "0 degrees Celsius" },
  { q: "How many bones are in the human body?", a: "206" },
  { q: "What is the smallest bone in the human body?", a: "Stapes" },
  { q: "How many legs does a spider have?", a: "8" },
  { q: "What is the largest mammal in the world?", a: "Blue whale" },
  { q: "What is the fastest land animal?", a: "Cheetah" },
  { q: "This large mammal is known as the king of the jungle and has a mane.", a: "lion" },
  { q: "What is the speed of light?", a: "299,792,458 meters per second" },
  { q: "What is the most abundant element in the universe?", a: "Hydrogen" },
  { q: "How many seconds are in a minute?", a: "60" },
  { q: "How many minutes are in a day?", a: "1440" },
  { q: "How many hours are in a day?", a: "24" },
  { q: "How many weeks are in a year?", a: "52" },
  { q: "How many days are in a leap year?", a: "366" },
  { q: "What is the brightest star in the night sky?", a: "Sirius" },
  { q: "Which planet is known as the Red Planet?", a: "Mars" },
  { q: "What is the hottest planet in our solar system?", a: "Venus" },
  { q: "What is the smallest planet in our solar system?", a: "Mercury" },
  { q: "How many planets are in our solar system?", a: "8" },
  { q: "What is the second largest planet in our solar system?", a: "Saturn" },
  { q: "How many strings does a violin have?", a: "4" },
  { q: "How many strings does a guitar have?", a: "6" },
  { q: "How many legs does a butterfly have?", a: "6" },
  { q: "How many chambers does a heart have?", a: "4" },
  { q: "What gas do plants absorb from the atmosphere?", a: "Carbon dioxide" },
  { q: "What gas do plants release into the atmosphere?", a: "Oxygen" },
  { q: "How many sides does a hexagon have?", a: "6" },
  { q: "How many sides does a pentagon have?", a: "5" },
  { q: "How many sides does a triangle have?", a: "3" },
  { q: "How many wheels does a bicycle have?", a: "2" },
  { q: "How many colors are in the rainbow?", a: "7" },
  { q: "How many ounces are in a pound?", a: "16" },
  { q: "How many grams are in a kilogram?", a: "1000" },
  { q: "How many centimeters are in a meter?", a: "100" },
  { q: "How many millimeters are in a centimeter?", a: "10" },
  { q: "Who discovered the electron?", a: "J.J. Thomson" },
  { q: "Who discovered X-rays?", a: "Wilhelm Röntgen" },
  { q: "Who is credited with discovering penicillin?", a: "Alexander Fleming" },
  { q: "Who discovered the theory of evolution?", a: "Charles Darwin" },
  { q: "Who invented the lightbulb?", a: "Thomas Edison" },
  { q: "Who invented the telephone?", a: "Alexander Graham Bell" },
  { q: "Who invented the airplane?", a: "Wright brothers" },
  { q: "Who invented the microscope?", a: "Zacharias Janssen" },

  // LITERATURE & ARTS - 50 Questions
  { q: "Who wrote Romeo and Juliet?", a: "William Shakespeare" },
  { q: "Who wrote Hamlet?", a: "William Shakespeare" },
  { q: "Who wrote Pride and Prejudice?", a: "Jane Austen" },
  { q: "Who wrote Moby Dick?", a: "Herman Melville" },
  { q: "Who wrote 1984?", a: "George Orwell" },
  { q: "Who wrote Dracula?", a: "Bram Stoker" },
  { q: "Who wrote Wuthering Heights?", a: "Emily Brontë" },
  { q: "Who wrote The Picture of Dorian Gray?", a: "Oscar Wilde" },
  { q: "Who wrote the Harry Potter series?", a: "J.K. Rowling" },
  { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
  { q: "Who painted Starry Night?", a: "Vincent van Gogh" },
  { q: "Who painted The Night Watch?", a: "Rembrandt" },
  { q: "Who composed the 1812 Overture?", a: "Pyotr Ilyich Tchaikovsky" },
  { q: "In mathematics, the value of pi rounded to two decimals is?", a: "3.14" },
  { q: "Who wrote Crime and Punishment?", a: "Fyodor Dostoevsky" },
  { q: "Who wrote Jane Eyre?", a: "Charlotte Brontë" },
  { q: "Who wrote Anna Karenina?", a: "Leo Tolstoy" },
  { q: "Who wrote The Great Gatsby?", a: "F. Scott Fitzgerald" },
  { q: "Who wrote To Kill a Mockingbird?", a: "Harper Lee" },
  { q: "Who wrote The Catcher in the Rye?", a: "J.D. Salinger" },
  { q: "Who wrote Brave New World?", a: "Aldous Huxley" },
  { q: "Who wrote The Lord of the Rings?", a: "J.R.R. Tolkien" },
  { q: "Who wrote The Hobbit?", a: "J.R.R. Tolkien" },
  { q: "Who wrote The Chronicles of Narnia?", a: "C.S. Lewis" },
  { q: "Who wrote Alice in Wonderland?", a: "Lewis Carroll" },
  { q: "Who wrote Oliver Twist?", a: "Charles Dickens" },
  { q: "Who wrote David Copperfield?", a: "Charles Dickens" },
  { q: "Who wrote A Tale of Two Cities?", a: "Charles Dickens" },
  { q: "Who wrote The Odyssey?", a: "Homer" },
  { q: "Who wrote The Iliad?", a: "Homer" },
  { q: "Who wrote Don Quixote?", a: "Miguel de Cervantes" },
  { q: "Who wrote Invisible Man?", a: "Ralph Ellison" },
  { q: "Who wrote The Grapes of Wrath?", a: "John Steinbeck" },
  { q: "Who wrote One Hundred Years of Solitude?", a: "Gabriel García Márquez" },
  { q: "Who wrote The Metamorphosis?", a: "Franz Kafka" },
  { q: "Who wrote Crime and Punishment?", a: "Fyodor Dostoevsky" },
  { q: "Who wrote Madame Bovary?", a: "Gustave Flaubert" },
  { q: "Who wrote The Brothers Karamazov?", a: "Fyodor Dostoevsky" },
  { q: "Who created the character Sherlock Holmes?", a: "Arthur Conan Doyle" },
  { q: "Who wrote The Phantom of the Opera?", a: "Gaston Leroux" },
  { q: "Who painted The Persistence of Memory?", a: "Salvador Dalí" },
  { q: "Who sculpted David?", a: "Michelangelo" },
  { q: "Who painted The Birth of Venus?", a: "Sandro Botticelli" },
  { q: "Who painted Girl with a Pearl Earring?", a: "Johannes Vermeer" },
  { q: "Who wrote Frankenstein?", a: "Mary Shelley" },
  { q: "Who wrote The Strange Case of Dr. Jekyll and Mr. Hyde?", a: "Robert Louis Stevenson" },
  { q: "Who wrote Gulliver's Travels?", a: "Jonathan Swift" },
  { q: "Who wrote Robinson Crusoe?", a: "Daniel Defoe" },
  { q: "Who wrote Paradise Lost?", a: "John Milton" },
  { q: "Who wrote The Divine Comedy?", a: "Dante Alighieri" },

  // HISTORY - 50 Questions
  { q: "In what year did the Titanic sink?", a: "1912" },
  { q: "Who discovered America?", a: "Christopher Columbus" },
  { q: "In what year was the Declaration of Independence signed?", a: "1776" },
  { q: "Who was the first President of the United States?", a: "George Washington" },
  { q: "In what year did World War I start?", a: "1914" },
  { q: "In what year did World War II start?", a: "1939" },
  { q: "In what year did World War II end?", a: "1945" },
  { q: "Who was the first man to walk on the moon?", a: "Neil Armstrong" },
  { q: "In what year did the moon landing occur?", a: "1969" },
  { q: "Who wrote the Constitution of the United States?", a: "Founding Fathers" },
  { q: "In what year did the Berlin Wall fall?", a: "1989" },
  { q: "Who was the first President of Russia?", a: "Boris Yeltsin" },
  { q: "In what year did the Soviet Union collapse?", a: "1991" },
  { q: "Who was the first President of India?", a: "Rajendra Prasad" },
  { q: "In what year was India's Independence?", a: "1947" },
  { q: "Who was the first Prime Minister of India?", a: "Jawaharlal Nehru" },
  { q: "In what year did the French Revolution begin?", a: "1789" },
  { q: "Who was Marie Antoinette?", a: "Queen of France" },
  { q: "Who was Napoleon Bonaparte?", a: "French military leader and Emperor" },
  { q: "In what year was the Magna Carta signed?", a: "1215" },
  { q: "Who was Julius Caesar?", a: "Roman military general and statesman" },
  { q: "In what year did Julius Caesar die?", a: "44 BC" },
  { q: "Who was Cleopatra?", a: "Queen of Egypt" },
  { q: "In what year did the Great Fire of London occur?", a: "1666" },
  { q: "Who was Leonardo da Vinci?", a: "Renaissance artist and inventor" },
  { q: "Who was Michelangelo?", a: "Renaissance artist and sculptor" },
  { q: "Who was Vincent van Gogh?", a: "Post-Impressionist painter" },
  { q: "Who was Pablo Picasso?", a: "Modernist artist" },
  { q: "Who was Thomas Jefferson?", a: "Third President of the United States" },
  { q: "Who was Benjamin Franklin?", a: "Founding Father of the United States" },
  { q: "Who was Abraham Lincoln?", a: "Sixteenth President of the United States" },
  { q: "In what year was the Declaration of Independence written?", a: "1776" },
  { q: "Who wrote the Declaration of Independence?", a: "Thomas Jefferson" },
  { q: "In what year did the American Civil War start?", a: "1861" },
  { q: "In what year did the American Civil War end?", a: "1865" },
  { q: "Who was the leader of the Soviet Union during WWII?", a: "Joseph Stalin" },
  { q: "Who was the leader of Nazi Germany?", a: "Adolf Hitler" },
  { q: "Who was the Prime Minister of Britain during WWII?", a: "Winston Churchill" },
  { q: "Who was the President of the United States during WWII?", a: "Franklin D. Roosevelt" },
  { q: "In what year did the Cold War end?", a: "1991" },
  { q: "Who was the first President of the United States to resign?", a: "Richard Nixon" },
  { q: "In what year did Richard Nixon resign?", a: "1974" },
  { q: "Who was the first female Prime Minister of the United Kingdom?", a: "Margaret Thatcher" },
  { q: "In what year did the 9/11 attacks occur?", a: "2001" },
  { q: "In what year did the Vietnam War end?", a: "1975" },
  { q: "In what year did the Korean War begin?", a: "1950" },
  { q: "In what year did the Cuban Missile Crisis occur?", a: "1962" },
  { q: "Who was Martin Luther King Jr.?", a: "Civil rights activist" },
  { q: "In what year was Martin Luther King Jr. assassinated?", a: "1968" },
  { q: "Who was Malcolm X?", a: "Civil rights activist" },

  // MATHEMATICS - 30 Questions
  { q: "What is 2 + 2?", a: "4" },
  { q: "What is 10 × 5?", a: "50" },
  { q: "What is 100 ÷ 4?", a: "25" },
  { q: "What is the square root of 16?", a: "4" },
  { q: "What is the square root of 144?", a: "12" },
  { q: "What is 2 to the power of 3?", a: "8" },
  { q: "What is 5 to the power of 2?", a: "25" },
  { q: "What is 10 to the power of 3?", a: "1000" },
  { q: "What is the value of pi rounded to two decimal places?", a: "3.14" },
  { q: "How many sides does a circle have?", a: "0" },
  { q: "What is the area formula for a rectangle?", a: "length times width" },
  { q: "What is the area formula for a circle?", a: "pi r squared" },
  { q: "What is the Pythagorean theorem?", a: "a squared plus b squared equals c squared" },
  { q: "What is the sum of angles in a triangle?", a: "180 degrees" },
  { q: "What is the sum of angles in a quadrilateral?", a: "360 degrees" },
  { q: "What is 7 × 8?", a: "56" },
  { q: "What is 12 × 12?", a: "144" },
  { q: "What is 15 × 4?", a: "60" },
  { q: "What is 100 - 37?", a: "63" },
  { q: "What is 99 ÷ 3?", a: "33" },
  { q: "What is the square root of 25?", a: "5" },
  { q: "What is the square root of 64?", a: "8" },
  { q: "What is the square root of 100?", a: "10" },
  { q: "What is 3 to the power of 4?", a: "81" },
  { q: "What is 2 to the power of 8?", a: "256" },
  { q: "What is the value of zero factorial?", a: "1" },
  { q: "What is the value of 5 factorial?", a: "120" },
  { q: "How many degrees are in a circle?", a: "360" },
  { q: "What is the circumference formula for a circle?", a: "2 pi r" },
  { q: "What is the perimeter formula for a square?", a: "4 times the side length" },

  // MEDICINE & HUMAN BODY - 35 Questions
  { q: "How many chambers does a human heart have?", a: "4" },
  { q: "How many lungs does a human have?", a: "2" },
  { q: "How many kidneys does a human have?", a: "2" },
  { q: "How many teeth does an adult human have?", a: "32" },
  { q: "What is the largest organ in the human body?", a: "Skin" },
  { q: "What is the smallest bone in the human body?", a: "Stapes" },
  { q: "How many bones are in the human body?", a: "206" },
  { q: "What is the main function of the heart?", a: "Pump blood" },
  { q: "What is the main function of the lungs?", a: "Exchange oxygen and carbon dioxide" },
  { q: "What is the main function of the brain?", a: "Control body functions and cognition" },
  { q: "What is the main function of the kidneys?", a: "Filter waste from blood" },
  { q: "What is the main function of the liver?", a: "Detoxify substances and aid digestion" },
  { q: "What is the main function of the stomach?", a: "Break down food" },
  { q: "What is the main function of the small intestine?", a: "Absorb nutrients" },
  { q: "What is the main function of the large intestine?", a: "Absorb water" },
  { q: "What type of blood cells fight infections?", a: "White blood cells" },
  { q: "What type of blood cells carry oxygen?", a: "Red blood cells" },
  { q: "What is the normal human body temperature in Celsius?", a: "37" },
  { q: "What is the normal human body temperature in Fahrenheit?", a: "98.6" },
  { q: "How many times does a human heart beat per minute on average?", a: "70" },
  { q: "How many times do humans breathe per minute on average?", a: "12 to 20" },
  { q: "What is the largest muscle in the human body?", a: "Gluteus maximus" },
  { q: "What is the longest bone in the human body?", a: "Femur" },
  { q: "What system controls body functions through chemical messengers?", a: "Endocrine system" },
  { q: "What system transports nutrients and oxygen throughout the body?", a: "Circulatory system" },
  { q: "What system breaks down food into absorbable molecules?", a: "Digestive system" },
  { q: "What system allows us to move and maintain posture?", a: "Muscular system" },
  { q: "What is the most common blood type?", a: "O positive" },
  { q: "What is the rarest blood type?", a: "RhD negative" },
  { q: "What vitamin is produced by the skin when exposed to sunlight?", a: "Vitamin D" },
  { q: "What mineral is essential for strong bones and teeth?", a: "Calcium" },
  { q: "What mineral is essential for red blood cells?", a: "Iron" },
  { q: "What vitamin is essential for vision?", a: "Vitamin A" },
  { q: "What is the role of antibodies in the immune system?", a: "Fight pathogens" },
  { q: "What is the role of vaccines in the immune system?", a: "Prepare immune system for disease" },

  // CHEMISTRY - 25 Questions
  { q: "What is the chemical symbol for gold?", a: "Au" },
  { q: "What is the chemical symbol for silver?", a: "Ag" },
  { q: "What is the chemical symbol for copper?", a: "Cu" },
  { q: "What is the chemical symbol for iron?", a: "Fe" },
  { q: "What is the chemical symbol for oxygen?", a: "O" },
  { q: "What is the chemical symbol for hydrogen?", a: "H" },
  { q: "What is the chemical symbol for carbon?", a: "C" },
  { q: "What is the chemical symbol for nitrogen?", a: "N" },
  { q: "What is the atomic number of hydrogen?", a: "1" },
  { q: "What is the atomic number of carbon?", a: "6" },
  { q: "What is the atomic number of oxygen?", a: "8" },
  { q: "What is the atomic number of iron?", a: "26" },
  { q: "What is the atomic number of gold?", a: "79" },
  { q: "What are the three states of matter?", a: "Solid, liquid, and gas" },
  { q: "What is the pH scale range?", a: "0 to 14" },
  { q: "What pH indicates a neutral solution?", a: "7" },
  { q: "What happens when acids and bases mix?", a: "Neutralization" },
  { q: "What is the formula for water?", a: "H2O" },
  { q: "What is the formula for salt?", a: "NaCl" },
  { q: "What is the formula for carbon dioxide?", a: "CO2" },
  { q: "What is the formula for methane?", a: "CH4" },
  { q: "What is the most abundant element in the Earth's atmosphere?", a: "Nitrogen" },
  { q: "What is the second most abundant element in the Earth's atmosphere?", a: "Oxygen" },
  { q: "What is the most abundant element in the universe?", a: "Hydrogen" },
  { q: "What is combustion?", a: "A chemical reaction with oxygen that releases heat and light" },

  // SPORTS - 25 Questions
  { q: "How many players are on a soccer team?", a: "11" },
  { q: "How many players are on a basketball team on the court?", a: "5" },
  { q: "How many players are on a baseball team on the field?", a: "9" },
  { q: "How many players are on an American football team on the field?", a: "11" },
  { q: "How many periods are in a hockey game?", a: "3" },
  { q: "How long is a soccer match?", a: "90 minutes" },
  { q: "How many sets are in a tennis match?", a: "3 or 5" },
  { q: "What is the maximum score in bowling?", a: "300" },
  { q: "How many holes are on a standard golf course?", a: "18" },
  { q: "How many lanes are on a standard swimming pool for Olympic events?", a: "8" },
  { q: "What is the distance of a marathon?", a: "42.195 kilometers" },
  { q: "How many rounds are in a professional boxing match?", a: "12" },
  { q: "How many poles are on a tennis court?", a: "4" },
  { q: "What is the highest rank in judo?", a: "10th dan" },
  { q: "How many points is a touchdown worth in American football?", a: "6" },
  { q: "How many points is a field goal worth in American football?", a: "3" },
  { q: "How many points is a basket worth in basketball?", a: "2 or 3" },
  { q: "How many points is a goal worth in soccer?", a: "1" },
  { q: "What is the diameter of a basketball hoop in inches?", a: "18" },
  { q: "What is the height of a basketball hoop in feet?", a: "10" },
  { q: "What is the height of a volleyball net in feet for men?", a: "7.42" },
  { q: "How many innings are in a baseball game?", a: "9" },
  { q: "What is the distance between bases in baseball in feet?", a: "90" },
  { q: "How many Olympic rings are there?", a: "5" },
  { q: "What do the five Olympic rings represent?", a: "Five continents" },

  // MUSIC - 20 Questions
  { q: "How many strings does a violin have?", a: "4" },
  { q: "How many strings does a guitar have?", a: "6" },
  { q: "How many strings does a cello have?", a: "4" },
  { q: "How many strings does a piano have?", a: "88" },
  { q: "How many keys does a standard piano have?", a: "88" },
  { q: "Who composed Symphony No. 5?", a: "Ludwig van Beethoven" },
  { q: "Who composed Fur Elise?", a: "Ludwig van Beethoven" },
  { q: "Who composed The Four Seasons?", a: "Antonio Vivaldi" },
  { q: "Who composed Water Music?", a: "George Frideric Handel" },
  { q: "Who wrote the national anthem of the USA?", a: "Francis Scott Key" },
  { q: "What is the fastest musical tempo?", a: "Presto" },
  { q: "What is the slowest musical tempo?", a: "Largo" },
  { q: "How many sharps are in the key of G major?", a: "1" },
  { q: "How many flats are in the key of F major?", a: "1" },
  { q: "What is the musical note between E and G?", a: "F sharp or G flat" },
  { q: "How many beats are in a whole note in common time?", a: "4" },
  { q: "How many beats are in a half note in common time?", a: "2" },
  { q: "How many beats are in a quarter note in common time?", a: "1" },
  { q: "What instrument family does the violin belong to?", a: "String" },
  { q: "What instrument family does the flute belong to?", a: "Woodwind" },

  // KENTUCKY GEOGRAPHY - 20 Questions
  { q: "What is the capital of Kentucky?", a: "Frankfort" },
  { q: "What is the largest city in Kentucky?", a: "Louisville" },
  { q: "On which river is Louisville located?", a: "Ohio River" },
  { q: "How many counties are in Kentucky?", a: "120" },
  { q: "What is the highest point in Kentucky?", a: "Black Mountain" },
  { q: "What region of Kentucky is known for coal mining?", a: "Eastern Kentucky or Appalachia" },
  { q: "What is the famous natural arch in Kentucky?", a: "Natural Bridge" },
  { q: "What is Mammoth Cave known for?", a: "Longest cave system in the world" },
  { q: "In which county is Mammoth Cave located?", a: "Edmonson County" },
  { q: "What is Fort Knox famous for?", a: "United States gold depository" },
  { q: "What is the Kentucky Derby?", a: "Annual horse race held at Churchill Downs" },
  { q: "At which track is the Kentucky Derby held?", a: "Churchill Downs" },
  { q: "In which city is Churchill Downs located?", a: "Louisville" },
  { q: "What is the state flower of Kentucky?", a: "Goldenrod" },
  { q: "What is the state bird of Kentucky?", a: "Northern Cardinal" },
  { q: "What river forms the border between Kentucky and Ohio?", a: "Ohio River" },
  { q: "What major lake is in Kentucky?", a: "Lake Cumberland" },
  { q: "What is the state nickname for Kentucky?", a: "Bluegrass State" },
  { q: "Which mountains dominate Eastern Kentucky?", a: "Appalachian Mountains" },
  { q: "What college town in Kentucky is home to the University of Kentucky?", a: "Lexington" },

  // KENTUCKY POLITICS & HISTORY - 20 Questions
  { q: "What famous document was signed at Fort Knox?", a: "Fort Knox Depository agreement" },
  { q: "Who was the longest-serving United States Senator from Kentucky?", a: "Mitch McConnell" },
  { q: "How many terms has Mitch McConnell served in the Senate?", a: "7 or 8" },
  { q: "Who is the current Governor of Kentucky as of 2024?", a: "Andy Beshear" },
  { q: "What party does Mitch McConnell belong to?", a: "Republican" },
  { q: "What party does Andy Beshear belong to?", a: "Democratic" },
  { q: "What was Kentucky's role in the American Civil War?", a: "Border state" },
  { q: "When did Kentucky become a state?", a: "1792" },
  { q: "What state was Kentucky originally part of?", a: "Virginia" },
  { q: "Who founded Kentucky?", a: "Daniel Boone and other pioneers" },
  { q: "What was the Wilderness Road?", a: "A pioneer route through Cumberland Gap to Kentucky" },
  { q: "What is the Cumberland Gap?", a: "Mountain pass between Kentucky, Virginia, and Tennessee" },
  { q: "In what year did Daniel Boone reach Kentucky?", a: "1769" },
  { q: "What is Fort Boonesborough?", a: "A fort established by Daniel Boone in Kentucky" },
  { q: "How many US Presidents were born in Kentucky?", a: "2" },
  { q: "Name one US President born in Kentucky.", a: "Abraham Lincoln or Zachary Taylor" },
  { q: "Who was Kentucky's first Governor?", a: "Isaac Shelby" },
  { q: "What is Transylvania University in Kentucky known for?", a: "One of the oldest universities west of the Appalachian Mountains" },
  { q: "In which Kentucky city is Transylvania University located?", a: "Lexington" },
  { q: "What university in Kentucky was founded in 1780?", a: "Transylvania University" },

  // KENTUCKY NOTABLE PEOPLE - 20 Questions
  { q: "Who was born in Hodgenville, Kentucky in 1809?", a: "Abraham Lincoln" },
  { q: "Who was the famous Kentucky frontiersman known for the raccoon skin cap?", a: "Davy Crockett" },
  { q: "Who was the famous Kentucky distiller and inventor of bourbon whiskey?", a: "Elijah Craig" },
  { q: "What boxer was born in Louisville, Kentucky?", a: "Muhammad Ali" },
  { q: "What is Muhammad Ali's birth name?", a: "Cassius Clay" },
  { q: "Who was the famous Kentucky abolitionist and preacher?", a: "Henry Ward Beecher" },
  { q: "Who was the famous Kentucky writer and novelist?", a: "Robert Penn Warren" },
  { q: "Who wrote the poem that inspired the song 'My Old Kentucky Home'?", a: "Stephen Foster" },
  { q: "What famous country musician was born in Muhlenberg County, Kentucky?", a: "Loretta Lynn" },
  { q: "What jazz musician was born in Maysville, Kentucky?", a: "Rosemary Clooney" },
  { q: "Who was the famous Kentucky fried chicken entrepreneur?", a: "Colonel Sanders" },
  { q: "What is Colonel Sanders' real name?", a: "Harland David Sanders" },
  { q: "Who was the famous Kentucky horse racing legend and trainer?", a: "Calumet Farm owners" },
  { q: "Who was the famous founder of Shakertown in Kentucky?", a: "The Shakers" },
  { q: "What is Fort Boonesborough named after?", a: "Daniel Boone" },
  { q: "Who was Mary Todd?", a: "Wife of Abraham Lincoln" },
]);

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  POST_REVEAL_DURATION: 5000, // ms to allow buzzing after last word
  BUZZ_REVEAL_DELAY: 1000, // ms to show correct answer after buzz
  DEFAULT_WORD_DELAY: 500, // ms between word reveals
  MIN_WORD_DELAY: 50, // minimum ms between word reveals
};

// ============================================================================
// UI ELEMENT CACHE
// ============================================================================

const UI = {
  word: document.getElementById("word"),
  startBtn: document.getElementById("startBtn"),
  buzz1: document.getElementById("buzz1"),
  buzz2: document.getElementById("buzz2"),
  buzzInfo: document.getElementById("buzzInfo"),
  buzzText: document.getElementById("buzzText"),
  buzzCountdown: document.getElementById("buzzCountdown"),
  revealArea: document.getElementById("revealArea"),
  markCorrect: document.getElementById("markCorrect"),
  score1: document.getElementById("score1"),
  score2: document.getElementById("score2"),
  wordDelayInput: document.getElementById("wordDelay"),
  revealDelayInput: document.getElementById("revealDelay"),
  questionList: document.getElementById("questionList"),
  progress: document.getElementById("progress"),
};

// ============================================================================
// GAME STATE
// ============================================================================

class GameState {
  constructor() {
    this.currentIndex = -1;
    this.currentWords = [];
    this.wordPos = 0;
    this.buzzingPlayer = null;
    this.scores = { p1: 0, p2: 0 };
    this.allowBuzz = false;
    this.isRevealing = false;
  }

  resetForNewQuestion() {
    this.currentIndex = Math.floor(Math.random() * QUESTIONS.length);
    this.currentWords = QUESTIONS[this.currentIndex].q.split(/\s+/);
    this.wordPos = 0;
    this.buzzingPlayer = null;
    this.allowBuzz = false;
    this.isRevealing = true;
  }

  recordScore(player) {
    const key = player === 1 ? "p1" : "p2";
    this.scores[key] += 1;
  }
}

const state = new GameState();

// ============================================================================
// TIMER MANAGEMENT
// ============================================================================

class TimerManager {
  constructor() {
    this.timers = {};
  }

  set(key, callback, delay) {
    this.clear(key);
    this.timers[key] = setTimeout(callback, delay);
  }

  setInterval(key, callback, delay) {
    this.clear(key);
    this.timers[key] = setInterval(callback, delay);
  }

  clear(key) {
    if (this.timers[key]) {
      const isInterval = typeof this.timers[key] === 'object' && 
      this.timers[key]._repeat !== undefined;
      if (isInterval) {
        clearInterval(this.timers[key]);
      } else {
        clearTimeout(this.timers[key]);
      }
      delete this.timers[key];
    }
  }

  clearAll() {
    Object.keys(this.timers).forEach(key => this.clear(key));
  }
}

const timers = new TimerManager();

// ============================================================================
// UI HELPER FUNCTIONS
// ============================================================================

function setButtonsEnabled(buttons, enabled) {
  buttons.forEach(btn => btn.disabled = !enabled);
}

function toggleHidden(element, hidden) {
  if (hidden) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
}

function updateDisplay(element, text) {
  element.textContent = text;
}

// ============================================================================
// RENDERING
// ============================================================================

function renderQuestionList() {
  UI.questionList.innerHTML = "";
  QUESTIONS.forEach(qq => {
    const li = document.createElement("li");
    li.textContent = `${qq.q} — ${qq.a}`;
    UI.questionList.appendChild(li);
  });
}

function updateScoresUI() {
  updateDisplay(UI.score1, state.scores.p1);
  updateDisplay(UI.score2, state.scores.p2);
}

// ============================================================================
// WORD REVEAL LOGIC
// ============================================================================

function revealNextWord() {
  if (state.wordPos >= state.currentWords.length) {
    stopWordReveal();
    startPostRevealCountdown();
    return;
  }

  const word = state.currentWords[state.wordPos++];
  updateDisplay(UI.word, word);

  if (state.wordPos >= 1) {
    state.allowBuzz = true;
    setButtonsEnabled([UI.buzz1, UI.buzz2], true);
  }
}

function stopWordReveal() {
  timers.clear("wordReveal");
  state.isRevealing = false;
}

// ============================================================================
// POST-REVEAL COUNTDOWN (after all words shown)
// ============================================================================

function startPostRevealCountdown() {
  state.allowBuzz = true;
  setButtonsEnabled([UI.buzz1, UI.buzz2], true);

  let remaining = CONFIG.POST_REVEAL_DURATION;

  const updateCountdown = () => {
    updateDisplay(UI.word, `${Math.ceil(remaining / 1000)}s`);
  };

  updateCountdown();
  timers.setInterval("postRevealInterval", () => {
    remaining -= 200;
    updateCountdown();
  }, 200);

  timers.set("postRevealTimeout", () => {
    cancelPostRevealCountdown();
    state.allowBuzz = false;
    setButtonsEnabled([UI.buzz1, UI.buzz2], false);
    showCorrectAnswer();
  }, CONFIG.POST_REVEAL_DURATION);
}

function cancelPostRevealCountdown() {
  timers.clear("postRevealTimeout");
  timers.clear("postRevealInterval");
}

// ============================================================================
// BUZZ HANDLING
// ============================================================================

function handleBuzz(player) {
  if (!state.allowBuzz) return;

  stopWordReveal();
  cancelPostRevealCountdown();
  setButtonsEnabled([UI.buzz1, UI.buzz2], false);

  state.buzzingPlayer = player;
  toggleHidden(UI.buzzInfo, false);
  updateDisplay(UI.buzzText, `Player ${player} buzzed!`);

  startBuzzRevealCountdown();
}

function startBuzzRevealCountdown() {
  let remaining = CONFIG.BUZZ_REVEAL_DELAY;
  updateDisplay(UI.buzzCountdown, `${remaining}ms`);

  timers.setInterval("buzzRevealInterval", () => {
    remaining -= 50;
    if (remaining > 0) {
      updateDisplay(UI.buzzCountdown, `${remaining}ms`);
    }
  }, 50);

  timers.set("buzzRevealTimeout", () => {
    cancelBuzzRevealCountdown();
    revealBuzzAnswer();
  }, CONFIG.BUZZ_REVEAL_DELAY);
}

function cancelBuzzRevealCountdown() {
  timers.clear("buzzRevealTimeout");
  timers.clear("buzzRevealInterval");
  updateDisplay(UI.buzzCountdown, "");
}

function revealBuzzAnswer() {
  toggleHidden(UI.buzzInfo, true);
  toggleHidden(UI.revealArea, false);
  updateDisplay(UI.word, QUESTIONS[state.currentIndex].a);
  setButtonsEnabled([UI.markCorrect], true);
  setButtonsEnabled([UI.startBtn], true);
}

// ============================================================================
// ANSWER REVEAL
// ============================================================================

function showCorrectAnswer() {
  toggleHidden(UI.buzzInfo, true);
  toggleHidden(UI.revealArea, false);
  updateDisplay(UI.word, QUESTIONS[state.currentIndex].a);
  state.allowBuzz = false;
  setButtonsEnabled([UI.markCorrect], false);
  setButtonsEnabled([UI.startBtn], true);
}

// ============================================================================
// QUESTION FLOW
// ============================================================================

function markResult(isCorrect) {
  if (!state.buzzingPlayer) {
    toggleHidden(UI.revealArea, true);
    startNext();
    return;
  }

  if (isCorrect) {
    state.recordScore(state.buzzingPlayer);
  }

  updateScoresUI();
  state.buzzingPlayer = null;
  state.allowBuzz = false;
  cancelPostRevealCountdown();
  toggleHidden(UI.revealArea, true);
  startNext();
}

function startNext() {
  stopWordReveal();
  cancelPostRevealCountdown();
  state.resetForNewQuestion();

  toggleHidden(UI.revealArea, true);
  toggleHidden(UI.buzzInfo, true);
  setButtonsEnabled([UI.markCorrect], false);
  setButtonsEnabled([UI.startBtn], false);

  const delay = Math.max(CONFIG.MIN_WORD_DELAY, 
                         parseInt(UI.wordDelayInput.value) || CONFIG.DEFAULT_WORD_DELAY);
  timers.setInterval("wordReveal", revealNextWord, delay);
}

// ============================================================================
// EVENT LISTENERS - MOUSE/TOUCH
// ============================================================================

UI.startBtn.addEventListener("click", () => {
  if (!UI.startBtn.disabled) startNext();
});

UI.buzz1.addEventListener("click", () => {
  if (!UI.buzz1.disabled) handleBuzz(1);
});

UI.buzz2.addEventListener("click", () => {
  if (!UI.buzz2.disabled) handleBuzz(2);
});

UI.markCorrect.addEventListener("click", () => {
  if (!UI.markCorrect.disabled) markResult(true);
});

// ============================================================================
// EVENT LISTENERS - KEYBOARD
// ============================================================================

document.addEventListener("keydown", (e) => {
  const keyMap = {
    " ": () => !UI.startBtn.disabled && startNext(),
    "f": () => !UI.buzz1.disabled && handleBuzz(1),
    "j": () => !UI.buzz2.disabled && handleBuzz(2),
    "1": () => !UI.markCorrect.disabled && markResult(true),
    "r": () => {
      stopWordReveal();
      toggleHidden(UI.revealArea, false);
    },
  };

  const handler = keyMap[e.key.toLowerCase()];
  if (handler) {
    e.preventDefault();
    handler();
  }
});

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  renderQuestionList();
  updateScoresUI();
}

init();