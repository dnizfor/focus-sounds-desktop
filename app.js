const electron = require("electron") 
const url = require("url")
const path = require("path"); 


const {app, BrowserWindow , Menu} = electron; 

let mainWindow ; 

app.on("ready",()=>{ 
    
    
    mainWindow = new BrowserWindow({
        'title': `Focus Sounds`,
        'minHeight': 700,
        'minWidth': 750,
    })

    mainWindow.loadURL(
        url.format({
            pathname : path.join(__dirname,"public/page/index.html") ,
            protocol:"file" ,
            slashes : true 
        })

        
    )
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)
})

let mainMenuTemplate = [
    {
        label: "Quit",
        role : "quit"
     


    }
]