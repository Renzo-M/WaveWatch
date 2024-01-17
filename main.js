const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 360,
        frame:true,
        title: "Surf's Up?",
        icon: path.join(__dirname, 'wave.png')
    })
    const iconPath = path.join(__dirname, 'wave.png')

    
    const menu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(menu);

    win.webContents.on('page-title-updated', () => {
        win.setTitle("Surf's Up?"); // Update the window title when the page title changes
    });

    
    win.setIcon(iconPath);
    
    win.loadURL('https://tecvoznuvem.com.br/embed/590591/rio-de-janeiro/rio-de-janeiro/rico-surf-macumba?autoplay=true&sound=true')
}


app.whenReady().then(() => {
    createWindow()
})



app.on('window-all-closed', ()=>{
    app.quit()
})
