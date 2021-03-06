const { app, BrowserWindow } = require('electron')
let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 360,
    height: 575,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    resizable:false,
    show:false,
  })
  win.setMenu(null);
  win.loadURL(`file://${__dirname}/dist/index.html`)

  win.once('ready-to-show', function() {
    win.show()
  })
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
  win.webContents.openDevTools()
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
