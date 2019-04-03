// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "photo.jpg",

    levels: {

        start: {
            message: "You wake up and start a New Day",
            choices: [
                {
                    text: "Go to School",
                    nextLevel: "School",

                },

                {
                    text: "Skip School",
                    nextLevel: "Mall",
                },
            ]
        },

        School: {
            background_image: "school.jpg",
            music: "",
            message: "you made it to school!",
            choices: [
                {
                    text: "Go to class",
                    nextLevel: "Class",

                },
           {text:"pull the fire alarm",
           nextLevel:"principal",

},


            ]


        },

        Mall:{background_image: "mall.jpg",
            music: "",
            message: "At the mall",
            choices:[
                {text:"steal",
                nextLevel:"arrested",

                },
                {
                 text:"buy",
                nextLevel:"buy",
                }
                ]
        },

        arrested:{background_image: "jail.jpg",
            music: "",
            message: "You got caught and went to jail",
            choices:[
                {text:"oh boy, start over!",
                nextLevel:"start",

                }
                ]
        },
        buy:{background_image: "bags.jpeg",
            music: "",
            message: "You won!!!",
            choices:[
                {text:"start over",
                nextLevel:"start",
                }

                ]

     },




        principal:{background_image: "",
            music: "",
            message: "You got caught",
            choices: [
                {text:"better luck next time ",
                nextLevel:"start",

                }
        ]
        },

     Class: {background_image:"",
        music:"",
        message: "booo you goodie two shoes",
        choices:[
            {
                text:"start",
                nextLevel:"start",
            }



            ]




},

 }

};
