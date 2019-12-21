VERSION 7 - LAYOUT
- Transferred the plants/index.ejs file
- Transferred the header.ejs file
- Transferred the landing page file
- Transferred the public folder (CSS/JS EVENT)
- Transferred footer.ejs
- Transferred the images file

TO DO
- Cant get the header to show up of the landing page... fix?
- Need a footer
- Need to add description, and image among other things to plants

>COMMENT ROUTES
- Need to separate the blog comment routes from plant comments (make plant comments route and 
blog comments route separate), then need to make plantComments in views (like blogComments is)

>PLANTS
--> model
    - Add image
    - Add description
    - Add location
    - pedals, sepals count/ color

--> show.ejs
    - Need to style output for image
    - output for description
    - output for location
    - output for sepals/ pedals count/ color 
        - place in KCAG form

--> new.ejs
    - Need to add place to input image  
    - description
    - location
    - sepals,pedals

ADDING VALUE TO MODEL 
- Have to add the value and type to the model
- Change the show.ejs file
- Change the new.ejs file
- Change edit.ejs file
- Add property to the create route and insert into the object created

ADD TOOLTIP
https://stackoverflow.com/questions/7117073/add-a-tooltip-to-a-div

ADD PLANT KEY
1) Turn pdftotext
2) Order each sentence onto separate lines (result must be separated at end by '. . . .', sentence must start with #[letter])
3) Use rin_group_extractor (/usr/local/bin) script , will need to have it here so $PATH calls it and can access it from anywhere in the terminal
    - Will need to type type the name of the file when asked (so need to call in the folder where file located so it can access)
4) Place into public/scripts/plant_keys
5) Place import statement into the plant route
6) Place into the keys object which is used to access the keys
7) Add new object to the /keys route with parameters {name,group} which are passed to the keys index page where people can choose which key they want
8) Will be called in the /plant/keys/:param route and accessed depending on which parameter given (:param) --> keys[:param]