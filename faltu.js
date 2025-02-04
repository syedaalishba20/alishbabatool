const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
          correctAnswer: 1,
        },
        {
          question: "What is favicon ?",
          options: ["A small icon displayed in the browser tab, representing a website;", "A type of font used for website headers;", "A type of font used for website headers;", "A type of font used for website headers;"],
          correctAnswer: 0,
        },
        {
          question: "How can you make numbered list in HTML?",
          options: ["<ul>,<li>", "<ol>,<li>", "<ol>,<ul>,", "<li>,<al>"],
          correctAnswer: 1,
        },
        {
          question: "Which tag is used to create a line break",
          options: ["<br>", "<line>", "<break>", "<hr>"],
          correctAnswer: 0,
        },
        {
          question: "Which tag is used to create a hyperlink?",
          options: [" <a>", "<link>", "<hyperlink>", " <src>"],
          correctAnswer: 3,
        },
        {
          question: "How do you insert a comment in HTML?",
          options: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", " *This is a comment*"],
          correctAnswer: 0,
        },
        {
          question: "How do you create a checkbox in HTML?",
          options: ["<input type=checkbox>", "<input type='check'>", "<input type='checkbox'>", "<input type='check'>"],
          correctAnswer: 2,
        },
        {
          question: " How do you define a paragraph in HTML?",
          options: ["<text>", "<para>", "<paragraph>", "<p>"],
          correctAnswer: 3,
        },
        {
          question: " How do you insert an image in HTML??",
          options: ["<img src=image.jpg>", "<image src='image.jpg'>", "<img href='image.jpg'>", "<image href='image.jpg'>"],
          correctAnswer: 1,
        },
        {
          question: "What are HTML attributes??",
          options: ["They are used to define the behavior of an HTML element", "They are used to define the structure of an HTML document", "They are used to define the style of an HTML document", "They provide additional information about an element"],
          correctAnswer: 3,
        },
        {
          question: "How do you use the <iframe> tag in HTML??",
          options: ["To embed another webpage or content within a webpage","To create a frame around an image","To define a section of a webpage","To create a table"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the <title> tag used for?",
          options: ["To define the title of a webpage", "To define the author of a webpage", "To define the description of a webpage", "To define the keywords of a webpage"],
          correctAnswer: 0,
        },
        {
          question: "Which HTML element is used to define the structure of a table?",
          options: ["<table>", "<tr>", "<td>", "<th>"],
          correctAnswer: 1,
        },
        {
          question: " Which HTML element is used to define emphasized text?",
          options: ["<i>", "<em>", "<italic>", "<strong>"],
          correctAnswer: 1,
        },
        {
          question: ". Which HTML element is used to define a description list?",
          options: ["<dd>", "<dt>", "<dl>", "<list>"],
          correctAnswer: 2,
        },
        {
          question: "Which HTML attribute is used to specify an alternate text for an image if the image cannot be displayed?",
          options: ["src", "alt", "title", "href"],
          correctAnswer: 1,
        },
        {
            question: "How can you make numbered list in HTML?",
            options: ["<ul>,<li>", "<ol>,<li>", "<ol>,<ul>,", "<li>,<al>"],
            correctAnswer: 1,
          },
          {
            question: "Which tag is used to create a line break",
            options: ["<br>", "<line>", "<break>", "<hr>"],
            correctAnswer: 0,
          },
          {
            question: "Which tag is used to create a hyperlink?",
            options: [" <a>", "<link>", "<hyperlink>", " <src>"],
            correctAnswer: 3,
          },
          {
            question: "How do you insert a comment in HTML?",
            options: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", " *This is a comment*"],
            correctAnswer: 0,
          },
          {
            question: "How do you create a checkbox in HTML?",
            options: ["<input type='checkbox'>", "<input type='check'>", "<input type='checkbox'>", "<input type='check'>"],
            correctAnswer: 2,
          },
          {
            question: " How do you define a paragraph in HTML?",
            options: ["<text>", "<para>", "<paragraph>", "<p>"],
            correctAnswer: 3,
          },
          {
            question: " How do you insert an image in HTML??",
            options: ["<img src=image.jpg>", "<image src='image.jpg'>", "<img href='image.jpg'>", "<image href='image.jpg'>"],
            correctAnswer: 1,
          },
          {
            question: "What are HTML attributes??",
            options: ["They are used to define the behavior of an HTML element", "They are used to define the structure of an HTML document", "They are used to define the style of an HTML document", "They provide additional information about an element"],
            correctAnswer: 3,
          },
          {
            question: "How do you use the <iframe> tag in HTML??",
            options: ["To embed another webpage or content within a webpage","To create a frame around an image","To define a section of a webpage","To create a table"],
            correctAnswer: 0,
          },
          {
            question: "Which of the following is NOT a semantic HTML element?",
            options: ["<header>", "<footer>", "<div>", "<article>"],
            correctAnswer: 2,
          },
          {
            question: "What is the <title> tag used for?",
            options: ["To define the title of a webpage", "To define the author of a webpage", "To define the description of a webpage", "To define the keywords of a webpage"],
            correctAnswer: 0,
          },
      ],
    },/*
    {
      category: "geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "Canada", "Australia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
    {
      category: "mathematics",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 11²?",
          options: ["121", "131", "141", "111"],
          correctAnswer: 3,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 1,
        },
        {
          question: "What is 3 × 7 + 2?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
    {
      category: "entertainment",
      questions: [
        {
          question: "Who won the Academy Award for Best Actor in 2022?",
          options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
          correctAnswer: 1,
        },
        {
          question: "Which movie won the Academy Award for Best Picture in 2021?",
          options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
          correctAnswer: 3,
        },
        {
          question: "Who played the character of Jack Dawson in the movie Titanic?",
          options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
          correctAnswer: 0,
        },
        {
          question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
          options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
          correctAnswer: 1,
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
          correctAnswer: 0,
        },
        {
          question: "Which superhero is known for saying, 'I am Iron Man'?",
          options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
          correctAnswer: 3,
        },
        {
          question: "Which movie franchise includes a character named Luke Skywalker?",
          options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
          correctAnswer: 1,
        },
        {
          question: "Who played the character of Hermione Granger in the Harry Potter film series?",
          options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
          correctAnswer: 0,
        },
        {
          question: "Who directed the movie 'Inception'?",
          options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
          correctAnswer: 2,
        },
        {
          question: "Which artist released the album 'Lover' in 2019?",
          options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
          correctAnswer: 1,
        },
        {
          question: "What was the first video game to feature Mario?",
          options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
          correctAnswer: 2,
        },
        {
          question: "Which movie features the famous line, 'Here's looking at you, kid'?",
          options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
          correctAnswer: 0,
        },
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["France", "Germany", "Argentina", "Brazil"],
          correctAnswer: 0,
        },
        {
          question: "Who created the comic book character Spider-Man?",
          options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
          correctAnswer: 1,
        },
        {
          question: "In which movie did Heath Ledger portray the Joker?",
          options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
          correctAnswer: 0,
        },
        {
          question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
          options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
          correctAnswer: 2,
        },
        {
          question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
          options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
          correctAnswer: 2,
        },
        {
          question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
          options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
          correctAnswer: 2,
        },
        {
          question: "Which Disney animated film features the song 'A Whole New World'?",
          options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
          correctAnswer: 1,
        },
        {
          question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
          options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
          correctAnswer: 3,
        },
        {
          question: "Who sang the hit song 'Shape of You'?",
          options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
          correctAnswer: 3,
        },
        {
          question: "Which film won the Academy Award for Best Picture in 2020?",
          options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
          correctAnswer: 2,
        },
        {
          question: "What year did the movie 'The Matrix' release?",
          options: ["1997", "1998", "2000", "1999"],
          correctAnswer: 3,
        },
        {
          question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
          options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
          correctAnswer: 2,
        },
        {
          question: "Which singer is known as the 'Queen of Pop'?",
          options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
          correctAnswer: 3,
        },
      ],
    },*/
  ];