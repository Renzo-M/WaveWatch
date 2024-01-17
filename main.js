const { app, BrowserWindow, Menu, Tray, ipcRenderer } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 360,
        frame:false,
        title: "Surf's Up?",
        icon: path.join(__dirname, 'wave.png'),
        webPreferences: {
            nodeIntegration: true
        },
        skipTaskbar:true
    })
    const iconPath = path.join(__dirname, 'wave.png')

    
    const menu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(menu);

    win.webContents.on('page-title-updated', () => {
        win.setTitle("Surf's Up?"); // Update the window title when the page title changes
    });

    
    win.setIcon(iconPath);
    
    win.loadURL('https://tecvoznuvem.com.br/embed/590591/rio-de-janeiro/rio-de-janeiro/rico-surf-macumba?autoplay=true&sound=true')

    return win
}


const createTray = () =>{
    const iconPath = path.join(__dirname, 'wave.png')


    const tray = new Tray(iconPath)

    return tray
}



const App = () =>{
    const win = createWindow()
    const tray = createTray()
    tray.on('click', ()=>{
        if (win.isVisible()){
            win.hide()
        }
        else{
            win.show()
            win.focus()
        }
    })
    tray.on('right-click', ()=>{
        if (process.platform !== 'darwin'){
            app.quit()
        }
    })
}

app.whenReady().then(() => {
    App()
})


app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin')[
        app.quit()
    ]
})
